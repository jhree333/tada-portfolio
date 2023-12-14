import updateHeader from "./header.js";
import updateBye from "./section/bye.js";
import updateEventbg from "./section/eventbg.js";
import updateHowtouse from "./section/howtouse.js";
import updateLineup from "./section/lineup.js";
import updateVideo from "./section/video.js";

$(function () {
  const initialize = () => {
    updateHeader();
    updateVideo();
    updateLineup();
    updateEventbg();
    updateHowtouse();
    updateBye();
  };

  initialize();
});
