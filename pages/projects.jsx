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
            <Tab label="Project Two" {...a11yProps(1)} disabled />
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
                <img src="/Assets/survey1.png" width="30%" />
                <img src="/Assets/survey2.png" width="30%" />
                <img src="/Assets/survey3.png" width="40%" />
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
                <img src="/Assets/framework.png" />
              </Stack>
              <p>
                We also have two pictures to illustrate the interaction between
                the users and the system and the interaction between the
                microcontrollers and the system
              </p>
              <Stack direction="row">
                <img src="/Assets/slide12.png" width="50%" />
                <img src="/Assets/slide13.png" width="50%" />
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
                <img src="/Assets/mindmap.png" width="100%" />
                <Stack direction="row">
                  <img src="/Assets/mobile_available.png" width="25%" />
                  <img src="/Assets/mobile_taken.png" width="25%" />
                  <img src="/Assets/rsz_page1.png" width="25%" />
                  <img src="/Assets/rsz_page2.png" width="25%" />
                </Stack>
                <Stack direction="row">
                  <img
                    src="/Assets/web_seatMap.png"
                    width="50%"
                    height="100%"
                  />
                  <img
                    src="/Assets/web_seatTable.png"
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
                    <img src="/Assets/storyboard1.jpeg" width="50%" />
                    <img src="/Assets/storyboard2.jpeg" width="50%" />
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
          Item Two
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
    img: "/Assets/mobile_available.png",
    title: "Mobile - Available",
  },
  {
    img: "/Assets/mobile_taken.png",
    title: "Mobile - Taken",
  },
  {
    img: "/Assets/web_seatMap.png",
    title: "Web - Seat Map",
  },
  {
    img: "/Assets/web_seatTable.png",
    title: "Web - Seat Table",
  },
];
