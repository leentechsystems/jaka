/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Call onDeviceReady when PhoneGap is loaded.
//
// At this point, the document has loaded but phonegap-1.0.0.js has not.
// When PhoneGap is loaded and talking with the native device,
// it will call the event `deviceready`.
//
// document.addEventListener("deviceready", onDeviceReady, false);
// document.addEventListener("offline", onOffline, false);
// // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
// //
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
      document.addEventListener("backbutton", onBackKeyDown, false); //Listen to the User clicking on the back button
}

function onBackKeyDown(e) {
    e.preventDefault();
    navigator.notification.confirm("Are you sure you want to exit ?", onConfirm, "Confirmation", "Yes,No"); // Prompt the user with the choice
}

function onConfirm(button) { 

    if(button==2){ //If User selected No, then we just do nothing
        return;
    }else{
        navigator.app.exitApp(); // Otherwise we quit the app.
    }
}

$(document).ready(function() {
    window.location = "http://192.168.2.88";
});