/**
 * The webSpeech.js checks whether specific word or words are detected in the text.
 * @param text
 */
function checkSpeech(text) {
    text = validateText(text);
    p = document.createElement('p');

    if (text.includes('hello') || text.includes('hi') || text.includes('hey')
        || text.includes('Good morning'))  {
        const selectRandom = Math.floor(Math.random() * introduction.length);
        p.innerText = introduction[selectRandom];
        play(introduction[selectRandom]);
        document.getElementById('message').appendChild(p);
    }  else if (text.includes('ganga ganga') || text.includes('about ganga') || text.includes('about ganga')
        || text.includes('cleanness about ganga') || text.includes('say me about ganga river') || text.includes('ganga river')) {
        const selectRandom = Math.floor(Math.random() * g.length);
        p.innerText = g[selectRandom];
        play(g[selectRandom]);
        document.getElementById('message').appendChild(p);
    //    window.setTimeout(function () {
    //         window.open(gplink);
    //     }, 3000);
    }  else if (text.includes('polluted ganga') || text.includes('why is ganga polluted') || text.includes('')
        || text.includes('is river ganga river polluted') || text.includes('tell me about  pollution in ganga')) {
        const selectRandom = Math.floor(Math.random() * gp.length);
        p.innerText = gp[selectRandom];
        play(gp[selectRandom]);
      //  document.getElementById('message').appendChild(p);
        window.setTimeout(function () {
            window.open(gplink);
        }, 3000);
      
    } else if (text.includes('Save a Ganga') || text.includes('action for ganga') || text.includes('how to save ganga river')
        || text.includes('clean Ganga')) {
            const selectRandom = Math.floor(Math.random() * sg.length);
            p.innerText = sg[selectRandom];
            play(sg[selectRandom]);
            document.getElementById('message').appendChild(p);
            window.setTimeout(function () {
                window.open(sglink);
            }, 3000);

    } else if (text.includes('') || text.includes('extend') || text.includes('Assessment extension')) {
        const selectRandom = Math.floor(Math.random() * extension.length);
        p.innerText = extension[selectRandom];
        play(extension[selectRandom]);
        document.getElementById('message').appendChild(p);

        window.setTimeout(function () {
            window.open(extensionLink);
        }, 3000);
    } else if (text.includes('learn programming') || text.includes('learn coding')
        || text.includes('sites to learn programming') || text.includes('programming')
        || text.includes('coding') || text.includes('learn') || text.includes('recommend')) {
        const selectRandom = Math.floor(Math.random() * learnCode.length);
        p.innerText = learnCode[selectRandom];

        let sites = document.createElement('p');
        sites.innerText = "1. BitDegree (https://www.bitdegree.org/learn/)\n" +
            "2. Coursera (https://www.hostinger.com/tutorials/recommends/coursera/)\n" +
            "3. Code Academy (https://www.codecademy.com/)\n" +
            "4. edX (https://www.edx.org/course/subject/computer-science)\n" +
            "5. Khan Academy (https://www.khanacademy.org/computing/computer-programming)";

        play(learnCode[selectRandom]);
        document.getElementById('message').append(p, sites);
    } else if (text.includes('time table') || text.includes('exam period') || text.includes('assessment time table')
        || text.includes('assessment period')) {
        const selectRandom = Math.floor(Math.random() * timetable.length);
        p.innerText = timetable[selectRandom];
        play(timetable[selectRandom]);
        document.getElementById('message').appendChild(p);

        window.setTimeout(function () {
            window.open(timetableLink);
        }, 3000);
    } else if (text.includes('open navigation') || text.includes('nav') || text.includes('help')) {
        openNav();
    } else if (text.includes('stop recording') || text.includes('stop')) {
        const selectRandom = Math.floor(Math.random() * stop.length);
        p.innerText = stop[selectRandom];
        play(stop[selectRandom]);
        recognition.stop();
        document.getElementById('message').appendChild(p);
    } else if (text.includes('bye') || text.includes('goodbye') || text.includes('Cya')) {
        const selectRandom = Math.floor(Math.random() * goodbye.length);
        p.innerText = goodbye[selectRandom];
        play(goodbye[selectRandom]);
        document.getElementById('message').appendChild(p);
    } else {
        const selectRandom = Math.floor(Math.random() * errors.length);
        p.innerText = errors[selectRandom];
        play(errors[selectRandom]);
        document.getElementById('message').appendChild(p);
    }
}
