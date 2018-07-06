/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the Feed Reader application.
 */

/* Tests are within the $() function because some of these tests require
 * DOM elements. We want to ensure the test are not run until the DOM is ready.
 */
$(function() {

    /* This suite tests the RSS feeds definitions, the variable being tested
    *  is the main variable allFeeds.
    */
    describe('RSS Feeds', () => {
        /* These tests make sure that the allFeeds variable has been
         * defined and that it is not empty.  The first expectation is that the
         * variable allFeeds is defined.  The second expection checks the
         * length of allFeeds to make sure allFeeds has content (length not = 0)
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* These tests make sure that the "url" of each entry in allFeeds has
         * been defined and that it is not empty.  The test will loop thru
         * all the "entries" in allFeeds object.  The first expectation is the
         * entries are defined.  The second expection checks the length of
         * each entry in allFeeds to make sure url has content (length not = 0)
         */
         it('has a URL and URL is not empty', () => {
            for (let i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).not.toBe(0);
            };
         });


        /* These tests loop through each feed in the allFeeds object
         * to ensure it has a name defined and that the name is not empty.
         */
         it('has a name and name is not empty', () => {
            for (let i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name.length).not.toBe(0);
            };
         });
    });


    /* This suite tests the menu functionality to ensure it opens and
     * closes when clicked.
     */
    describe('The Menu', () => {

          /* This test  ensures the menu element is hidden at start-up.
           * The css class "menu-hidden" is checked to be true
           * The expectation is the css class will be present which means
           * the menu starts hidden.
           */
          it('has a default of hidden', () => {
              expect($('body').hasClass('menu-hidden')).toBeTruthy();
          });

          /* This test will check if the menu can be opened and closed
          * with alternating "click".   The test expects that when a
          * "click" event is triggered to open the menu - the css class
          * "menu-hidden" is removed.  The second test expects when
          * a second "click" is trigger, the menu will return to hidden
          * with css class being addded back.
          */
          it('displays and hides on click', () => {
              $('.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toBeFalsy();
              $('.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toBeTruthy();
          });

    });

    /* This suite tests the menu functionality of the feed reader call
     * to ensure the data is being returned at each call.
     */
    describe('Initial Entries', () => {

          /* This test expects that when the loadFeed function is called
           * and completes its work, there is at least
           * a single .entry element within the .feed container.
           */

         beforeEach((done) => {
             loadFeed(0, () => {
             done();
          });
         });

         it('that feed -> entry are defined and not empty', () => {
           expect($('.feed .entry')).toBeDefined;
           expect($('.feed .entry').length).not.toBe(0);
         });

     });


    /* This suite tests that a new feed is loaded each time a call to
     * retrieve new feeds is executed.
     */
    describe('New Feed Selection', () => {

      /* This test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * THe first "loadFeed" is called to get one entry, the second
       * "loadFeed" is called to get the next.  The first and second
       * entries are expected to be different.
       */
       let holdFirstFeed,
           holdNextFeed;

           beforeEach(function(done) {
               loadFeed(0, function()  {
                   holdFirstFeed = document.querySelector('.feed').innerHTML;

               });
               loadFeed(1, function() {
                   holdNextFeed = document.querySelector('.feed').innerHTML;
                   done();
               });
           });
           /* Compare the two loaded feeds */
           it('loads new feeds', (done) => {
               expect(holdNextFeed !== holdFirstFeed).toBe(true);
               done();
       });
    });

}());
