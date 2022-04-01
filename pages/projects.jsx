import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Head from "next/head";
import Stack from "@mui/material/Stack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Project One" {...a11yProps(0)} />
            <Tab label="Project Two" {...a11yProps(1)} />
            <Tab label="Project Three" {...a11yProps(2)} disabled />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography>
            <div style={{ marginTop: "-20px" }}>
              <h1>
                <p>{'"If the library on campus were intelligent"'}</p>
              </h1>
              <p>
                <h2>Empathize</h2>
              </p>
              <p>
                Our project is about how to make the library more intelligent.
                Before we started doing the project, we have done a
                questionnaire asking students how satisfied they are with the
                available seats in the library, and we have observed that most
                of the interviewees revealed that they were not satisfied with
                the available space in the library as it is difficult for them
                to find an unoccupied seat during peak hours and there are some
                selfish users who leave their belongings on their table to
                &quot;reserve&quot; their seat. Therefore, as a member of HKUST
                and a library user ourselves, we decided to come up with a
                solution to alleviate the problem.
              </p>
              <Stack direction="row" spacing="5">
                <img src="/Assets/Project1/survey1.png" width="30%" />
                <img src="/Assets/Project1/survey2.png" width="30%" />
                <img src="/Assets/Project1/survey3.png" width="40%" />
              </Stack>
              <p>
                <h2>Interpret</h2>
              </p>
              <p>
                Based on my past work experience with ITSC, I have come up with
                the idea of making use of microcontrollers and occupancy sensors
                to help students find available seats. That is, we can use the
                analog-to-digital converter on a microcontroller to interpret
                the seat occupancy sensor&apos;s signal to determine whether a
                user is using the seat. I have also suggested that we make use
                of the HKUST LoRaWan or HKUST IoT Wi-Fi network on the{" "}
                <Link href="https://itsc.hkust.edu.hk/services/it-infrastructure/smart-campus-infrastructure">
                  HKUST Smart Campus Infrastructure
                </Link>{" "}
                so that we can send or receive the interpreted signal to or from
                the HKUST IoT real-time database. Besides, I have recommended
                that we use QR codes and occupancy sensors interchangeably to
                help detect available seats more accurately. That is, library
                users should scan the QR code printed on an E-ink display that
                is glued to a table to reserve their preferred seat, and the
                occupancy sensor is to detect if a user is being away from their
                reserved seat.
              </p>
              <p>
                Below is the framework diagram I have made based on our
                project&apos;s idea. Hope it can help you better understand our
                system design
              </p>
              <Stack>
                <img src="/Assets/Project1/framework.png" />
              </Stack>
              <p>
                We also have two pictures to illustrate the interaction between
                the users and the system and the interaction between the
                microcontrollers and the system
              </p>
              <Stack direction="row">
                <img src="/Assets/Project1/slide12.png" width="50%" />
                <img src="/Assets/Project1/slide13.png" width="50%" />
              </Stack>
              <p>
                <h2>Ideate</h2>
              </p>
              <p>
                During the brainstorming activity, we all agreed to the idea of
                making an UI for our system on different platforms, for example,
                HKUST Library Webpage and USThing, to make the system more
                accessible. Regarding the UI part, I have built a web interface
                prototype for booking seats, a live library map for users to
                find available seats in the library, and a web interface for the
                library staff to monitor the status of the seats using Figma.
                Besides, I have also made a draft of the UI prototype for
                USThing. I have noticed that there is already a page for booking
                discussion rooms, so we only need to do a little trick to
                redirect users to the booking page on the mobile application.
                During the making of the user interfaces, I have tried to make
                the interface neat and intuitive so that users can make a good
                use of the system without any guidance.
              </p>
              <Box>
                <img src="/Assets/Project1/mindmap.png" width="100%" />
                <Stack direction="row">
                  <img
                    src="/Assets/Project1/mobile_available.png"
                    width="25%"
                  />
                  <img src="/Assets/Project1/mobile_taken.png" width="25%" />
                  <img src="/Assets/Project1/rsz_page1.png" width="25%" />
                  <img src="/Assets/Project1/rsz_page2.png" width="25%" />
                </Stack>
                <Stack direction="row">
                  <img
                    src="/Assets/Project1/web_seatMap.png"
                    width="50%"
                    height="100%"
                  />
                  <img
                    src="/Assets/Project1/web_seatTable.png"
                    width="50%"
                    height="100%"
                  />
                </Stack>
              </Box>
              <p>
                <h2>Verify</h2>
              </p>
              <p>
                We have a storyboard and a video to help us further explain the
                interaction between the users and the system.
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Jd3n52ypt1c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <Box sx={{ width: "100%" }}>
                  <Stack direction="row">
                    <img src="/Assets/Project1/storyboard1.jpeg" width="50%" />
                    <img src="/Assets/Project1/storyboard2.jpeg" width="50%" />
                  </Stack>
                </Box>
              </p>
              <p>
                <h2>Reflection</h2>
              </p>
              <p>
                This project allowed me to think in different perspectives. When
                we were making the design, I always thought that there was
                something lacking in the design, for example, &quot;can all the
                library users benefit from the system?&quot;, &quot;would they
                prefer a different way to receive the data?&quot;, &quot;do we
                have an intuitive user interface design for the users? &quot;,
                and I endeavoured to suggest new features to make the system
                more complete and more human-centered. Throughout the project, I
                have learned how to identify the users&apos; need and think of a
                low-cost solution to address their need. Before deciding to
                adopt the presented solution, we discussed a potential solution
                about using thermographic cameras. However, using thermographic
                cameras is an unrealistic solution as they are relatively more
                expensive and energy-consuming, and it is difficult to detect
                available seats with those cameras during peak hours. Compared
                to using thermographic cameras, using microcontrollers is a more
                economical choice as they come with different prices and models
                which can meet the developer&apos;s need more flexibly as the
                developer can add and remove different kinds of modules to and
                from the microcontrollers, making the system more sustainable
                and maintainable. I have also thought up that we should put the
                microcontrollers in a hidden network if they are connected to
                Wi-Fi to prevent hacking when it comes to system security.
                During the making of the UI, I have gained a new skill of using
                Figma to design a responsive UI. I would gladly recommend Figma
                to whoever wants to design a beautiful UI. Speaking of our
                teamwork, I am glad that my teammates are all proactive and
                always happy to contribute to the team.
              </p>
              <p>
                Overall, I am satisfied with our design and I hope that the
                system will be able to help alleviate the seating problem in the
                library.
              </p>
            </div>
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>
            <div style={{ marginTop: "-20px" }}>
              <h1>
                <p>
                  {'"Co-Free — a chatbot for the people in home quarantine"'}
                </p>
              </h1>
              <p>
                <h2>Needfindings</h2>
              </p>
              <p>
                We have interviewed a person who have been in mandatory home
                quarantine and he commented that the information from the
                handbooks were quite inconsistent as there are different
                versions of the handbooks. It is also tiring for him to find
                specific information from the wordy guidelines. He also
                mentioned that the handbooks were delivered after half a week of
                his quarantine and he had not known there were guidelines for
                home quarantine.
              </p>
              <p>
                <h2>POV</h2>
              </p>
              <p>
                After the interview, we have identified the target users of the
                application. The target users include the people who are in
                mandate home quarantine and the government telephone hotline
                listeners. We think that the chatbot should be able to answer
                the commonly asked questions about quarantine and tell the users
                where to find clinics or hospitals near them to save them some
                time from looking up the information online or from the
                handbooks. Besides, the chatbot could help reduce the workload
                of the hotline listeners.
              </p>
              <p>
                <h2>Ideate</h2>
              </p>
              <p>
                Initially, we have come up with three designs for the UI, which
                were the desktop app UI, the web app UI and the mobile app UI.
                We have also come up with some essential features for the
                chatbot. However, during the implementation of the application,
                we have built only the web UI for the users since the web
                application can be run by any devices that supports the latest
                web browsers. We have also limited the questions to those which
                require a series of information seeking before the users can
                find the answers to.
              </p>
              <p>
                For the flow of the conversations with the backend chatbot,
                please refer to the below diagram.
              </p>
              <img width={"100%"} src="Assets/Project2/Diagram.png" />
              <p>
                I have also sketched a storyboard to explain the usage scenario
                to potential users. We have presented it to a student in the
                HKUST library and we were given positive feedbacks as she
                thought that the proposed solution is helpful and informative.
              </p>
              <img width={"100%"} src="Assets/Project2/Storyboard.png" />
              <p>
                <h2>Prototype</h2>
              </p>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <p>
                  We have built a web UI for the frontend part of the project.
                  The webpage shows a chat-box which is aligned to the centre of
                  the page to gain the most attention from the users. Also, we
                  have adapted attractive and energetic colours that give a good
                  feeling to the chat-bot. Also, we reckon that the colours we
                  have adapted will cause less eye-strain for the users. There
                  are two ways to interact with the chatbot, the user can type
                  their message or the use speech-to-text feature by clicking
                  the microphone button in the chat-box. Below the chat-box we
                  have put a chart that shows the latest covid situation and we
                  have also put some useful links to provide the user with more
                  insight into what to do during self quarantine.
                </p>
                <img
                  src="Assets/Project2/frontend.jpeg"
                  width="25%"
                  height="25%"
                />
              </Stack>
              <p>
                Regarding the backend part, I was responsible for making the
                chatbot interaction possible and more accessible as well as
                making the custom actions. I have picked Rasa v.3.0.9 for the
                project since there is some compatibility issue running Rasa
                v.2.x on Windows. Also, using Rasa v.3.0.9 makes it more
                accessible for the teammates who are using Windows to test the
                backend chatbot. The completed rasa chatbot is now able to
                handle questions like what the COVID situation in Hong Kong is,
                where to seek help from if the user is having troubles during
                his quarantine, what are the contact information of the
                designated clinics and Queen Elizabeth Hospital, what are the
                common COVID symptoms, whether the user can leave his place of
                isolation, where the closet clinic to the user is, and what are
                the advices for home quarantine. For the finding nearest clinic
                action, I have made three different stories in case the user
                accidentially called the action and wants to quit before the
                action finishes. I have also tried to make the chatbot sound
                polite and causal in order not to patronize the user. Regarding
                the chatbot functionality, I have made two custom actions for
                specific questions like where is the closet clinic to the user
                and what is the latest COVID situation in Hong Kong. For the
                former action I have adopted Google Direction API for
                calculating the distance between the user and the designated
                clinics. The Google API will look up any place name that is
                similiar to the user entered string in the Hong Kong buildings
                database. Once it has found a matching place, it will send a
                JSON object to the Rasa action class. In order to find which
                clinic is closet to the user, I have decided to use an iteration
                to find the distance between all clinics and the user entered
                address. When the iteration has finished, a dictionary that
                stores the information of the clinic closet to the user is
                returned so that the Rasa chatbot is able to tell the user the
                information of the clinic. For the latter action I have adopted
                an API from <Link href="https://disease.sh">disease.sh</Link>.
                This API is able to return the daily new COVID cases and the
                total COVID cases in Hong Kong. After calling the API, a
                dictionary is returned to the Run function so that the chatbot
                is able to tell the user the latest COVID situation in Hong
                Kong. Before deciding to adopt this API, I have tried the{" "}
                <Link href="https://bit.ly/3J104sW">API</Link> from data.gov.hk,
                but the API response time was very slow (took more than 10
                seconds to return the JSON string) and therefore it has not been
                adopted in our project.
              </p>
              <p>
                Please refer to{" "}
                <Link href="https://github.com/oching049/COMP4461_Project_2">
                  our Git repo
                </Link>{" "}
                for the codes
              </p>
              <p>
                Below is the demo video of our working prototype. Feel free to
                check it out
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Z4t4phKuMf0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>
                <h2>Reflection</h2>
              </p>
              <p>
                Throughout this project, I have gained a new insight into the
                importance of human-computer interaction during quarantine. A
                good chatbot is not only helpful for the users but also for the
                people who answer the questions on a hotline. During developing
                the backend chatbot, I was provided with a good opportunity to
                review my Python skills and I have learned how to use the Google
                API, which I think will be useful for my future career. I am
                also glad that I got to do the storyboard part since I wanted to
                apply what I have learned from the course in this project. I
                also appreciate my group mates for being proactive in suggesting
                new ideas and giving feedbacks to the backend chatbot. To
                conclude, I am happy with our final result, and I hope I will
                get to gain more useful knowledge in the next project.
              </p>
            </div>
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "/Assets/Project1/mobile_available.png",
    title: "Mobile - Available",
  },
  {
    img: "/Assets/Project1/mobile_taken.png",
    title: "Mobile - Taken",
  },
  {
    img: "/Assets/Project1/web_seatMap.png",
    title: "Web - Seat Map",
  },
  {
    img: "/Assets/Project1/web_seatTable.png",
    title: "Web - Seat Table",
  },
];
