import arcade
import json
import random

# Constants
SCREEN_TITLE = "Galaxy Drift"
TILE_SCALING = 2.2
PLAYER_SCALING = 3
MOVEMENT_SPEED_BASE=2
MOVEMENT_SPEED = 10
MOVEMENT_SPEED_TOTAL = MOVEMENT_SPEED * MOVEMENT_SPEED_BASE
START_X = 4102 * TILE_SCALING # 4102
START_Y = 1897 * TILE_SCALING # 1897
SCREEN_WIDTH = 1920
SCREEN_HEIGHT = 1080
TRUE_SCREEN_WIDTH= 3000
TRUE_SCREEN_HEIGHT = 1800
PROXIMITY_DIS = 10
PROXIMITY_DIS = 10
POS_DRONES = [
    (8, [(1375,1979), (1075, 1978), (1075, 2079), (874, 2078), (874, 1578), (1375, 1578), (1375,1979)]), # Full rounds around big square in center of maze
    (8, [(874, 1578), (1375, 1578), (1375,1979), (1375,1979), (1075, 1978), (1075, 2079), (874, 2078)]), # Full rounds around big square in center of maze
    (12, [(874, 2078), (874, 1878), (1074, 1878), (1074, 2078)]), # Drones in small circle guarding key in maze,
    (10, [(1174, 1378), (1174, 978), (1474, 978)]), # Drone guarding cat,
    (10, [(374, 1781), (574, 1781), (574, 1581), (374, 1581)]), # drone in small circle guarding drill in maze
    (12, [(565, 2181), (174, 2181), (174, 1681), (365, 1681)]), # drone guarding the drill maze
    (12, [(365, 1681), (174, 1681), (174, 2181), (565, 2181)]), # drone guarding the drill maze
    (8, [(574, 1581), (374, 1581), (374, 1781), (574, 1781), (574, 1681), (874, 1681), (874, 1881), (1074, 1881), (1074, 2081)]), # drone in normal maze and drill maze,
    (12, [(1629, 1034), (1765, 1034), (1765, 416), (1629, 416)]), # drone guarding the lower astronaut (circles)
    (12, [(1765, 1034), (1765, 416), (1629, 416), (1629, 1034)]), # drone guarding the lower astronaut (circles)
    (12, [(1765, 416), (1629, 416), (1629, 1034), (1765, 1034)]), # drone guarding the lower astronaut (circles)
    (12, [(1629, 416), (1629, 1034), (1765, 1034), (1765, 416)]), # drone guarding the lower astronaut (circles)
    (10, [(1702, 453), (1702, 971)]), # drone guarding the lower astronaut (straight line)
    (10, [(1702, 971), (1702, 453)]), # drone guarding the lower astronaut (straight line)
]


POS_KEY_INDICATOR = (500, 500)
POS_ASTRONAUT = [(3610, 1904), (2847, 2206), (1965, 1551), (1702, 1997), (1711, 242)]
POS_RESPAWN = [(2502, 2451), (2229, 260), (3521, 2357), (3102, 2224), (2911, 1560), (2211, 251), (1647, 1481), (1702, 1200)]
POS_CAT = (1465, 978)
POS_VENDING_A = (2680, 2590)
POS_VENDING_B = (1611, 1700)
POS_KEY_SINGLE = (3701, 1904)
POS_KEY_RED = (2347, 3078)
POS_KEY_BLUE = (2002, 2451)
POS_KEY_ORANGE = (2638, 987)
POS_KEY_GREEN = (974, 2170)
POS_DRILL = [(4030, 2357), (565, 2178)]
POS_BOMBS = (2347, 1806)
POS_LIGHTERS = [(2556, 987), (1756, 250)]
POS_ROBOT = (2502, 2824)

SCALE_KEY_INDICATOR = 1
SCALE_ASTRONAUT = 4
SCALE_CAGE = 4
SCALE_RESPAWN = 1
SCALE_CAT = 1
SCALE_VENDING_A = 1
SCALE_VENDING_B = 1
SCALE_KEY = 3
SCALE_DRILL = 1
SCALE_BOMBS = 4
SCALE_LIGHTERS = 3
SCALE_ROBOT = 2.5
SCALE_DRONE = 3.5


#4102,1897 spawn coords

class ParallaxLayer:
    def __init__(self, num_circles, speed, sizeMin, sizeMax):
        self.circles = []
        self.speed = speed
        for _ in range(num_circles):
            size = random.uniform(sizeMin,sizeMax)
            x = random.randint(0, TRUE_SCREEN_WIDTH)
            y = random.randint(0, TRUE_SCREEN_HEIGHT)
            offset = random.uniform(0.925,1.075)
            self.circles.append((size, x, y, offset))

    def update(self, delta_x, delta_y):
        for i, (size, x, y, offset) in enumerate(self.circles):
            x -= delta_x * self.speed * offset
            y -= delta_y * self.speed * offset

            # Wrap around the screen
            if x < 0: x += TRUE_SCREEN_WIDTH
            if x > TRUE_SCREEN_WIDTH: x -= TRUE_SCREEN_WIDTH
            if y < 0: y += TRUE_SCREEN_HEIGHT
            if y > TRUE_SCREEN_HEIGHT: y -= TRUE_SCREEN_HEIGHT
            
            self.circles[i] = (size, x, y, offset)

