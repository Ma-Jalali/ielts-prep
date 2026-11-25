/* IELTS · Reading · Practise · Notes and tables · Exercise 9 — Mobile communication: back to basics.
   From the teacher's booklet "Reading Exercises" (Chapter 2, Passage 9). The passage is adapted (rewritten) for this site; the answers are
   unchanged unless noted. Source fixes: "realty two frequencies" → really; "Nikolai Tesla" → Nikola; "Alexander Bell" → Alexander Graham Bell. The diagrams are new drawings.
   Ids (lesson, activities, blocks) are the keys of students' saved work: never rename them. */
window.DEC15_LESSON = {
 "id": "ieb2w2d209",
 "week": 2,
 "day": 209,
 "sheet": true,
 "illus": "radio",
 "title": "Mobile communication: back to basics",
 "duration": "About 20 minutes",
 "journey": "How a mobile phone call is connected and passed from one cell to the next. Label three small diagrams.",
 "finish": {
  "title": "Next",
  "text": "Stars in their eyes"
 },
 "sections": [
  {
   "id": "ex",
   "number": "01",
   "minutes": 15,
   "tone": "blue",
   "art": "reading",
   "title": "Questions 1–5",
   "subtitle": "Diagram labelling",
   "outcome": "Read the passage and answer the questions.",
   "activities": [
    {
     "id": "read",
     "short": "Read and answer",
     "minutes": 15,
     "grouping": "Alone",
     "title": "Read and answer",
     "goal": "Read the passage and answer the questions, then check your answers.",
     "blocks": [
      {
       "type": "ieTest",
       "id": "ieb2w2d209-test",
       "title": "Mobile communication: back to basics",
       "passage": {
        "label": "Reading passage",
        "title": "Mobile communication: back to basics",
        "text": "Many people think that mobile phones are a recent invention. In fact, they have been available since the mid-1980s, and the technology goes back to the 19th century. The origins of mobile phone technology can be traced to Alexander Graham Bell (telephony) and to Nikola Tesla and Guglielmo Marconi (radio).\n\nMobile phones are really small radios. Mobile communication is made possible by three basic items: a mobile phone (or handset), switching centres and base stations. An area is divided into a series of hexagonal cells, which may be only 500 metres apart in cities or 10 kilometres apart in the countryside. Each hexagon contains a base station, which communicates with the handset: the closer you are to a base station, the clearer the signal. Base stations are linked to the telephone network by cables, and to other base stations. The base stations are controlled by switching centres, which are in fact sophisticated computers called mobile telephone switching offices. They monitor all mobile phone calls, track the location of the handsets in their area and keep billing information. When the user moves from one cell to another, the switching centres pass the handset's signal from base station to base station.\n\nTo do this, every mobile phone has two channels: a duplex channel, through which people can talk and listen at the same time, and a control channel. The duplex channel is really two frequencies: one to talk over and one to listen over. When a mobile phone is switched on, it looks for the control channel of the nearest base station. Through this channel the base station sends its system identification code, a five-digit number that shows the network provider. If the handset cannot find any control channels, it displays a \"no signal\" message. When the phone finds a control channel, it also sends a registration request to the switching centre. In this way the switching centre knows where the handset is. If the switching centre receives a call for a user, it first tries to find the handset, and then it chooses a pair of frequencies for the handsets to use. Next, it communicates with the handsets through the control channel and tells them which frequencies to use. Once your handset and the base station are set to those frequencies, the call is connected.\n\nThe switching centre also monitors the strength of the signal through the base station. When the base station notices that the handset's signal is getting weaker, it tells the switching centre. At the same time, the next base station notices that the handset's signal is getting stronger, and it also tells the switching centre. At this point the handset receives a signal through the control channel telling it to change to the new frequencies provided by the new base station, and the call continues."
       },
       "blocks": [
        {
         "type": "ieDiagram",
         "title": "How a mobile phone call works",
         "instruction": "Label the diagrams below. Choose **NO MORE THAN THREE WORDS** from the passage for each answer.",
         "rule": "NO MORE THAN THREE WORDS",
         "max": 3,
         "src": "assets/reading/practice/ieb2w2d209.svg",
         "alt": "Three small diagrams. Top left: a person walks from one hexagonal cell to the next; each cell has a mast. Bottom: a handset linked to a mast by a dashed two-way line and by a pair of solid lines going in opposite directions; an arrow goes from the mast to a box. Top right: two cells, each with a mast, both connected to one box.",
         "labels": [
          {
           "x": 7.8,
           "y": 9.5,
           "answer": "base station|a base station"
          },
          {
           "x": 41.2,
           "y": 59.5,
           "answer": "control channel|the control channel"
          },
          {
           "x": 41.9,
           "y": 95.0,
           "answer": "duplex channel|the duplex channel"
          },
          {
           "x": 61.2,
           "y": 59.5,
           "answer": "registration request|a registration request"
          },
          {
           "x": 89.0,
           "y": 10.2,
           "answer": "switching centre|switching center|the switching centre"
          }
         ],
         "why": [
          "*Each hexagon contains a base station, which communicates with the handset.*",
          "The phone *looks for the control channel of the nearest base station*; the dashed line is the channel used to set up calls.",
          "The *duplex channel is really two frequencies: one to talk over and one to listen over* (the two arrows).",
          "*It also sends a registration request to the switching centre.*",
          "*The base stations are controlled by switching centres.*"
         ],
         "id": "ieb2w2d209-q1",
         "from": 1
        }
       ]
      }
     ]
    }
   ]
  }
 ],
 "extras": [],
 "glossary": []
};
