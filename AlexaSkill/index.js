/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.2a2bf3d2-40e0-403f-86db-8ed94f4f3a55";

const handlers = {
    'LaunchRequest': function () {
        const speechOutput = "You launced the app without any intent";
        this.emit(':tell', speechOutput);
    },
    'BusTimeDestinationIntent': function () {
        const speechOutput = "You asked a question about bus times for a certain destination";
        this.emit(':tell', speechOutput);
    },
    'BusTimeTypeIntent': function () {
        const speechOutput = "You asked a question about bus times for a certain bus type";
        this.emit(':tell', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "This is the help message for Hello World.";
        const reprompt = "This is the help message reprompt for Hello World";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "Hello World Stopped");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "Hello World Stopped");
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.registerHandlers(handlers);
    alexa.execute();
};