class ParallaxPlanets:
    def __init__(self, scene):
        self.planets = []
        for _ in range(40):
            size = random.uniform(1.5,4)
            speed = random.uniform(MOVEMENT_SPEED_TOTAL / 100, MOVEMENT_SPEED_TOTAL / 500)
            planet = arcade.Sprite("./Tiles/planets/"+random.choice(["planet1.png", "planet2.png", "planet3.png", "planet4.png", "planet5.png", "planet6.png", "planet7.png"]), size, center_x=random.randint(0, int(4166 * TILE_SCALING)), center_y=random.randint(0, int(3257 * TILE_SCALING)))
            planet.alpha = 250
            scene.append(planet)
            self.planets.append((speed, planet))

    def update(self, delta_x, delta_y):
        for i, (speed, planet) in enumerate(self.planets):
            planet.center_x += delta_x * speed
            planet.center_y += delta_y * speed
            
            self.planets[i] = (speed, planet)
            
class DroneSystem:
    def __init__(self, scene):
        self.drones = []
        for speed, targets in POS_DRONES:
            drone = arcade.Sprite("./Tiles/drone.png", SCALE_DRONE, center_x=targets[0][0] * TILE_SCALING, center_y=targets[0][1] * TILE_SCALING)
            scene.add_sprite("Drone", drone)
            self.drones.append((speed, 1, 1, targets, drone))

    def update(self):
        for i, (speed, change, target, targets, drone) in enumerate(self.drones):
            if abs(drone.center_x - targets[target][0] * TILE_SCALING) > speed:
                if drone.center_x > targets[target][0] * TILE_SCALING:
                    drone.center_x -= speed
                else:
                    drone.center_x += speed
            elif abs(drone.center_y - targets[target][1] * TILE_SCALING) > speed:

                if drone.center_y > targets[target][1] * TILE_SCALING:
                    drone.center_y -= speed
                else:
                    drone.center_y += speed
            else:

                drone.center_x = targets[target][0] * TILE_SCALING
                drone.center_y = targets[target][1] * TILE_SCALING
                if change == 1 and target == len(targets)-1:
                    change = -1
                elif change == -1 and target == 0:
                    change = 1
                target += change
            self.drones[i] = (speed, change, target, targets, drone)



class NameSprite(arcade.Sprite):
    def __init__(self, image_file, scale=1.0, name="", center_x=0, center_y=0):
        super().__init__(image_file, scale)
        self.name = name
        self.center_x = center_x  # Set center_x during initialization
        self.center_y = center_y  # Set center_y during initialization
    
