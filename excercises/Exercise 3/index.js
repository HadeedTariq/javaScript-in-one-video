let arr=[
    `Why did the actor fall through the floorboards?
They were going through a stage`,`Why did a scarecrow win a Nobel prize?
He was outstanding in his field`,`Why are peppers the best at archery?
Because they habanero`,`What did the duck say after she bought chapstick?
Put it on my bill`,`What do you call a fake noodle?
An impasta`,`What did the three-legged dog say when he walked into a saloon?
“I’m looking for the man who shot my paw”`,`How do you tell the difference between a bull and a cow?
It is either one or the udder`,`What’s red and smells like blue paint?
Red paint`,`What’s the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter`,`Why can’t you send a duck to space?
Because the bill would be astronomic,al`,`What does Jeff Bezos do before he goes to sleep?
He puts his PJ-Amazon`,`What happened when the world's tongue-twister champion got arrested?,
They gave him a tough sentence`,`What did the mama cow say to the calf?
It’s pasture bedtime`,`How does a vampire start a letter?
Tomb it may concern`,`What did one plate say to the other?
Dinner is on me`,`Why do hummingbirds hum?
Because they don’t know t,he words`,`What do sprinters eat before a race?
Nothing. They fast`,`Two muffins are baking in an oven. One of them looks to the other and says, "Phew, it's getting hot in here" The other looks back ,and says, "Ack A talking muffin"`,
`Why was the baby strawberry crying?
Because her mom and dad were in a jam.`,

`What did the little corn say to the mama corn?
Where is pop corn?`,

`How do you make a lemon drop?
Just let it fall.`,

`What did the limestone say to the geologist?
Don’t take me for granite.`,

`Why does a seagull fly over the sea?
Because if it flew over the bay, it would be a baygull.`,

`What kind of water can’t freeze?
Hot water.`,

`What kind of tree fits in your hand?
A palm tree.`,

`What do you call a dinosaur that is sleeping?
A dino-snore.`,

`What is fast, loud and crunchy?
A rocket chip.`,

`Why did the teddy bear say no to dessert?
Because she was stuffed.`,

`What has ears but cannot hear?
A cornfield.`,

`What did the left eye say to the right eye?
Between us, something smells.`,

`What did one plate say to the other plate?
Dinner is on me.`,

`Why did the student eat his homework?
Because the teacher told him it was a piece of cake.`,

`When you look for something, why is it always in the last place you look?
Because when you find it, you stop looking.`,

`What is brown, hairy and wears sunglasses?
A coconut on vacation.`
];
console.log(arr.length)
let i=prompt('Enter a number b/w 1 to 32');
i=Number.parseInt(i);
for(let g=i;g<arr.length-1;g++){
    let c=document.getElementById('box');
    c.innerHTML=arr[i];
}