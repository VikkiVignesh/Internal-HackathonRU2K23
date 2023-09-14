/**
 * The chatScript.js contains all the words that the assistant should respond according to
 * the activated command.
 *
 * @type {string[]}
 */

// Introduction message
var introduction = [
    "Hey there, how may I be of your assistance today?",
    "Hello, enter a voice command from the provided list.",
    "Hi, how may I help you?"
];
//const gplink = "../Img/video1.mp4";
var g = [
    "The Ganges  is a trans-boundary river of Asia which flows through India and Bangladesh. The 2,525 km river rises in the western Himalayas in the Indian state of Uttarakhand. It flows south and east through the Gangetic plain of North India, receiving the right-bank tributary, the Yamuna, which also rises in the western Indian Himalayas, and several left-bank tributaries from Nepal that account for the bulk of its flow. In West Bengal state, India, a feeder canal taking off from its right bank diverts 50% of its flow southwards, artificially connecting it to the Hooghly River. The Ganges continues into Bangladesh, its name changing to the Padma. It is then joined by the Jamuna, the lower stream of the Brahmaputra, and eventually the Meghna, forming the major estuary of the Ganges Delta, and emptying into the Bay of Bengal. The Ganges–Brahmaputra–Meghna system is the second-largest river on earth by discharge.",
    
];

// explaining how the pollution has happened in ganga river
const gplink = "../Img/video1.mp4";
var gp = [
    "Pollution of the Ganges, the largest river in the Indian subcontinent, poses significant threats to human health and the larger environment.[1] The river, which is severely polluted with human waste and industrial contaminants, provides water to about 40% of India's population across 11 states,[2] serving an estimated population of 500 million people, which is more than any other river in the world.Today, the Ganges is considered to be the fifth-most polluted river in the world.[5] An Indian photographer has noted that no one in India spoke of the Ganges as being polluted until the late 1970s.[6] However, pollution had been an old and continuous process in the river by the time people were finally acknowledging it. Stretches of over 600 km (370 mi) were essentially ecologically dead zones.[7]",
    
];
// explaining how to save ganga river
const sglink = "https://lln1p-banf02.mdx.ac.uk:7106/ssomanager/c/SSB?pkg=mdx_mymodules_pkg.mdx_student_check_prog_p";
var sg = [
   "Saving the Ganga River, also known as the Ganges, is crucial for both environmental and cultural reasons. The river is not only sacred to millions of people but also plays a vital role in providing water, supporting biodiversity, and sustaining communities. Here are some steps that can be taken to help save the Ganga River:",
];

// Exams timetable
const timetableLink = "https://mdxsys.mdx.ac.uk/MdxApps/ExamTime/SearchExamTime.asp";
var timetable = [
    "See your timetable in this website. Refer to your module leader if you need more information."
];

// Extenuating circumstances
const extensionLink = "https://unihub.mdx.ac.uk/your-study/assessment-and-regulations/extenuating-circumstances";
var extension = [
    "I am redirecting you to a link for further information and guidelines about extenuating circumstances.",
    "Sending you to the extenuating website for more information.",
    "I found a link that has further information and guidelines. Transferring you now..."
];

// Useful websites for programming
var learnCode = [
    "Here, i found the top five websites to learn coding:",
    "The following sites are the best recommendation to learn programming for free:",
    "Refer to the list to learn programming online for free."
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
