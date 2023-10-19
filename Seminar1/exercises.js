// exercitiul 1
function imbinareStringuri(arrStrings)
{
    const fraza = arrStrings.join(' ');

    return fraza;
}

const arr = ["Ana", "are", "mere"];

console.log(imbinareStringuri(arr));

// exercitiul 2
function caractereDiferite(str1, str2)
{
    if(str1.length != str2.length)
    {
        return -1;
    }

    let count = 0;

    for (let i = 0; i < str1.length; i++) 
    {
        if (str1[i] !== str2[i]) 
        {
            count++;
        }
    }

    return count;
}

console.log(caractereDiferite("Andrei", "Razvan"));

// exercitiul 3
function numaraLitera(str, litera)
{
    let count = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(litera === str[i])
        {
            count++;
        }
    }

    return count;
}

console.log(numaraLitera("Andreea", 'e'));

// exercitiul 4
function intercalareElemente(arr1, arr2)
{
    if(arr1.length !== arr2.length)
    {
        return [];
    }
    
    let arrFinal = [];

    for(let i = 0; i < arr1.length; i++)
    {
        arrFinal.push(arr1[i]);
        arrFinal.push(arr2[i]);
    }

    return arrFinal
}

console.log(intercalareElemente([1,3,5,7], [2,4,6,8]));

// exercitiul 5
function medieAritmetica(arr)
{
    let sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(medieAritmetica([1,2,3]));