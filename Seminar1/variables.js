function logVariables()
{
    if(true)
    {
        var x = 1;
        let y = 2; // este scope variable
        const z = 3; // este scope variable

        console.log('X: '+ x);
        // console.log('Y: '+ y);
        // console.log('Z: '+ z);
    }

    console.log('X: '+ x);
    console.log('Y: '+ y);
    console.log('Z: '+ z);
}

console.log('X: '+ x);

logVariables();