class MyGame(arcade.Window):
    def __init__(self):
        SCREEN_WIDTH = arcade.get_display_size()[0]
        SCREEN_HEIGHT = arcade.get_display_size()[1] 
        super().__init__(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_TITLE, fullscreen=True)
        self.tile_map = None
        self.wall_list = None
        self.view_left = 0
        self.view_bottom = 0


        # Variables for different keys
        self.currentKey = "none"
        
        #amount of fuel
        self.currentFuel = 0
    
        #frame number variable for most animations
        self.frameNum = 0

        #meteor list
        self.meteor_list = {}
        
        #fading out list
        self.removals = arcade.SpriteList()

        #cooldown timer
        self.cooldown = 0

        #player holding item
        self.itemHeld = False
        self.currentItem = 'none'

        #buttonprompt
        self.renderButton = False
        

    def fadeKill(self, sprite):
        for sprite_list_name in self.scene.name_mapping:
            sprite_list = self.scene.get_sprite_list(sprite_list_name)
            if sprite in sprite_list:
                sprite_list.remove(sprite)
        self.removals.append(sprite)
        
    def fadeKillList(self, spriteListName):
        spriteList = self.scene.get_sprite_list(spriteListName)
        for sprite in spriteList:
            self.removals.append(sprite)
        spriteList.clear()
        


    def setup(self):

        self.previousX = START_X
        self.previousY = START_Y

        self.background_list = arcade.SpriteList()
        self.planets = arcade.SpriteList()

        # Add background layers here, from farthest to closest
        # Example:
        self.background1 = arcade.Sprite("./Tiles/blank bg.png", 2.5)
        self.background1.center_x = START_X
        self.background1.center_y = START_Y
        self.background_list.append(self.background1)

        #render explosion texture
        
        
        # Create the tilemap
        self.tile_map = arcade.load_tilemap("./SpaceMap.json",TILE_SCALING)
        self.scene = arcade.Scene.from_tilemap(self.tile_map)
        self.parallaxTop = ParallaxLayer(80, MOVEMENT_SPEED_TOTAL / 40, 5, 7)
        self.parallaxMiddle = ParallaxLayer(160, MOVEMENT_SPEED_TOTAL / 70, 4.5, 6.5)
        self.parallaxSmall = ParallaxLayer(400, MOVEMENT_SPEED_TOTAL / 100, 3, 5)
        self.parallaxPlanets = ParallaxPlanets(self.planets)
        self.droneSystem = DroneSystem(self.scene)   
        # self.scene.add_sprite_list("Parallax Top", ParallaxLayer(100, MOVEMENT_SPEED_TOTAL * 2).circles)
        # self.scene.add_sprite_list("Parallax Middle", ParallaxLayer(100, MOVEMENT_SPEED_TOTAL * .8).circles)
        # self.scene.add_sprite_list("Parallax Bottom", ParallaxLayer(100, MOVEMENT_SPEED_TOTAL * .4).circles)

        
        #creation of each astronaut
        self.astronauts = {
        "Astronaut1": NameSprite("./Tiles/astronut.png", SCALE_ASTRONAUT, center_x=POS_ASTRONAUT[0][0] * TILE_SCALING, center_y=POS_ASTRONAUT[0][1] * TILE_SCALING, name="Astronaut1"),
        "Astronaut2": NameSprite("./Tiles/astronut.png", SCALE_ASTRONAUT, center_x=POS_ASTRONAUT[1][0] * TILE_SCALING, center_y=POS_ASTRONAUT[1][1] * TILE_SCALING, name="Astronaut2"),
        "Astronaut3":  NameSprite("./Tiles/astronut.png", SCALE_ASTRONAUT, center_x=POS_ASTRONAUT[2][0] * TILE_SCALING, center_y=POS_ASTRONAUT[2][1] * TILE_SCALING, name="Astronaut3"),
        "Astronaut4":  NameSprite("./Tiles/astronut.png", SCALE_ASTRONAUT, center_x=POS_ASTRONAUT[3][0] * TILE_SCALING, center_y=POS_ASTRONAUT[3][1] * TILE_SCALING, name="Astronaut4"),
        "Astronaut5": NameSprite("./Tiles/astronut.png", SCALE_ASTRONAUT, center_x=POS_ASTRONAUT[4][0] * TILE_SCALING, center_y=POS_ASTRONAUT[4][1] * TILE_SCALING, name="Astronaut5")
        }
        self.scene.add_sprite("Astronaut", self.astronauts["Astronaut1"])
        self.scene.add_sprite("Astronaut", self.astronauts["Astronaut2"])
        self.scene.add_sprite("Astronaut", self.astronauts["Astronaut3"])
        self.scene.add_sprite("Astronaut", self.astronauts["Astronaut4"])
        self.scene.add_sprite("Astronaut", self.astronauts["Astronaut5"])

        self.astronautMessages = {
            "Astronaut1": ["Thank you!","Take some rocket fuel for your trouble!","Some of my friends in the maze", "may have more for you!"],
            "Astronaut2": ["Thank you so much!","Take this rocket fuel!"],
            "Astronaut3": ["Could've gotten out without your help,","but I guess I owe you one."],
            "Astronaut4": ["AAAAAHHHH! An alien!","You can have all my fuel,","just please don't hurt me!"],
            "Astronaut5": ["Sorry I don't have more fuel, the last","of mine was left in that room over there."]
        }

        self.showAstronautMessages = {
            "Astronaut1": False,
            "Astronaut2": False,
            "Astronaut3": False,
            "Astronaut4": False,
            "Astronaut5": False,
        }


        #creation of evil bot
        self.evilBot = arcade.Sprite("./Tiles/tracking drone.png", SCALE_ROBOT, center_x=POS_ROBOT[0] * TILE_SCALING, center_y=POS_ROBOT[1] * TILE_SCALING)
        self.scene.add_sprite("Evil Bot", self.evilBot)        
        #creation of vending machines
        self.vendingSpeed = arcade.Sprite("./Tiles/vendingmachine.png", SCALE_CAGE, center_x=POS_VENDING_A[0] * TILE_SCALING, center_y=POS_VENDING_A[1] * TILE_SCALING)
        # self.vendingHealth = arcade.Sprite("./Tiles/vendingmachine.png", SCALE_CAGE, center_x=POS_VENDING_B[0] * TILE_SCALING, center_y=POS_VENDING_B[1] * TILE_SCALING)
        
        self.scene.add_sprite("Vending Speed", self.vendingSpeed)
        # self.scene.add_sprite("Vending Health", self.vendingHealth)
        
        self.scene.add_sprite("Vending Speed", arcade.Sprite("./Tiles/alien juice green.png", SCALE_CAGE, center_x=POS_VENDING_A[0] * TILE_SCALING + 100, center_y=POS_VENDING_A[1] * TILE_SCALING - 50))
        # self.scene.add_sprite("Vending Health", arcade.Sprite("./Tiles/alien juice red.png", SCALE_CAGE, center_x=POS_VENDING_B[0] * TILE_SCALING + 100, center_y=POS_VENDING_B[1] * TILE_SCALING - 50))
        
        #creation of bomb source
        self.bombSource = arcade.Sprite("./Tiles/bomb.png", SCALE_BOMBS, center_x=2347 * TILE_SCALING, center_y=1797 * TILE_SCALING)
        self.scene.add_sprite("Bomb Source", self.bombSource)
        #creation of cages
        self.cage1 = self.scene.add_sprite("Cages", arcade.Sprite("./Tiles/cage.png", SCALE_CAGE, center_x=POS_ASTRONAUT[0][0] * TILE_SCALING, center_y=POS_ASTRONAUT[0][1] * TILE_SCALING))
        self.cage2 = self.scene.add_sprite("Cages", arcade.Sprite("./Tiles/cage.png", SCALE_CAGE, center_x=POS_ASTRONAUT[1][0] * TILE_SCALING, center_y=POS_ASTRONAUT[1][1] * TILE_SCALING))
        self.cage3 = self.scene.add_sprite("Cages", arcade.Sprite("./Tiles/cage.png", SCALE_CAGE, center_x=POS_ASTRONAUT[2][0] * TILE_SCALING, center_y=POS_ASTRONAUT[2][1] * TILE_SCALING))
        self.cage4 = self.scene.add_sprite("Cages", arcade.Sprite("./Tiles/cage.png", SCALE_CAGE, center_x=POS_ASTRONAUT[3][0] * TILE_SCALING, center_y=POS_ASTRONAUT[3][1] * TILE_SCALING))
        self.cage5 = self.scene.add_sprite("Cages", arcade.Sprite("./Tiles/cage.png", SCALE_CAGE, center_x=POS_ASTRONAUT[4][0] * TILE_SCALING, center_y=POS_ASTRONAUT[4][1] * TILE_SCALING))

        
        #creation of keys
        self.keyone = arcade.Sprite("./Tiles/default key.png", SCALE_KEY, center_x=POS_KEY_SINGLE[0] * TILE_SCALING, center_y=POS_KEY_SINGLE[1] * TILE_SCALING)
        self.keyred = arcade.Sprite("./Tiles/red keys.png", SCALE_KEY, center_x=POS_KEY_RED[0] * TILE_SCALING, center_y=POS_KEY_RED[1] * TILE_SCALING)
        self.keygreen = arcade.Sprite("./Tiles/green keys.png", SCALE_KEY, center_x=POS_KEY_GREEN[0] * TILE_SCALING, center_y=POS_KEY_GREEN[1] * TILE_SCALING)
        self.keyblue = arcade.Sprite("./Tiles/blue keys.png", SCALE_KEY, center_x=POS_KEY_BLUE[0] * TILE_SCALING, center_y=POS_KEY_BLUE[1] * TILE_SCALING)
        self.keyorange = arcade.Sprite("./Tiles/orange keys.png", SCALE_KEY, center_x=POS_KEY_ORANGE[0] * TILE_SCALING, center_y=POS_KEY_ORANGE[1] * TILE_SCALING)

        self.scene.add_sprite("Keys", self.keyone)
        self.scene.add_sprite("Keys", self.keyred)
        self.scene.add_sprite("Keys", self.keygreen)
        self.scene.add_sprite("Keys", self.keyblue)
        self.scene.add_sprite("Keys", self.keyorange)


        #creation of drills
        self.drill1 = arcade.Sprite("./Tiles/drill.png", 3, center_x=4030 * TILE_SCALING, center_y=2357 * TILE_SCALING)
        self.scene.add_sprite("Drill", self.drill1)
        self.drill2 = arcade.Sprite("./Tiles/drill.png", 3, center_x=565 * TILE_SCALING, center_y=2178 * TILE_SCALING)
        self.scene.add_sprite("Drill", self.drill2)

         #creation of lighters
        self.ignition1 = arcade.Sprite("./Tiles/ignition1.png", SCALE_LIGHTERS, center_x=2556 * TILE_SCALING, center_y=987 * TILE_SCALING)
        self.scene.add_sprite('ignition', self.ignition1)
        self.ignition2 = arcade.Sprite("./Tiles/ignition1.png", SCALE_LIGHTERS, center_x=1756 * TILE_SCALING, center_y=250 * TILE_SCALING)
        self.scene.add_sprite('ignition', self.ignition2)

        self.selectedRespawn = False
        for respawn in POS_RESPAWN:
            newRespawn = arcade.Sprite("./Tiles/checkpoint-off.png", PLAYER_SCALING, center_x=respawn[0] * TILE_SCALING, center_y=respawn[1] * TILE_SCALING)
            if not self.selectedRespawn:
                self.selectedRespawn = newRespawn
            self.scene.add_sprite("Respawn", newRespawn) 
            # Extract layers
        # self.wall_list = arcade.tilemap.process_layer(self.tile_map, 'Walls', TILE_SCALING)

        #player model
        self.playerpoint = arcade.Sprite("./Tiles/playerpoint.png", PLAYER_SCALING, center_x=START_X, center_y=START_Y)
        self.scene.add_sprite("Playerpoint", self.playerpoint)

        self.spaceship = arcade.Sprite("./Tiles/alien player model.png", PLAYER_SCALING, center_x=START_X, center_y=START_Y)
        self.scene.add_sprite("Spaceship", self.spaceship)

        self.bigship = arcade.Sprite("./Tiles/bigship.png", 5, center_x=START_X + 500, center_y=START_Y)
        self.scene.add_sprite("Bigship", self.bigship)

        #UI

        self.uiList = arcade.SpriteList()
        self.keyUI = arcade.Sprite("./Tiles/key blank.png", SCALE_KEY + .5, center_x=self.spaceship.right + SCREEN_WIDTH / 2 - 100, center_y=self.spaceship.top + 540 - 150)
        self.uiList.append(self.keyUI)
        self.gauge = arcade.Sprite("./Tiles/fuel0.png", SCALE_KEY + .5, center_x=self.spaceship.right + SCREEN_WIDTH / 2 - 100, center_y=self.spaceship.top + 540 - 250)
        self.uiList.append(self.gauge)
        self.inventory = arcade.Sprite("./Tiles/empty item.png", 3, center_x=self.spaceship.right + SCREEN_WIDTH / 2 - 100, center_y=self.spaceship.top + 540 - 650)
        self.uiList.append(self.inventory)

        self.buttonPrompts = arcade.SpriteList()
        self.buttonPrompt = arcade.Sprite("./Tiles/buttonPrompt.png", 6, center_x=self.spaceship.right + SCREEN_WIDTH / 2 - 200, center_y=self.spaceship.top + 540 - 650)
        self.buttonPrompts.append(self.buttonPrompt)
        
        

        
    
    def on_draw(self):
        self.clear()
        self.background_list.draw()
        for size, x, y, offset in self.parallaxSmall.circles:
            arcade.draw_circle_filled((self.playerpoint.center_x + x - TRUE_SCREEN_WIDTH / 2), (self.playerpoint.center_y + y - TRUE_SCREEN_HEIGHT / 2), size, arcade.color_from_hex_string("#FFF9DC"))
        for size, x, y, offset in self.parallaxMiddle.circles:
            arcade.draw_circle_filled((self.playerpoint.center_x + x - TRUE_SCREEN_WIDTH / 2), (self.playerpoint.center_y + y - TRUE_SCREEN_HEIGHT / 2), size, arcade.color_from_hex_string("#FFF9DC"))
        for size, x, y, offset in self.parallaxTop.circles:
            arcade.draw_circle_filled((self.playerpoint.center_x + x - TRUE_SCREEN_WIDTH / 2), (self.playerpoint.center_y + y - TRUE_SCREEN_HEIGHT / 2), size, arcade.color_from_hex_string("#FFF9DC"))
        self.planets.draw()
        self.removals.draw()
        self.scene.draw()

        if self.renderButton == True:
            self.buttonPrompts.draw()
        
        for key in self.astronauts.keys():
            if self.showAstronautMessages[key]:
                messages = self.astronautMessages[key]
                for i, line in enumerate(messages):
                    text_width = arcade.Text(line, 0, 0, arcade.color.WHITE, 22).content_width
                    x_position = (self.astronauts[key].center_x - text_width / 2)
                    arcade.draw_text(line, x_position, self.astronauts[key].center_y + 60 + len(messages) * 30 - i*30, arcade.color.WHITE, 22)
        self.uiList.draw()


    def checkCollisions(self):
        for list in ["Walls","Rocks","Drop Walls A", "Drop Walls B","Doors One", "Doors Blue", "Doors Red 1","Doors Red 2", "Doors Green","Doors Orange", "Drop Activator A", "Drop Activator B"]:
            if len(arcade.check_for_collision_with_list(self.playerpoint, self.scene.get_sprite_list(list))) > 0:
                return True
        return False

    def on_update(self, delta_time):

        #update frame number
        if self.frameNum < 80:
            self.frameNum += 1
        elif self.frameNum == 80:
            self.frameNum = 0

        # print(self.currentItem)
        # Update the player's position
        if self.cooldown == 0:
            movementChange = 1
            if self.currentItem == "speed":
                movementChange = 4
            for _ in range(MOVEMENT_SPEED + movementChange):
                if self.playerpoint.center_x >= 4174 * TILE_SCALING and self.playerpoint.change_x > 0:
                    break
                self.playerpoint.center_x += self.playerpoint.change_x
                self.playerpoint.center_y += self.playerpoint.change_y

                self.spaceship.center_x += self.playerpoint.change_x

                if self.checkCollisions():
                    self.playerpoint.center_x -= self.playerpoint.change_x  # Undo X movement
                    self.spaceship.center_x -= self.playerpoint.change_x

                self.spaceship.center_y += self.playerpoint.change_y
                if self.checkCollisions():
                    self.playerpoint.center_y -= self.playerpoint.change_y  # Undo Y movement
                    self.spaceship.center_y -= self.playerpoint.change_y
        else: 
            self.cooldown -= 1


        self.parallaxTop.update(self.playerpoint.center_x - self.previousX, self.playerpoint.center_y - self.previousY)
        self.parallaxMiddle.update(self.playerpoint.center_x - self.previousX, self.playerpoint.center_y - self.previousY)
        self.parallaxSmall.update(self.playerpoint.center_x - self.previousX, self.playerpoint.center_y - self.previousY)
        self.parallaxPlanets.update(self.playerpoint.center_x - self.previousX, self.playerpoint.center_y - self.previousY)
        self.previousX = self.playerpoint.center_x
        self.previousY = self.playerpoint.center_y

        # print(self.playerpoint.center_x / TILE_SCALING, self.playerpoint.center_y / TILE_SCALING)

        self.droneSystem.update()
        # Make evil drone target player
        if self.playerpoint.center_y > 2598 * TILE_SCALING and self.playerpoint.center_y < 3225 * TILE_SCALING and self.playerpoint.center_x > 2229 * TILE_SCALING and self.playerpoint.center_x < 2665 * TILE_SCALING:
            x_diff = self.playerpoint.center_x - self.evilBot.center_x
            y_diff = self.playerpoint.center_y - self.evilBot.center_y
            distance = (x_diff ** 2 + y_diff ** 2) ** 0.5
            if distance > 0:
                self.evilBot.change_x = (x_diff / distance) * 9  # Adjust speed as necessary
                self.evilBot.change_y = (y_diff / distance) * 9
            
            self.evilBot.center_x += self.evilBot.change_x
            self.evilBot.center_y += self.evilBot.change_y
        elif self.evilBot.center_x * TILE_SCALING != POS_ROBOT[0] or self.evilBot.center_y  * TILE_SCALING != POS_ROBOT[1]:
            x_diff = POS_ROBOT[0] * TILE_SCALING - self.evilBot.center_x
            y_diff = POS_ROBOT[1] * TILE_SCALING - self.evilBot.center_y
            distance = (x_diff ** 2 + y_diff ** 2) ** 0.5
            if distance > 10:
                self.evilBot.change_x = (x_diff / distance) * 9  # Adjust speed as necessary
                self.evilBot.change_y = (y_diff / distance) * 9
            
                self.evilBot.center_x += self.evilBot.change_x
                self.evilBot.center_y += self.evilBot.change_y
            else:
                self.evilBot.center_x = POS_ROBOT[0] * TILE_SCALING
                self.evilBot.center_y = POS_ROBOT[1] * TILE_SCALING

        # Track the viewport to the player
        arcade.set_viewport(self.playerpoint.left - SCREEN_WIDTH / 2, self.playerpoint.right + SCREEN_WIDTH / 2, self.playerpoint.bottom - SCREEN_HEIGHT / 2, self.playerpoint.top + SCREEN_HEIGHT / 2)
        self.keyUI.center_x = self.playerpoint.right + SCREEN_WIDTH / 2 - 100
        self.keyUI.center_y = self.playerpoint.top + 125
        self.gauge.center_x = self.playerpoint.right + SCREEN_WIDTH / 2 - 100
        self.gauge.center_y = self.playerpoint.top - 50
        self.inventory.center_x = self.playerpoint.left - SCREEN_WIDTH / 2 + 200
        self.inventory.center_y = self.playerpoint.bottom - 350
        self.buttonPrompt.center_x = self.playerpoint.right + SCREEN_WIDTH / 2 - 275
        self.buttonPrompt.center_y = self.playerpoint.bottom - 475

        self.background1.center_x = self.playerpoint.center_x
        self.background1.center_y = self.playerpoint.center_y


        #keys
        if not self.keyred in self.removals and arcade.check_for_collision(self.spaceship, self.keyred):
            self.currentKey = 'red';   
            self.fadeKill(self.keyred)           
            self.keyUI.texture = arcade.load_texture("./Tiles/red keys.png")

        if not self.keyblue in self.removals and arcade.check_for_collision(self.spaceship, self.keyblue):
            self.currentKey = 'blue';   
            self.fadeKill(self.keyblue)         
            self.keyUI.texture = arcade.load_texture("./Tiles/blue keys.png")

        if not self.keyorange in self.removals and arcade.check_for_collision(self.spaceship, self.keyorange):
            self.currentKey = 'orange'
            self.fadeKill(self.keyorange)            
            self.keyUI.texture = arcade.load_texture("./Tiles/orange keys.png")

        if not self.keyone in self.removals and arcade.check_for_collision(self.spaceship, self.keyone):
            self.currentKey = 'one'
            self.fadeKill(self.keyone)
            self.keyUI.texture = arcade.load_texture("./Tiles/default key.png")
            
        if not self.keygreen in self.removals and arcade.check_for_collision(self.spaceship, self.keygreen):
            self.currentKey = 'green';   
            self.fadeKill(self.keygreen)            
            self.keyUI.texture = arcade.load_texture("./Tiles/green keys.png")

        #open doors
        if self.currentKey == "green" and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Doors Green")):
            self.fadeKillList("Doors Green")
            
        if self.currentKey == "red" and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Doors Red 1")):
            self.fadeKillList("Doors Red 1")

        if self.currentKey == "red" and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Doors Red 2")):
            self.fadeKillList("Doors Red 2")
            
        if self.currentKey == "orange" and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Doors Orange")):
            self.fadeKillList("Doors Orange")
            
        if self.currentKey == "one" and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Doors One")):
            self.fadeKillList("Doors One")

        if self.currentKey == "blue" and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Doors Blue")):
            self.fadeKillList("Doors Blue")

        #drills 
        # if not self.drill1 in self.removals and arcade.check_for_collision(self.spaceship, self.drill1) and self.itemHeld == False:
        #     self.itemHeld = True
        #     self.currentItem =  'drill1' 
        #     self.fadeKill(self.drill1)        
        #     self.inventory.texture = arcade.load_texture("./Tiles/held drill.png")    
        

        #evil bot collision
        if arcade.check_for_collision(self.spaceship, self.evilBot):
            self.spaceship.center_x = self.playerpoint.center_x = self.selectedRespawn.center_x
            self.spaceship.center_y = self.playerpoint.center_y = self.selectedRespawn.center_y
            if self.currentItem == 'ingition1' or self.currentItem == 'ignition2' or self.currentItem == 'bomb':
                    print("attempting to lose item")
                    self.currentItem = 'none'
                    self.inventory.texture = arcade.load_texture("./Tiles/empty item.png")  
            self.cooldown = 7
            self.spaceship.alpha = 1
        
        #meteor collision
        for list in self.meteor_list.values():
            if arcade.check_for_collision_with_list(self.spaceship, list):
                self.spaceship.center_x = self.playerpoint.center_x = self.selectedRespawn.center_x
                self.spaceship.center_y = self.playerpoint.center_y = self.selectedRespawn.center_y
                if self.currentItem == 'ingition1' or self.currentItem == 'ignition2' or self.currentItem == 'bomb':
                    self.currentItem = 'none'
                    self.inventory.texture = arcade.load_texture("./Tiles/empty item.png")
                self.cooldown = 7
                self.spaceship.alpha = 1
        
        #drone collision
        if arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Drone")):
            self.spaceship.center_x = self.playerpoint.center_x = self.selectedRespawn.center_x
            self.spaceship.center_y = self.playerpoint.center_y = self.selectedRespawn.center_y
            if self.currentItem == 'ingition1' or self.currentItem == 'ignition2' or self.currentItem == 'bomb':
                    print("attempting to lose item")
                    self.currentItem = 'none'
                    self.inventory.texture = arcade.load_texture("./Tiles/empty item.png")  
            self.cooldown = 7
            self.spaceship.alpha = 1
            
        #respawn activation
        respawnList = self.scene.get_sprite_list("Respawn")
        for respawn in respawnList:
            if respawn != self.selectedRespawn and arcade.get_distance_between_sprites(respawn, self.spaceship) < 110*TILE_SCALING:
                self.selectedRespawn.texture = arcade.load_texture("./Tiles/checkpoint-off.png")
                self.selectedRespawn = respawn
                respawn.texture = arcade.load_texture("./Tiles/checkpoint-on.png")
        #idle
        #astronauts
        astronautsList = self.scene.get_sprite_list("Astronaut")
        for astronaut in astronautsList:
            if self.frameNum < 40:
                astronaut.center_y += 0.25
            elif self.frameNum > 40:
                astronaut.center_y -= 0.25
        #cages
        cagesList = self.scene.get_sprite_list("Cages")
        for cage in cagesList:
            if self.frameNum < 40:
                cage.center_y += 0.25
            elif self.frameNum > 40:
                cage.center_y -= 0.25
                
        
        #keys
        keysList = self.scene.get_sprite_list("Keys")
        for key in keysList:
            if self.frameNum < 40:
                key.center_y += 0.40
            elif self.frameNum > 40:
                key.center_y -= 0.40

        #asteroids
        asteroidList = self.tile_map.sprite_lists.get("Rocks", arcade.SpriteList())
        for asteroid in asteroidList:
            if self.frameNum < 40:
                asteroid.center_y += 0.15
            elif self.frameNum > 40:
                asteroid.center_y -= 0.15
        
        #respawn bounce
        for respawn in respawnList:
            if self.frameNum < 40:
                respawn.center_y += 0.20
            elif self.frameNum > 40:
                respawn.center_y -= 0.20


        #fade out sprites and remove them
        for sprite in self.removals:
            print(sprite.alpha)
            if sprite.alpha > 50:
                sprite.alpha -= 50
            else:
                self.removals.remove(sprite)
                sprite.kill()


        #corners flash
        dropwallA = self.tile_map.sprite_lists.get("Drop Activator A", arcade.SpriteList())
        for dropwall in dropwallA:
            if self.frameNum < 40:
                dropwall.texture = arcade.load_texture("./Tiles/corner broken.png")
            elif self.frameNum > 40:
                dropwall.texture = arcade.load_texture("./Tiles/corner broken 2.png")

        dropwallB = self.tile_map.sprite_lists.get("Drop Activator B", arcade.SpriteList())
        for dropwall in dropwallB:
            if self.frameNum < 40:
                dropwall.texture = arcade.load_texture("./Tiles/corner broken.png")
            elif self.frameNum > 40:
                dropwall.texture = arcade.load_texture("./Tiles/corner broken 2.png")

        #render button on any collision
        if arcade.check_for_collision(self.spaceship, self.bombSource) or arcade.check_for_collision(self.spaceship, self.ignition2) or arcade.check_for_collision(self.spaceship, self.ignition1) or arcade.check_for_collision(self.spaceship, self.drill2) or (not self.drill1 in self.removals and arcade.check_for_collision(self.spaceship, self.drill1)) or arcade.check_for_collision_with_list(self.spaceship, cagesList) or (arcade.check_for_collision_with_list(self.spaceship, dropwallA) and self.currentItem == 'drill1') or (arcade.check_for_collision_with_list(self.spaceship, dropwallB) and self.currentItem == 'drill2'): #button prompt render
            self.renderButton = True
        else:
            self.renderButton = False

        
                
        #fade in spaceship on respawn
        if self.spaceship.alpha < 255:
            if self.spaceship.alpha < 238:
                self.spaceship.alpha += 17
            else:
                self.spaceship.alpha = 255

        #meteor spawning algorithm       
        def meteorSpawnH(listNum, ymin, ymax, xmin, xmax, rate):
            if not listNum in self.meteor_list:
                self.meteor_list[listNum] = arcade.SpriteList()
            self.randomGen = random.randint(0, rate)
            if self.randomGen == 1:
                self.meteor = arcade.Sprite("./Tiles/meteor/meteor1.png", 3, center_x= xmin * TILE_SCALING, center_y=random.randint(ymin, ymax) * TILE_SCALING)
                self.meteor.alpha = 0
                self.meteor.angle = 90
                self.scene.add_sprite("Meteors", self.meteor)
                self.meteor_list[listNum].append(self.meteor)
            
            for meteor in self.meteor_list[listNum]:
                if meteor.center_x < xmax * TILE_SCALING:
                    meteor.center_x += 10
                if meteor.alpha <= 250 and meteor.center_x < xmax * TILE_SCALING:
                    meteor.alpha += 5

                if meteor.alpha > 15 and meteor.center_x > (xmax - 100) * TILE_SCALING:
                    meteor.alpha -= 13
                if meteor.alpha < 15 and meteor.center_x > (xmax - 100) * TILE_SCALING:
                    meteor.kill()

            for meteor in self.meteor_list[listNum]:
                if self.frameNum > 77:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor1.png")
                elif self.frameNum > 64:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor2.png")
                elif self.frameNum > 51:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor3.png")
                elif self.frameNum > 38:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor1.png")
                elif self.frameNum > 25:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor2.png")
                elif self.frameNum > 12:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor3.png")

        def meteorSpawn(listNum, ymin, ymax, xmin, xmax, rate):
            if not listNum in self.meteor_list:
                self.meteor_list[listNum] = arcade.SpriteList()
            self.randomGen = random.randint(0, rate)
            if self.randomGen == 1:
                self.meteor = arcade.Sprite("./Tiles/meteor/meteor1.png", 3, center_x=random.randint(xmin, xmax) * TILE_SCALING, center_y=ymax * TILE_SCALING)
                self.meteor.alpha = 0
                self.scene.add_sprite("Meteors", self.meteor)
                self.meteor_list[listNum].append(self.meteor)
            
            for meteor in self.meteor_list[listNum]:
                if meteor.center_y > ymin * TILE_SCALING:
                    meteor.center_y -= 10
                if meteor.alpha <= 250 and meteor.center_y > ymin * TILE_SCALING:
                    meteor.alpha += 5

                if meteor.alpha > 15 and meteor.center_y < (ymin + 100) * TILE_SCALING:
                    meteor.alpha -= 13
                if meteor.alpha < 15 and meteor.center_y < (ymin + 100) * TILE_SCALING:
                    meteor.kill()

            for meteor in self.meteor_list[listNum]:
                if self.frameNum > 77:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor1.png")
                elif self.frameNum > 64:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor2.png")
                elif self.frameNum > 51:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor3.png")
                elif self.frameNum > 38:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor1.png")
                elif self.frameNum > 25:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor2.png")
                elif self.frameNum > 12:
                    meteor.texture = arcade.load_texture("./Tiles/meteor/meteor3.png") 

        #use meteur spawn
        meteorSpawn(1, 2133, 2697, 3656, 3965, 35)
        meteorSpawn(2, 2206, 2724, 2065, 2329, 27)
        meteorSpawn(3, 753, 1843, 2520, 2688, 25)
        meteorSpawnH(4, 435, 887, 1411, 1950, 25)

        if self.currentFuel == 6:
            meteorSpawn(5, 0, 3157, 0, 4066, 10)
        

                

