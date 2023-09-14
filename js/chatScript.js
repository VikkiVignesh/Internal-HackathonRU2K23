/**
 * The chatScript.js contains all the words that the assistant should respond according to
 * the activated command.
 *
 * @type {string[]}
 */

// Introduction message
var introduction = [
    "Hey there, how may I be ofc your assistance today?",
    "Hello, enter a voice command from the provided list.",
    "Hi, how may I help you?"
];
const glink = "../Vd/tour.mp4";
var g = [
    "The Ganges  is a trans-boundary river of Asia which flows through India and Bangladesh. The 2,525 km river rises in the western Himalayas in the Indian state of Uttarakhand. It flows south and east through the Gangetic plain of North India, receiving the right-bank tributary, the Yamuna, which also rises in the western Indian Himalayas, and several left-bank tributaries from Nepal that account for the bulk of its flow. In West Bengal state, India, a feeder canal taking off from its right bank diverts 50% of its flow southwards, artificially connecting it to the Hooghly River."
    ," The Ganges continues into Bangladesh, its name changing to the Padma. It is then joined by the Jamuna, the lower stream of the Brahmaputra, and eventually the Meghna, forming the major estuary of the Ganges Delta, and emptying into the Bay of Bengal."
     ,"The Ganges–Brahmaputra–Meghna system is the second-largest river on earth by discharge."
    
];

// explaining how the pollution has happened in ganga river
const gplink = "../Vd/pollution.mp4";
var gp = [
    "Multiple factors contribute to the pollution of the Ganga River. Industrial waste, untreated sewage discharge, and improper waste disposal have created a toxic cocktail flowing through its waters. The rapid growth of industries and urban settlements along its banks exacerbates the problem, as industrial effluents and domestic sewage find their way into the river without proper treatment.",
    "The consequences of the polluted Ganga River are far-reaching. The river's biodiversity is rapidly declining, with many species on the verge of extinction due to the toxic water. Additionally, the contaminated water poses a severe risk to the communities relying on it for drinking, bathing, and irrigation. Diseases like cholera and dysentery are rampant in these areas, affecting the health and well-being of millions."

    
];
// explaining how to save ganga river
const sglink = "../Vd/save.mp4";
var sg = [
   "Saving the Ganga River, also known as the Ganges, is crucial for both environmental and cultural reasons. The river is not only sacred to millions of people but also plays a vital role in providing water, supporting biodiversity, and sustaining communities. Here are some steps that can be taken to help save the Ganga River:",
];

//Brouchures
const Brouclink = ["https://nmcg.nic.in/Newsletter/Brochure/Brochureindex.html#p=3","https://nmcg.nic.in/writereaddata/fileupload/26_Clean%20Ganga%20Fund%20Brochure.pdf","https://nmcg.nic.in/pdf/NGP-At%20a%20Glance%20(Final%20Version%20Printed).pdf"];
var Brouc = [
    "Taking you to the Brouchures ,related to Namami gange Project ,wait for a second ,here you go"
];



// Useful websites
const Usefulweblink=[""]
var  Usefulweb= [
    "Here, i found the top five websites related to Gangae Project:",
    "The following sites can be used for  refernces:",

];

// Stop recognition
var stop = [
    "Alright, i am disabling the microphone..",
    "The listening process has been stopped!"
];

// End conversation
var goodbye = [
    "Goodbye. I look forward to help you again.",
    "It was a pleasure talking to you. Have a great day!",
    "Bye and have a great day!"
];

// Error messages
var errors = [
    "Sorry, I didn't understand. Can you try re-phrasing please?",
    "I didn't quite catch that! Can you please repeat?"
];
