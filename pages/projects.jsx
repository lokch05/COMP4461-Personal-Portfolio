import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

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
            <h2>
              <p>{'"If the library on campus were intelligent"'}</p>
            </h2>
            <p>
              Our project is about how to make the library more intelligent. We
              have done a questionaire asking students how satisfied they are
              with the available seats in the library, and we have observed that
              most of the interviewee revealed that they were not satisfied with
              the available space in the library. Therefore, as a member of
              HKUST and a library user ourselves, we decided to come up with a
              solution to alleviate the problem.
            </p>
            <p>
              Based on my past working experience with ITSC, I have come up with
              an idea to make use of microcontrollers and occupancy sensors to
              help students find available seats. I have also suggested that we
              make use of the{" "}
              <Link href="https://itsc.hkust.edu.hk/services/it-infrastructure/smart-campus-infrastructure">
                HKUST LoRaWan
              </Link>{" "}
              to send or receive the interpreted signal to or from the{" "}
              <Link href="https://api.ust.hk/portal/apis/">
                HKUST IoT database
              </Link>{" "}
              to update the seats&apos; status. Besides, I have recommended that
              we use QR codes and occupancy sensors interchangeably to help
              detect available seats more accuately. That is, users can scan the
              QR code printed on an E-ink display which is glued to a table to
              reserve their seat, and occupancy sensor is there to detect if an
              user is being away from their reserved seat. If an user is being
              away from the seat for a prolonged length of time, say more than
              45 minutes, then their personal belongings will be confiscated by
              the librar staff to avoid any selfish use of the library space.
            </p>
            <p>
              Regarding the UI part, I have built an web interface for the seat
              booking page, a web map for users to find available seats in the
              library, and an web interface for the library staff to check the
              status of the seats using Figma. During the making of the
              interfaces, I have tried to make the interface neat and intuitive
              so that users can make a good use of the system without any
              guidance.
            </p>
            <p>
              Throughout the project, I have learned how to identify the
              users&apos; need and think of a low-cost solution to address their
              need. We have come up with a potential solution using
              thermographic cameras before deciding to adopt the presented
              solution. However, using thermographic cameras is an impractical
              solution as they are relatively more expensive and it is difficult
              to detect available seats using the cameras during peak hours.
              Compared to using thermographic cameras, using microcontrollers is
              a more economical choice as they come with different prices and
              models, and they can meet the user&apos;s need more flexibly as
              the user can connect more modules to the microcontrollers, making
              this solution more sustainable and upgrable. I have also thought
              up that we should put the microcontrollers in a hidden network if
              they are connected to Wi-Fi in order to prevent hacking.
            </p>
            <p>
              Overall, I am satisfied with our system design and I hope that the
              system will be able to help alleviate the seating problem in the
              library.
            </p>
          </div>
        </Typography>
        <h1>
          <p>Images:</p>
        </h1>
        {itemData.map((item) => (
          <img
            width={"50%"}
            height={"50%"}
            key={item.index}
            src={item.img}
            alt={item.title}
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
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