# arcade.draw_text("Pacman Speed: "+str(self.pacmanMovementSpeed)+" (Ctrl +/-)", 110,1042,arcade.color.WHITE,14,font_name="arlrdbd")
    def on_key_press(self, key, modifiers):

        if key == arcade.key.UP:
            
            self.playerpoint.change_y = MOVEMENT_SPEED_BASE
            
        elif key == arcade.key.DOWN:
            
            self.playerpoint.change_y = -MOVEMENT_SPEED_BASE
        elif key == arcade.key.LEFT:
            
            self.playerpoint.change_x = -MOVEMENT_SPEED_BASE
            self.spaceship.angle = 20
            
        elif key == arcade.key.RIGHT:
            
            self.playerpoint.change_x = MOVEMENT_SPEED_BASE
            self.spaceship.angle = -20
        
        elif key == arcade.key.W:
            
            self.playerpoint.change_y = MOVEMENT_SPEED_BASE
            
        elif key == arcade.key.S:
            
            self.playerpoint.change_y = -MOVEMENT_SPEED_BASE

        elif key == arcade.key.A:
            
            self.playerpoint.change_x = -MOVEMENT_SPEED_BASE
            self.spaceship.angle = 20
            
        elif key == arcade.key.D:
            
            self.playerpoint.change_x = MOVEMENT_SPEED_BASE
            self.spaceship.angle = -20

        elif key == arcade.key.E:

            cageCollisions = arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Cages"))
            for cage in cageCollisions:
                touchedAstronaut = arcade.check_for_collision_with_list(cage, self.scene.get_sprite_list("Astronaut"))[0]
                self.showAstronautMessages[touchedAstronaut.name] = True
                self.currentFuel += 1
                self.gauge.texture = arcade.load_texture("./Tiles/fuel"+str(self.currentFuel)+".png")
                self.fadeKill(cage)
            
            #interacting with broken corner using drill
            if self.currentItem == 'drill1' and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Drop Activator A")):
                self.fadeKillList("Drop Walls A")
                self.fadeKillList("Drop Activator A")
                self.inventory.texture = arcade.load_texture("./Tiles/empty item.png")
                self.itemHeld = False
                self.currentItem = 'none'

            if self.currentItem == 'drill2' and arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Drop Activator B")):
                self.fadeKillList("Drop Walls B")
                self.fadeKillList("Drop Activator B")
                self.inventory.texture = arcade.load_texture("./Tiles/empty item.png")
                self.itemHeld = False
                self.currentItem = 'none'

            #picking up drill
            if (not self.drill1 in self.removals) and arcade.check_for_collision(self.spaceship, self.drill1):
                self.itemHeld = True
                self.currentItem =  'drill1' 
                self.fadeKill(self.drill1)        
                self.inventory.texture = arcade.load_texture("./Tiles/held drill.png")

            if (not self.drill2 in self.removals) and arcade.check_for_collision(self.spaceship, self.drill2):
                self.itemHeld = True
                self.currentItem =  'drill2' 
                self.fadeKill(self.drill2)        
                self.inventory.texture = arcade.load_texture("./Tiles/held drill.png")

            #picking up speed
            if arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Vending Speed")):
                self.itemHeld = True
                self.currentItem = "speed"
                self.inventory.texture = arcade.load_texture("./Tiles/held juice.png")
            #picking up ignition
            if arcade.check_for_collision(self.spaceship, self.ignition1):
                self.itemHeld = True
                self.currentItem =  'ignition1'         
                self.inventory.texture = arcade.load_texture("./Tiles/held ignition.png")

            if arcade.check_for_collision(self.spaceship, self.ignition2):
                self.itemHeld = True
                self.currentItem =  'ignition2'         
                self.inventory.texture = arcade.load_texture("./Tiles/held ignition.png") 

            #picking up from bomb source
            if arcade.check_for_collision(self.spaceship, self.bombSource):
                self.itemHeld = True
                self.currentItem = 'bomb'         
                self.inventory.texture = arcade.load_texture("./Tiles/held bomb.png") 

            #detonating bomb
            collidingBombs = arcade.check_for_collision_with_list(self.spaceship, self.scene.get_sprite_list("Bombs"))
            print(collidingBombs)
            if len(collidingBombs) > 0 and (self.currentItem == 'ignition1' or self.currentItem == 'ignition2'):
                print("attempting to explode")
                for bomb in collidingBombs:
                    for rock in self.scene.get_sprite_list("Rocks"):
                        if arcade.get_distance_between_sprites(rock, bomb) < 400 * TILE_SCALING:
                            rockDebris = arcade.Sprite("./Tiles/rockdebris.png", 1, center_x=rock.center_x, center_y=rock.center_y)
                            self.scene.add_sprite("Debris", rockDebris)
                            rock.kill()
                    self.fadeKill(bomb)

                
                
                
        #placing bomb
        elif key == arcade.key.R:
            print("the r key has been pressed")
            print(self.currentItem)
            if self.currentItem == 'bomb':
                placedBomb = arcade.Sprite("./Tiles/bomb.png", SCALE_BOMBS-2, center_x=self.playerpoint.center_x, center_y=self.playerpoint.center_y)
                self.scene.add_sprite('Bombs', placedBomb)
                self.currentItem == 'none'
                self.inventory.texture = arcade.load_texture("./Tiles/empty item.png") 
            



                
    def on_key_release(self, key, modifiers):

        if key == arcade.key.UP or key == arcade.key.DOWN:
            self.spaceship.change_y = 0
            self.playerpoint.change_y = 0
        elif key == arcade.key.LEFT  or key == arcade.key.RIGHT:
            self.spaceship.change_x = 0
            self.playerpoint.change_x = 0
            self.spaceship.angle = 0
        elif key == arcade.key.W or key == arcade.key.S:
            self.spaceship.change_y = 0
            self.playerpoint.change_y = 0
        elif key == arcade.key.A  or key == arcade.key.D:
            self.spaceship.change_x = 0
            self.playerpoint.change_x = 0
            self.spaceship.angle = 0
            

def main():
    window = MyGame()
    window.setup()
    arcade.run()

if __name__ == "__main__":
    main()
