var dictionary = [
                    {
                    word:"apple",
                    def:"the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh",
                    rel:["mango", "pear", "guava"]
                    },
                    {
                        word:"baby",
                        def:"a very young child",
                        rel:["child", "toddler", "teen"]
                    },
                    {
                        word:"computer",
                        def:"an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program",
                        rel:["laptop", "tablet", "palmtop"]
                    },
                    {
                        word:"mosquito",
                        def:"a slender long-legged fly with aquatic larvae. The bite of the bloodsucking female can transmit a number of serious diseases including malaria and elephantiasis",
                        rel:["ant", "beetle", "butterfly"]
                    },
];

// fill the dictionary 
init = function(){
    for (var i = 0; i < dictionary.length; i++){
        
        document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" +
        dictionary[i].word + "</li>";
    }

}

// call the init function when page loads
init();

// display a word, its definition and related words
show = function(i){
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('definition').innerHTML = dictionary[i].def;
    
    var list = "";

    for (var j = 0; j < dictionary[i].rel.length; j++){
        list += "<li>" + dictionary[i].rel[j] + "</li>";
        document.getElementById('related').innerHTML = list; 
    }
}

// show first word in the dictionary when page loads
show(0);

// search functionality
search = function(){
    query = document.getElementById('search').value;

    if (query == "") {
        document.getElementById('word_text').innerHTML = "Word not found";
        document.getElementById('definition').innerHTML = "The word you entered is not in our dictionary";
        document.getElementById('related').innerHTML = "No related words";
    }

    found = -1; // initialize found to false

    for( var i = 0; i < dictionary.length; i++){
        if(query == dictionary[i].word) {
            found = i;
            break;
        }else {
            document.getElementById('word_text').innerHTML = "Word not found";
            document.getElementById('definition').innerHTML = "The word you entered is not in our dictionary";
            document.getElementById('related').innerHTML = "No related words";
        }
    }
    
    if(found >= 0){
        show(found);
    }
}