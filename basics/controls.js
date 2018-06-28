var bool = true;


if (bool) {
    // do something
}

if (bool == true) {
    // do something
}

if (bool === true) {
    // do something
}


if (bool) {
    // Do it
} else {
    // do something else
}

if (bool) {
    if (bool) {
        if (bool) {
            // Do it
        } else {
            // do something else
        }
    } else {
        // do something else
    }
} else {
    // do something else
}


if (bool) {
    // Do it
} else if (bool == "true") {
    // check your code quality dmnit!
} else {
    // do something else
}

if (bool && username == "Marten" && payment === true) {
    // Do it
} else {
    // do something else
}

if (bool || username && payment === true && !broke) {
    // Do it
} else {
    // do something else
}


// Switch Cases
var page = "login";

switch (checkIt) {
    case 'login':
        // do password stuff
        if(username.length > 0){

        }

        if(password.length > 0){

        }

        // go for it
        break;

    case 'gallery':
    case 'images':
        // load images
        break;

    default:
        // load homepage    
        break;
}