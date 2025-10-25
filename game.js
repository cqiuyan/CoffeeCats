// Scene 1: Main Menu
class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    create() {
        // Title
        this.add.text(400, 200, 'My Game', {
            fontSize: '48px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Start button
        const startButton = this.add.rectangle(400, 350, 200, 60, 0x4a9eff)
            .setInteractive({ useHandCursor: true });

        this.add.text(400, 350, 'Start Game', {
            fontSize: '24px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}

// Scene 2: Main Game
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Instructions
        this.add.text(400, 50, 'Main Game Screen', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Example draggable object (circle)
        const circle = this.add.circle(400, 300, 50, 0xff6b6b)
            .setInteractive({ draggable: true });

        // Drag handlers
        this.input.setDraggable(circle);

        circle.on('drag', (pointer, dragX, dragY) => {
            circle.x = dragX;
            circle.y = dragY;
        });

        // Back button
        const backButton = this.add.rectangle(100, 50, 150, 40, 0x666666)
            .setInteractive({ useHandCursor: true });

        this.add.text(100, 50, 'Back to Menu', {
            fontSize: '18px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        backButton.on('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}

// Scene 3: Result Screen
class ResultScreen extends Phaser.Scene {
    constructor() {
        super({ key: 'ResultScreen' });
    }

    create() {
        this.add.text(400, 250, 'Game Over!', {
            fontSize: '48px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        const restartButton = this.add.rectangle(400, 350, 200, 60, 0x4a9eff)
            .setInteractive({ useHandCursor: true });

        this.add.text(400, 350, 'Restart', {
            fontSize: '24px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        restartButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#2d2d2d',
    scene: [MainMenu, GameScene, ResultScreen]
};

// Initialize the game
const game = new Phaser.Game(config);
