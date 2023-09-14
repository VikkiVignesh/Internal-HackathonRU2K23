/**
 * The webSpeech.js checks whether specific word or words are detected in the text.
 * @param text
 */
function checkSpeech(text) {
    text = validateText(text);
    p = document.createElement('p');
    
    if(text==="")
    {
        setTimeout(() => {
            p.innerText= "I Gonna Freez";
            play(p);
        }, 2000);
    }
    //Greetings
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')|| text.includes('Good morning')) 
     {
        const selectRandom = Math.floor(Math.random() * introduction.length);
        p.innerText = introduction[selectRandom];
        play(introduction[selectRandom]);
        document.getElementById('message').appendChild(p);
    }  
    
    //About ganga
    else if (text.includes('ganga ganga') || text.includes('about ganga') || text.includes('about ganga')
     || text.includes('cleanness about ganga') || text.includes('say me about ganga river') || text.includes('ganga river')) 
    {
        const selectRandom = Math.floor(Math.random() * g.length);
        p.innerText = g[selectRandom];
        play(g[selectRandom]);
        //document.getElementById('message').appendChild(p);
       window.setTimeout(function () {
           window.open(glink);
       }, 3000);
    }  
    
    //About ganga Pollution
    else if (text.includes('polluted ganga') || text.includes('why is ganga polluted') || text.includes('')
    || text.includes('is river ganga river polluted') || text.includes('tell me about  pollution in ganga'))
 {
        const selectRandom = Math.floor(Math.random() * gp.length);
        p.innerText = gp[selectRandom];
        play(gp[selectRandom]);
      //  document.getElementById('message').appendChild(p);
        window.setTimeout(function () {
            window.open(gplink);
        }, 3000);
      
    } 
    
    
    //Save Ganga
    else if (text.includes('Save a Ganga') || text.includes('action for ganga') || text.includes('how to save ganga river')
        || text.includes('clean Ganga')) {
            const selectRandom = Math.floor(Math.random() * sg.length);
            p.innerText = sg[selectRandom];
            play(sg[selectRandom]);
           //  document.getElementById('message').appendChild(p);
            window.setTimeout(function () {
                window.open(sglink);
            }, 3000);

    } 
    
    
    //Brouchures
    else if (text.includes('current implementation') || text.includes('Government pdfs') || text.includes('research papers')) {
        const selectRandom = Math.floor(Math.random() * Brouc.length);
        p.innerText = Brouc[selectRandom];
        play(Brouc[selectRandom]);
        document.getElementById('message').appendChild(p);
         
        const BroucLink1=Math.floor(Math.random()* BroucLink.length);
        window.setTimeout(function () {
            window.open(BroucLink1);
        }, 4000);
    } 
    
    
    else if (text.includes('learn more') || text.includes('government webs')
        || text.includes('sites for more information') || text.includes('sourcesforNamami') || text.includes('learn') || text.includes('recommend')) {
        const selectRandom = Math.floor(Math.random() * Usefulweb.length);
        p.innerText = Usefulweb[selectRandom];

        let sites = document.createElement('p');
        sites.innerText = "1. Namamigangae (https://nmcg.nic.in/NamamiGanga.aspx)\n" +
            "2. NationalPortal(https://www.india.gov.in/spotlight/namami-gange-programme#tab=tab-1)\n" +
            "3. pmIndia (https://www.pmindia.gov.in/en/government_tr_rec/namami-gange/)\n" +
            "4. NamamiGangeWiki(https://en.wikipedia.org/wiki/Namami_Gange_Programme)\n" +
            "5. Research paper(https://www.researchgate.net/publication/347330432_Namami_Gange_-_A_Legal_Analysis)";

        play(Usefulweb[selectRandom]);
        document.getElementById('message').append(p, sites);
    } 
    
    
    // else if (text.includes('time table') || text.includes('exam period') || text.includes('assessment time table')
    //     || text.includes('assessment period')) {
    //     const selectRandom = Math.floor(Math.random() * timetable.length);
    //     p.innerText = timetable[selectRandom];
    //     play(timetable[selectRandom]);
    //     document.getElementById('message').appendChild(p);

    //     window.setTimeout(function () {
    //         window.open(timetableLink);
    //     }, 3000);
    // } 
    
    else if (text.includes('open navigation') || text.includes('nav') || text.includes('help')) {
        openNav();
    }
    
    
    else if (text.includes('stop recording') || text.includes('stop')) {
        const selectRandom = Math.floor(Math.random() * stop.length);
        p.innerText = stop[selectRandom];
        play(stop[selectRandom]);
        recognition.stop();
        document.getElementById('message').appendChild(p);
    } 
    
    else if (text.includes('bye') || text.includes('goodbye') || text.includes('Cya')) {
        const selectRandom = Math.floor(Math.random() * goodbye.length);
        p.innerText = goodbye[selectRandom];
        play(goodbye[selectRandom]);
        document.getElementById('message').appendChild(p);
    } 
    
    
    else {
        const selectRandom = Math.floor(Math.random() * errors.length);
        p.innerText = errors[selectRandom];
        play(errors[selectRandom]);
        document.getElementById('message').appendChild(p);
    }
}
