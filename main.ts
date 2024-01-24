enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        ...................................................................................cccc...........................................................................
        ..................................................................................c....c..........................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc......ccccccccccccccccc....ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        .........................................................................................................cccc.....................................................
        ..................................................................................................................................................................
        ..cccc..c.......................c..cccc.........................cccc..c.............c..........................cccc..c...........c..ccc.................c..ccc....
        ..................................................................................................................................................................
        ...............cccc..c.........................cccc.c.......c..............cc.c........cccc..c.....cccc..c..................c...............cccc..c...............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................cccc..................cccc...................................................................................
        ....................................................c....c................c....c..................................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccc......cccccccccccccccc......cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ....ccc..c.................ccc..c...........c..cccc..........................c.............c..cccc.........................cccc..c.......................c..cccc..
        ..................................................................................................................................................................
        ...............c..cccc...............c..................c..cccc.....c..cccc........c.cc..............c.......c.cccc.........................c..cccc...............
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        ..................................................................................................................................................................
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (trex.y == 94 && end == 0) {
        trex.vy = -160
        animation.setAction(trex, ActionKind.Jumping)
    }
})
function initTRex () {
    trex = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `, SpriteKind.Player)
    idle = animation.createAnimation(ActionKind.Idle, 600)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `)
    idle.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `)
    animation.attachAnimation(trex, idle)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff11f...............
        ...........ff111fff.............
        ...........f....................
        ...........ff...................
        `)
    run.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........ff11ff...............
        ...........fff11f...............
        ................f...............
        ................ff..............
        `)
    animation.attachAnimation(trex, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff.fffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffff...........
        ...............fffffffffff......
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `)
    animation.attachAnimation(trex, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................ffffffffffff....
        ...............ff...fffffffff...
        ...............ff.f.fffffffff...
        ...............ff...fffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............ffffffffffffff...
        ...............fffffffffff......
        ...............fffff............
        ......f.......ffffff............
        ......f......fffffff............
        ......ff....ffffffffff..........
        ......fff..fffffffff.f..........
        ......ffffffffffffff............
        ......ffffffffffffff............
        ......ffffffffffffff............
        .......fffffffffffff............
        ........ffffffffffff............
        .........ffffffffff.............
        ..........ffffffff..............
        ...........fff1ff...............
        ...........ff111f...............
        ...........f....f...............
        ...........ff...ff..............
        `)
    animation.attachAnimation(trex, dead)
    trex.z = 3
    trex.setPosition(15, 94)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(trex, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let idle: animation.Animation = null
let trex: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
game.setDialogCursor(img`
    ................................
    ..1111111111111111111111111111..
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    111111111111111ffffffffffff11111
    11111111111111ff1fffffffffff1111
    11111111111111ffffffffffffff1111
    11111111111111ffffffffffffff1111
    11111111111111ffffffffffffff1111
    11111111111111ffffffffffffff1111
    11111111111111ffffffffffffff1111
    11111111111111ffffff111111111111
    11111111111111fffffffffff1111111
    11111f1111111ffffff1111111111111
    11111f111111fffffff1111111111111
    11111ff1111ffffffffff11111111111
    11111fff11fffffffff1f11111111111
    11111ffffffffffffff1111111111111
    11111ffffffffffffff1111111111111
    11111ffffffffffffff1111111111111
    111111fffffffffffff1111111111111
    1111111ffffffffffff1111111111111
    11111111ffffffffff11111111111111
    111111111ffffffff111111111111111
    1111111111fff1ff1111111111111111
    1111111111ff111f1111111111111111
    1111111111f1111f1111111111111111
    1111111111ff111ff111111111111111
    11111111111111111111111111111111
    .111111111111111111111111111111.
    ..1111111111111111111111111111..
    `)
game.splash("T-Rex Run")
scene.setBackgroundColor(1)
initGround()
initTRex()
info.setScore(0)
end = 0
game.showLongText("Press any button to jump.", DialogLayout.Top)
game.onUpdate(function () {
    if (trex.y < 94) {
        trex.ay = 400
    } else {
        trex.ay = 0
        trex.y = 94
        if (end == 0) {
            animation.setAction(trex, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............ccc...............
            .............ccccc..............
            .............ccccc..............
            .............ccccc...c..........
            .........c...ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........cccccccccc..ccc.........
            ........cccccccccc..ccc.........
            .........cccccccccccccc.........
            .............cccccccccc.........
            .............ccccccccc..........
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............ccc...............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .........c...ccccc...c..........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..ccccc..ccc.........
            ........ccc..cccccccccc.........
            ........ccc..cccccccccc.........
            ........cccccccccccccc..........
            ........cccccccccc..............
            .........ccccccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            .............ccccc..............
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ...........c....................
            ..........ccc...................
            ..........ccc......c............
            ........c.ccc.....ccc...........
            ........c.ccc.....ccc.c.........
            ........ccccc.c...ccc.c.........
            ..........ccc.c.c.ccccc.........
            ..........ccccc.c.ccc...........
            ..........ccc...ccccc...........
            ..........ccc.....ccc...........
            ..........ccc.....ccc...........
            ..........ccc.....ccc...........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................bbbb.bb.........
            ...............bb.....b.........
            .............bbb......bbb.......
            .............b..........bbbb....
            .............b.............b....
            ..........bbbb.............bbb..
            .........bb..................b..
            .....bbbbb...................bb.
            .....b........................b.
            .bb.bb..b......................b
            bb.......bbbbbbbbbbbbbbbbbbbbbbb
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
