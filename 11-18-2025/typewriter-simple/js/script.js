let string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada lobortis magna, in interdum arcu euismod a. Integer eget enim a odio tempor mattis quis a libero. Donec tempor in velit eget hendrerit. Morbi consequat rhoncus gravida. Nulla facilisi. Nam dignissim mauris id mi dictum, et posuere sapien aliquam. Donec vel ultrices leo. Pellentesque luctus sapien ac lacus sagittis, at sagittis felis tempor. Phasellus sagittis purus nec est tincidunt imperdiet. Quisque rutrum orci nisi, sollicitudin molestie mi aliquet in. Aenean turpis ante, semper at ornare ut, venenatis a quam. Nam et dapibus metus. Donec euismod cursus sem, in rhoncus augue luctus non. Aenean fermentum eget lectus eu finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

let string1TotalCharacterNumber = string1.length;

let string1IterationIndex = 0;

let string1Interval = setInterval(function(){
    $("#typewriting-target").append(string1.charAt(string1IterationIndex));
    string1IterationIndex = string1IterationIndex + 1;
    console.log("1 iteration completed");
    if (string1IterationIndex == string1TotalCharacterNumber){
        clearInterval(string1Interval);
    }
}, 10);

let string2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada lobortis magna, in interdum arcu euismod a. Integer eget enim a odio tempor mattis quis a libero. Donec tempor in velit eget hendrerit. Morbi consequat rhoncus <a href="https://www.merriam-webster.com/dictionary/gravida"> gravida</a>. Nulla facilisi. Nam dignissim mauris id mi dictum, et posuere sapien aliquam. Donec vel ultrices leo. Pellentesque luctus sapien ac lacus <a href="https://www.latin-is-simple.com/en/vocabulary/verb/6224/#google_vignette">sagittis</a>, at sagittis felis tempor. Phasellus sagittis purus nec est tincidunt imperdiet. Quisque rutrum orci nisi, sollicitudin molestie mi aliquet in. Aenean turpis ante, semper at ornare ut, venenatis a quam. Nam et dapibus metus. Donec euismod cursus sem, in rhoncus augue luctus non. Aenean fermentum eget lectus eu finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';

let string2TotalCharacterNumber = string2.length;

let string2IterationIndex = 0;

let string2Interval = setInterval(function(){
    $("#typewriting-target-2").append(string2.charAt(string2IterationIndex));
    string2IterationIndex = string2IterationIndex + 1;
    console.log("1 iteration completed");
    if (string2IterationIndex == string2TotalCharacterNumber){
        clearInterval(string2Interval);
    }
}, 10);

$("body").append(string2);