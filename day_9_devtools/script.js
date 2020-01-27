const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Regular Hello!");

    // Interpolated
    let interpolated = "interpolated";
    console.log("This is an %s Hello", interpolated);

    // Styled
    console.log('%c This is a colorful hello!', 'color: red');

    // warning!
    console.warn("DANGEROUS");

    // Error :|
    console.error("Very Errory");

    // Info
    console.info("Very professional info.");

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch', "That is wrong!"));

    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
        console.groupEnd(`${dog.name}`);
    })

    // counting

    console.count('test');
    console.count('test');
    console.count('test');
    console.count('test');
    console.count('test 2');
    console.count('test');
    console.count('test 2');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/bukazoltan')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    console.table(dogs);