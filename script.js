
const destinyObj = {
    "1" : "An individual that has a Destiny number one attracts maverick energy. Pioneers seek them out to get help breaking barriers and charting new directions. They can get along with people who have strong personalities and individualistic drives.Determined people seek them out because they are not afraid of what is new or the need to change. People can come and go in their lives, which is okay since destiny wants them to help others along their unique life path and keep on moving on.",

    "2" : "An individual that has a Destiny number two attracts people into partnership and can help others with their relationships. Therefore, they make excellent counselors and negotiators. Their personality reacts to others and facilitates healthy interactions.They show others how to relate and communicate. So, they encourage people to share and be vulnerable.  Destiny wants these individuals to help others learn how to connect.",

    "3" : "An individual that has a Destiny number three attracts creative and romantic individuals. Therefore, they are often the muse for a writer, musician, painter, photographer, or any other type of artist.Their energy inspires others to embrace new ideas, change, risk, and opportunity because they want the other person to be creative. Destiny wants them to encourage creativity in others and support the arts as the spark that makes the artist shine.",

    "4" : "An individual that has a Destiny number four attracts the people who form the foundations of society. Therefore, think of them as managers who know how to gather the right people to complete tasks. Their personality helps organize others.These are the people you want managing your business or getting large tasks done that require the coordination of many others. Destiny wants these people to “build a better tomorrow”.",

    "5" : "An individual that has a Destiny number five attracts adventurous people and supports change agents. Therefore, they often find themselves in roles that support lives of adventure and activity. They enjoy exploration and will draw other explorers to themselves. As a result, they help others master knowledge and enjoy wide-ranging experiences. Destiny wants them to be on the go and help others visit and learn about the wider world.",
    
    "6" : "An individual that has a Destiny number six attracts nurturing and caring people. Therefore, they learn how to help others find ways to support their community and share what they know that will help others. They understand the value of service and want others to know how to serve.Their innate understanding of compassion, empathy, and attentiveness provides guidance to others who want to follow this life path.  Destiny wants them to show people the power of serving and the grace of duty.",

    "7" : "An individual that has a Destiny number seven attracts spiritual and esoteric people. Therefore, they know how to encourage truth-seekers, dreamers, and philosophers. They can see the potential in those others who want to learn about the world by studying large patterns and to find purpose in life.As spiritual people, they embrace honesty, philosophy, and the mysteries of life. As highly attuned spiritual people, they show others how to find the spiritual path.  Destiny wants them to guide others to their destinies.",

    "8" : "An individual that has a Destiny number eight attracts driven and high achieving people. Therefore, they encourage those people who want to succeed in the public eye, set and achieve high goals, and lead others.They intuitively know how to bring out the power of another and put that power into the world. As goal-oriented people, they show others the merits of hard work, long-range planning, and leadership.  Destiny wants them to lead the leaders!",

    "9" : "An individual that has a Destiny number nine attracts generous and wise people. Therefore, they know how to encourage the people who want to engage the wider world and take on the largest human problems.They recognize and draw in the people most concerned about the evolution and health of humanity. So, they can show people how to embrace charity and altruism. Destiny wants them to show others the ways of patience and forgiveness.",
    
    "11": "An individual that has a Destiny number 11 attracts a lot of attention as someone special. Therefore, people want to see these people excel and know that they have some important talent that needs support and encouragement.Their single-minded focus, devotion to their calling, and intense individualism excite others. Destiny wants these individuals to stand out as individuals who will pioneer for others.",

    "22": "An individual that has a Destiny number 22 attracts students and people who want to learn what they can teach. Therefore, others seek them out because of their scholarship and expert knowledge.They need to share wisdom with others and guide people to improve their problem-solving skills.  Destiny wants them to impart complex knowledge and visionary ideas to the wider world through those who study under them.",

    "33": "An individual that has a Destiny number 33 attracts followers to a cause or shared purpose. Therefore, they know spiritual matters, the essence of being, and the devotion to love, which helps them guide others to the spiritual understanding they need.Since they can move through altered states, understand ancient wisdom, and weave others into the interconnectivity of life, they make ideal gurus and spiritual leaders.  Destiny wants them to reveal Destiny’s plans for others",

    "44": "An individual that has Destiny number 44 attracts the best and brightest to reshape the world. Therefore, they see life on a large scale, in a grand manner, and powerfully, which leads others to learn leadership skills from them.These individuals embrace earthly success as a way to understand spiritual dynamics while visiting this plane of existence.  Destiny wants them to show others how to live life to the fullest.",

    "55": "An individual that has a Destiny number 55 attracts people ahead of the times. Therefore, they find the people who look to the future, explore the unknown, and look outward for possibilities. They interact with others according to their own inner compass, which allows them to be comfortable with the “tomorrow people."
}

const alphaObj = {
    "A":1,
    "B":2,
    "C":3,
    "D":4,
    "E":5,
    "F":6,
    "G":7,
    "H":8,
    "I":9,
    "J":1,
    "K":2,
    "L":3,
    "M":4,
    "N":5,
    "O":6,
    "P":7,
    "Q":8,
    "R":9,
    "S":1,
    "T":2,
    "U":3,
    "V":4,
    "W":5,
    "X":6,
    "Y":7,
    "Z":8
}



const submitBtnElm = document.getElementById("submitBtn");
const nameInputElm = document.getElementById("nameInput");
const meaningTextElm = document.getElementById("meaning");
const calculateName = () => {
    let name = nameInputElm.value.replaceAll(" ","");
    console.log("Name after remove white space : ", name);
    let nameArray = name.toUpperCase().split("");
    let number = 0;
    console.log("name array is : ", nameArray);
    nameArray.forEach((element,index) => {
        number += alphaObj[element];
    });
    console.log("raw number is : ", number);
    
    
    while (!(number.toString() in destinyObj)){
        let numberArr = number.toString().split("");
        const initialValue = 0;
        number = numberArr.reduce((accum,current) => Number(accum) + Number(current) ,initialValue);
    }
    console.log(number);

    let str = destinyObj[number];
    console.log(str);
    meaningTextElm.textContent = str;

}

const clearAllText = () => {
    // console.log("clear text input fired")
    nameInputElm.value = "";
    meaningTextElm.textContent = "";

}