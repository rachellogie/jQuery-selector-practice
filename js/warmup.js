window.Warmup = {

  initialize: function () {

    /*
      Description: show the names of the people at the top level
      Outcome: Izaiah, Eulalia
    */
    showNamesForSelector("#top-level-button", "#root > li > span");

    /*
      Description: show the names of the people at the second level
      Outcome: Joel, Aaliyah, Claude
    */
    showNamesForSelector("#second-level-button", "#root > li > ul > li > span");
    //                       You need to replace ^^^ with a valid CSS selector

    /*
      Description: show the names of the people who have data-employment="full-time"
      Outcome: Izaiah, Della, Lowell
    */
    showNamesForSelector("#full-time-button", $("span").data("data-employment") === "full-time");

    /*
      Description: show the names of the people with the class name "talkative"
      Outcome: Claude, Lurline
    */
    showNamesForSelector("#talkative-button", ".talkative");

    /*
      Description: show the names of the people who have an id of "vp"
      Outcome: Eulalia
    */
    showNamesForSelector("#vp-button", "#vp");

    /*
      Description: show the names of the people under Isaiah
      Outcome: Della, Lurline, Aaliyah, Elisa, Joel
    */
    showNamesForSelector("#under-isaiah-button", "#root > :first-child > ul");

    /*
      Description: show the names of the people under Eulalia
      Outcome: Claude, Lowell
    */
    showNamesForSelector("#under-eulalia-button", "#root > :nth-child(2n) > ul");

    /*
      Description: values of all of the input fields of type text
      Outcome: Joe, Example
    */
    showValuesForSelector("#text-field-button", "input[type=text]");

  }

};
