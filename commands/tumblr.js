module.exports = {
    name: 'tumblr',
    description: "quotes tumblr posts",
    execute(message, args){
        const posts = [
        `can we all stop pretending that life is fun or even tolerable i want to start being insane in public`,
        `you call it really bad at darts \ni call it freestyle acupuncture`,
        'what if mayonnaise came in cans',
        'the opposite of formaldehyde is casualdejekyll',
        'what do teens like?!? is it memes? memes about skeletons? piss? communism?',
        '☭w☭ what\'s this \n*glomps the means of production*', 
        '*sloshes boogishly towards you at immense speeds*',
        `\"you\'ve got ghosts in your blood, you should do cocaine about it\" \
        \n well fuck me, i've got goblins in my nerves, i'm gonna do sleep deprivation about it`,
        'yike is short for yichael',
        'methamketamine',
        `i have memorized π to exactly 0 digits \n2`,
        'stick it to caesar by stabbing the month of july',
        'i diagnose you with horse',
        'ah, my fart cone',
        'funks go e y y man kill zucchini angst',
        'everytime i move i crunch like popcorn \nand everytime we kiss i swear i could fly',
        'i got a rare condiiton \ni got a glass dick and paper balls \
        \neverytime i jump my dick just shatters and my nuts turn into origami paper cranes and fly away \
        \nand everytime we kiss i swear i could fly',
        'everytime i touch my dick i start to bleed \nand everytime we kiss i swear i could fly',
        'everytime i jump my dick hits me in the face and i die \nand everytime we kiss i swear i could fly',
        'take me to snurch (snail church)',
        'quiet, they are praying to frecca (frog mecca)',
        `**egg recipe** \ndifficulty: egg \ntime: egg \ningredients: \n- egg \n- eight whole egg \
        \n**-----------------------** \nstep one: put eight egg on plate \nstep two: look at all those egg \
        \nstep three: congratioleggtion`,
        'adult cereals: \n - 50 shades of grain \n - porn flakes \n - special d \n - rice frisky \n - raisin bran',
        `hate languages: \n - illegally downloading \n - evil eye \n - fake friendlness \n - acts of disservice \
        \n - throwing a drink \n - french`,
        `i think i will become a creature \n *scuttles*`,
        `*voice from screen*  "hey vsauce" \n*voice from behind you*  "michael here" \
        \n*voice from inside your head*  "what if you were defenseless?"`,
        `mr sandman \nman me a sand \nmake him the cutest \nman car door hook hand`,
        `mr email \ne me a mail \nmake the attachment \na pic of a snail`,
        'i would pepper spray some of you <3',
        `\'dirty\' is a concept invented by british imperialists to keep you from enjoying god's nectar: swamp water`,
        'ah, the ol\' scream\'n\'sleep',
        `politics are a nightmare \ni\'m going to the scottish highlands to eat dirt and lavender`, 
        `boxes inhale boxygen and exhale cardboard dioxide`,
        `IT\'S THE \n***FINAL BRAIN CELL*** \n*kazoo solo*`,
        `i just have one braincell and it bounces around my skull like a windows screensaver \
        \nwhen it bounces perfectly in a corner i experience a thought`,
        `brits over the age of 18 are not adults; they are children with scissor permits`,
        `**the eight stages of grief:** \ndenial \nanger \nbargaining \nacceptance \nfrench \ndenial 2 \nastral projection`,
        `**how canadians make tea** \nthe same as you idiot \n....until we get it nice and warm, then we grab the maple syrup`,
        `just lie down on the sidewalk with your tongue against the concrete until the whole world dissolves like an uncoated pill`,
        `*to the tune of YMCA* \ncomrade, steel production is down \ni said comrade, you must sleep on the ground`,
        `2020 is a scam invented by historians to sell more history`,
        `gender is a scam invented by bathroom companies to sell more bathrooms`,
        `they got that they/them þussy`,
        'i see you survived the toilet',
        'i am going to make fun of thunder for being off-key',
        'remind me to come to your house and shred your shoes',
        `what do you call a flirty greek philosopher? \na socratease`,
        `it\'s quick, it\'s easy, and it\'s free: pouring river water in your socks`,
        `**the year is 9** \nsome motherfucker be touching cow tits, and oh boy, he\'s about to invent cereal`,
        `welcome to my yeet and greet`,
        `bone massage \ni want soft bones`,
        `image if every single person in the world simultaneously said \'mayonnaise\'`,
        `old people? more like fold people! *makes an origami swan out of grandma*`,
        `you can't spell american dream without \'eric andre\' in the middle`,
        `remeber: you can't spell valentine's day without \'anal destiny\'`,
        `went bobsleighing the other day \nkilled 59 bobs`,
        'you know what? fuck you! *unhelps your hamburger*',
        `you're no hamburger helper \nyou're just a hamburger hindrance`,
        `if you're not part of the hamburger solution, you're part of the hamburger problem`,
        `you're a hamburden on society`,
        `my psychologist said i have an apartment complex`,
        `list of words containing "meow": \nmeow, meows, meowed, meowing, homeowner`,
        `*putting honey in my tea* \nhell yeah, get in that leaf juice you sexy bee sauce`,
        `you are under arrest for contempt of gender`,
        'new hotline, who bling?',
        `the greek god of hentai.... tentacles....`,
        `cha cha real scared`,
        `horses are michievous and only appear nice \
        \ndo not trust the sinful wagon giraffes`,
        `my joints are a retractable ballpoint pen and god is going clickclickclickclick`,
        `accused of dislikos peepee \n"i hate the taste"`,
        `i scream you scream we all \nrepress memories of our childhood`,
        `she dicked cockily down stairs`,
        `if she's your girl why is she breasting boobily down my stairs`];
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        message.channel.send(randomPost);
        //message.channel.send(posts[posts.length - 1]);
    }
}
