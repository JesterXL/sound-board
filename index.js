const log = console.log;
const app = new PIXI.Application();
document.body.appendChild(app.view);

const buttonsHolder = new PIXI.Container();
buttonsHolder.scale.set(0.5);
app.stage.addChild(buttonsHolder);

// buttonsHolder
const makeImageButton = (image, audioMP3, audioOGG, x=0, y=0, scale=1) =>
{
    const button = PIXI.Sprite.fromImage(image);
    const sound = new Howl({
      src: [audioMP3, audioOGG]
    });
    button.sound = sound;
    button.interactive = true;
    button.on('pointerdown', event => sound.play());
    // app.stage.addChild(button);
    buttonsHolder.addChild(button);
    button.x = x;
    button.y = y;
    button.scale.set(scale);
    return button;
};

makeImageButton(
    'images/cha-cha-chang-chang.jpg',
    'sounds/mp3/cha-cha-chang-chang.mp3',
    'sounds/ogg/cha-cha-chang-chang.ogg'
)

makeImageButton(
    'images/disappointed.jpg',
    'sounds/mp3/disappointed.mp3',
    'sounds/ogg/disappointed.ogg',
    320
)

makeImageButton(
    'images/do-a-barrel-roll.jpg',
    'sounds/mp3/do-a-barrel-roll.mp3',
    'sounds/ogg/do-a-barrel-roll.ogg',
    -100,
    370
)

makeImageButton(
    'images/do-a-barrel-roll.jpg',
    'sounds/mp3/do-a-barrel-roll.mp3',
    'sounds/ogg/do-a-barrel-roll.ogg',
    -100,
    370
)

makeImageButton(
    'images/git-er-done.jpg',
    'sounds/mp3/git-er-done.mp3',
    'sounds/ogg/git-er-done.ogg',
    330,
    370
)

makeImageButton(
    'images/groovy.jpg',
    'sounds/mp3/groovy.mp3',
    'sounds/ogg/groovy.ogg',
    580,
    370,
    0.5
)

makeImageButton(
    'images/king-of-thieves.jpg',
    'sounds/mp3/king-of-thieves.mp3',
    'sounds/ogg/king-of-thieves.ogg',
    580,
    600,
    0.5
)

makeImageButton(
    'images/what.jpg',
    'sounds/mp3/what.mp3',
    'sounds/ogg/what.ogg',
    800
)

makeImageButton(
    'images/yeah.jpg',
    'sounds/mp3/yeah.mp3',
    'sounds/ogg/yeah.ogg',
    1100
)