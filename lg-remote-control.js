var LitElement = LitElement || Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
var html = LitElement.prototype.html;
var css = LitElement.prototype.css;

class LgRemoteControl extends LitElement {
    
    static get magiogoIcon() {
        return html`<svg
           version="1.1"
           id="svg157"
           width="240"
           height="240"
           viewBox="0 0 240 240"
           sodipodi:docname="unnamed.svg"
           inkscape:version="1.2.1 (9c6d41e410, 2022-07-14)"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:svg="http://www.w3.org/2000/svg">
          <defs
             id="defs161" />
          <sodipodi:namedview
             id="namedview159"
             pagecolor="#ffffff"
             bordercolor="#000000"
             borderopacity="0.25"
             inkscape:showpageshadow="2"
             inkscape:pageopacity="0.0"
             inkscape:pagecheckerboard="0"
             inkscape:deskcolor="#d1d1d1"
             showgrid="false"
             inkscape:zoom="3.4333333"
             inkscape:cx="120"
             inkscape:cy="120"
             inkscape:window-width="1920"
             inkscape:window-height="1027"
             inkscape:window-x="-8"
             inkscape:window-y="-8"
             inkscape:window-maximized="1"
             inkscape:current-layer="g163" />
          <g
             inkscape:groupmode="layer"
             inkscape:label="Image"
             id="g163">
            <image
               width="240"
               height="240"
               preserveAspectRatio="none"
               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAAAAXNSR0IArs4c6QAAAARnQU1BAACx
        jwv8YQUAAAIZUExURVpaWl9fX2BgYIyMjJ6enqKioqCgoKGhoaSkpJeXl1tbW1hYWFlZWaamprS0
        tLGxsaysrK2trZ+fn4uLi6+vr+np6f7+/sTExFZWVre3t+zs7Jqamqqqqqurq6enp5ubm9PT0/r6
        +vv7+/b29v///9HR0eDg4NXV1cXFxaioqKOjo76+vvj4+Pf394iIiM7Oztra2tTU1KmpqbOzs/39
        /d3d3eHh4evr69bW1tfX16WlpbKysr+/v9nZ2fT09PHx8czMzLCwsMPDw9LS0s/Pz/z8/Pn5+cvL
        y52dncLCwri4uMnJycjIyNvb25mZmV1dXa6ursfHx7y8vObm5sbGxpWVlc3NzfDw8Ofn55ycnJSU
        lLu7u9/f3+3t7djY2JOTk7m5udzc3JGRkeXl5Y+Pj/Ly8sDAwICAgOrq6vX19dDQ0L29vcrKysHB
        wYSEhJiYmN7e3uPj44mJifPz81dXV+Tk5O/v74eHh7q6uu7u7uLi4oKCgm5ubmNjY29vb1VVVW1t
        bejo6LW1tV5eXo2NjWxsbGhoaGlpaWtra3V1dWdnZ2RkZGJiYoWFhWpqan19fVRUVJCQkGZmZoOD
        g3JycoaGhn9/f1BQUFNTU2VlZY6OjoGBgXx8fIqKipKSklxcXHt7e2FhYZaWlnFxcXl5eVJSUnBw
        cHNzc3h4eFFRUXZ2dnd3d3R0dLa2tn5+fnp6ek5OTk9PTwAAAM/xsD4AAACzdFJOU///////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////8A
        Dym/6AAAAAlwSFlzAAAOwwAADsMBx2+oZAAAF9RJREFUeF7tnY1bE1e6wP0ICZQPNSqNBsgAGSIh
        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
        "
               id="image165" />
          </g>
        </svg>
     `;
    }
    
    static get disneyIcon() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,168.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M192.9,1646.8c-2.4-1.6-2.1-9.3,0.7-18.7c1-3.1-0.2-4.2-8.7-7.7c-8.7-3.5-9.8-4.5-9.3-8.6
              c0.7-5.8,5.9-6.8,15.5-3c3.8,1.6,7.2,2.8,7.5,2.8c0.5,0,2.1-4,3.7-8.7c3.3-10.1,7.5-13.3,12.4-9.8c3,2.3,3,3.3,1.2,10.1
              c-1,4-2.4,8.7-3.1,10.3c-0.7,2.1,1,3.5,7.3,5.8c12.2,4.4,13.6,5.4,13.6,10c0,5.4-6.6,6.5-17.8,2.6c-4.5-1.6-8.2-2.8-8.4-2.8
              s-1.4,3.3-2.4,7.5C201.6,1647.8,198.7,1650.4,192.9,1646.8z"/>
              <path class="st0" d="M97.2,1581.1c-19.7-5.4-30.2-13.4-30.2-23.1c0-5.9,1.4-6.6,7.9-4c3.3,1.2,3.3,1.4-0.9,3.1l-4.4,1.6l5.8,3.5
              c10.7,6.5,29.9,9.8,51.5,8.7c22.2-1,35.4-4,51.9-12c20.1-9.8,34.9-28.8,34.9-44.9c0-6.8-6.6-18.7-13.3-23.7
              c-13.1-10-34.9-17.3-38.6-12.7c-1,1.2-3.8,8.6-6.3,16.2c-2.4,7.7-4.9,15.4-5.6,16.9c-1.6,4,9.6,7,23.2,6.3l10-0.5l-0.5-5.6
              c-0.7-7,3.1-7.9,7.3-1.9c4.2,5.8,3.5,12.4-1.7,17.3c-3.8,3.5-6.1,4.2-16.1,4.2c-6.5,0-15-0.7-19-1.4l-7.5-1.6l-4,9.4
              c-2.3,5.1-5.9,10.8-8,12.6c-3.7,3.3-3.7,3.3-3.7-1.9c0-2.8,0.9-9.8,2.1-15.4l1.9-10.1l-5.1-3.5c-11.9-8.4-19.9-18.2-19.9-23.7
              c0-8.9,12.4-18.5,32.8-25.7c6.8-2.3,10.1-4.7,12.6-8.9c1.9-3.1,4.2-5.8,5.1-5.8c4.2,0,7.2,2.4,7.2,6.1c0,3.5,1.2,4.2,10.3,5.8
              c30.2,5.4,51.2,28.5,48.5,53.8c-2.3,22.5-19.6,40.5-50.6,53.1C149.2,1583.4,117.8,1586.5,97.2,1581.1z M142.4,1493.4l4.4-15.4
              l-5.8-0.5c-6.5-0.5-24.4,7.5-27.6,12.2c-1.4,2.3-1,3.8,1.6,6.6c3.5,4,17.6,12,21.1,12.2C137.2,1508.6,140,1501.8,142.4,1493.4z"/>
              </g>
              </svg>
     `;
    }

    static get daznIcon() {
        return html`<svg version="1.0" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 30.7 30.7" style="enable-background:new 0 0 30.7 30.7;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.500000,321.700000) scale(0.100000,-0.100000)">
              <path class="st0" d="M64.5,3165.6c-0.3-0.2-0.4-17.9-0.4-39.2v-38.9l5.4-5.4l5.4-5.5l-5.4-5.5l-5.4-5.6v-39.2v-39.2h89.5h89.5v39.2
              v39.3l-5.4,5.5l-5.5,5.5l5.5,5.4l5.4,5.4l-0.1,39.2l-0.2,39.2l-88.9,0.2C105,3165.9,64.7,3165.8,64.5,3165.6z M234.2,3123.8l0.1-33
              l-7.2-7.3l-7.2-7.3l7.2-7.3l7.2-7.2v-33v-33l-80.6,0.1l-80.6,0.2l-0.2,32.9l-0.1,32.9l7.3,7.3l7.4,7.4l-7.4,7.4l-7.3,7.3v32.6
              c0,17.9,0.2,32.8,0.4,33c0.2,0.3,36.5,0.4,80.6,0.3l80.2-0.2L234.2,3123.8z"/>
              <path class="st0" d="M102.2,3111.8v-24.7h14.9h14.8l5.5,5.5l5.4,5.4v13.8v13.8l-5.4,5.4l-5.5,5.5h-14.8h-14.9V3111.8z
              M131.1,3124.8l3-2.9v-10v-10l-2.9-3l-2.9-3h-8.6h-8.6v15.5c0,8.6,0.2,15.8,0.4,16c0.2,0.3,4.1,0.4,8.6,0.4h8.1L131.1,3124.8z"/>
              <path class="st0" d="M180.6,3135.6c-0.6-1.1-4.3-9.8-13.4-31.8c-2.7-6.5-5.3-12.8-5.8-14s-0.9-2.2-0.9-2.3c0-0.2,2.1-0.3,4.7-0.3
              h4.6l1.4,3.1l1.3,3.1h12.4h12.3l1.3-3.1l1.3-3.1h4.8c3.6,0,4.7,0.2,4.4,0.8c-0.2,0.4-1.3,3-2.5,5.8c-1.9,4.6-4.3,10.3-14.4,34.4
              l-3.4,8.1l-3.8,0.2C181.9,3136.6,181.1,3136.4,180.6,3135.6z M189.4,3112.1l4.1-9.9h-8.7h-8.7l1.3,3c0.7,1.6,2.6,6.3,4.2,10.3
              c1.6,4,3.2,7.1,3.4,6.9C185.2,3122.1,187.2,3117.4,189.4,3112.1z"/>
              <path class="st0" d="M102.5,3064.8c-0.1-0.4-0.2-2.3-0.1-4.3l0.2-3.6l12.7,0.1c6.9,0,12.6-0.1,12.6-0.3c0-0.3-2.3-3.3-5.1-6.7
              c-2.9-3.4-5.9-7.2-6.8-8.3c-0.8-1.1-4.3-5.3-7.6-9.3l-6.1-7.4v-4.3v-4.3h18.8h18.8v4.4v4.4H127h-12.8l1.2,1.8
              c0.7,0.9,6.5,8,12.9,15.8l11.6,14.1l-0.2,4.3l-0.1,4.3l-18.4,0.1C108.1,3065.4,102.7,3065.3,102.5,3064.8z"/>
              <path class="st0" d="M164.4,3065.3c-0.1-0.1-0.3-11.2-0.3-24.6v-24.3h4.4h4.4l0.1,15.8l0.2,15.7l11-15.7l11-15.7l4.9-0.1h4.8v24.3
              c0,13.4-0.1,24.5-0.3,24.6c-0.1,0.1-2.1,0.1-4.4,0.1l-4.1-0.3l-0.1-17l-0.2-17.1l-12.1,17.3l-12,17.3h-3.5
              C166.4,3065.6,164.7,3065.4,164.4,3065.3z"/>
              </g>
              </svg>
     `;
    }

    static get nowTv() {
        return html`
              <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 30 30.7" style="enable-background:new 0 0 30 30.7;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(1.00000,100.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M97.6,888.8C84,884,75.1,872.9,73.6,859c-1.5-14.5,8.8-30.3,22.9-35.1c7-2.4,19.6-1.5,25.9,1.8
              c6.5,3.3,12.7,9.7,15.7,16c2.1,4.5,2.5,6.6,2.5,14.3c0,7.8-0.4,9.8-2.6,14.5C131.2,885.4,112.2,893.9,97.6,888.8z"/>
              <path class="st0" d="M58.1,888.2c-4.9-1.5-6.6-4.8-9.1-16.3l-2.2-10.5L38.6,874c-4.5,6.9-9.1,13-10.1,13.6
              c-4.9,2.7-13.4,0.1-14.8-4.5c-1.2-3.8-10.1-48.4-10.1-50.6c0-1.3,1.3-3.6,3.2-5.5c4.3-4.3,9.7-4.6,13.9-0.6c2.5,2.2,3.2,4,5.1,12.8
              c1.1,5.5,2.4,10.4,2.7,10.8c0.4,0.3,3.5-4.1,7.1-9.7c9-14.1,11.3-16.5,16.3-16.5c4.8,0,8.4,2.6,9.8,7c1.8,5.4,9.7,44.9,9.7,48.4
              C71.4,885.7,64.6,890.4,58.1,888.2z"/>
              <path class="st0" d="M246,888.9c-0.9-0.2-1.9-1.3-2.3-2.4c-0.9-2.8,1.8-4.6,7-4.6h4l0.3-12.6l0.3-12.7h2.9h2.9l0.3,12.7l0.3,12.7
              l4.3-0.3l4.4-0.3l5-12.4c4.4-11.2,5.2-12.4,7.4-12.7c2.4-0.3,2.8,0.4,8.5,14.5c3.2,8.2,5.6,15.6,5.4,16.4c-0.4,1-1.4,1.3-3.2,1.1
              c-2.4-0.3-3.1-1.2-6.4-9.7c-2.1-5.1-4.1-9-4.5-8.6c-0.3,0.5-2,4.4-3.6,8.9c-1.7,4.5-3.8,8.7-4.7,9.4
              C272.7,889.5,250,889.9,246,888.9z"/>
              <path class="st0" d="M148.5,886.3c-1.3-1.2-2.8-3.5-3.2-5.1c-0.9-3.2,4.8-44.8,6.9-50.7c1.7-4.6,5.1-6.9,10.2-6.9
              c4.8,0,7.3,2.5,16.5,16.7c4.6,7.1,8.5,12.7,8.7,12.5c0.2-0.1,2.3-5.8,4.6-12.6c5-14.3,6.9-16.6,13.4-16.6c3,0,4.9,0.6,6.6,2.2
              c1.3,1.1,7.6,12.6,14.1,25.5c13.5,26.9,14.1,29.6,8.6,34.5c-3.6,3.2-9.7,3.8-13.4,1.2c-1.1-0.8-4.8-6.7-8-13.1l-5.7-11.6l-3.6,10.2
              c-4.9,13.9-6.5,15.9-13.2,16c-2.3,0-5-0.4-5.9-1c-1-0.5-5.1-6.1-9.3-12.5l-7.5-11.6l-1.1,7.8c-1.5,11-1.9,12.3-4.8,14.9
              c-1.9,1.7-3.5,2.3-7,2.3C152,888.6,150.4,888,148.5,886.3z"/>
              </g>
              </svg>
     `;
    }

    static get tvoptic() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,161.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M1408,1423l-188-188l-103,103c-108,108-136,122-170,84s-22-62,85-169l103-103H866c-303,0-316-3-367-73l-29-40
              V630c0-407,0-407,23-441c12-18,38-44,56-56l34-23h637h637l34,23c18,12,44,38,56,56c23,34,23,34,23,441v407l-29,40
              c-51,70-64,73-367,73h-268l192,193c106,106,192,200,192,208c0,30-30,59-63,59C1599,1610,1573,1588,1408,1423z M1417,1006
              c61-19,106-66,125-128c8-29,13-112,13-248c0-235-11-287-70-338c-56-49-110-57-410-57c-301,0-354,7-411,57s-69,110-69,338
              c1,384,27,403,540,395C1308,1022,1378,1018,1417,1006z M1809,845c16-8,31-22,35-30c33-86-56-160-127-105c-48,38-41,110,13,137
              C1762,863,1775,863,1809,845z M1809,615c75-38,43-155-42-155s-113,119-37,157C1762,633,1775,633,1809,615z"/>
              <path class="st0" d="M2780,880V770h-110h-110v-75v-75h110h110V510V400h80h80v110v110h110h110v75v75h-110h-110v110v110h-80h-80V880z
              "/>
              <path class="st0" d="M3896,349.1l-45.7-46.6l51.9-52.8c29-29,56.3-52.8,61.6-52.8c5.3,0,28.1,19.3,51,42.2l42.2,43.1l-57.2,57.2
              l-57.2,57.2L3896,349.1z"/>
              <path class="st0" d="M4628.5,1327.9l-64.2-65.1l-32.5,13.2c-43.1,18.5-124.9,17.6-153.9-2.6c-73.9-47.5-64.2-163.6,25.5-307.8
              c109-174.1,319.2-328.9,427.4-315.7c36.1,5.3,87.1,40.5,107.3,73.9c18.5,31.7,19.3,91.5,1.8,141.6c-15,43.1-22,30.8,68.6,125.8
              c35.2,37.8,41.3,49.2,41.3,80c0,29.9-6.2,41.3-36.9,73l-36.9,37.8l22,23.7c36.1,38.7,51.9,66.8,51.9,88.8
              c0,51-62.4,106.4-107.3,95.9c-11.4-3.5-39.6-21.1-61.6-40.5l-39.6-35.2l-38.7,39.6c-32.5,33.4-43.1,38.7-73.9,38.7
              C4696.2,1393,4687.4,1387.7,4628.5,1327.9z M4781.5,1305.9c23.7-26.4,24.6-26.4,9.7-57.2c-20.2-44-17.6-61.6,15.8-96.7
              c23.7-25.5,36.1-31.7,62.4-31.7c19.3,0,40.5,6.2,50.1,15c15,14.1,17.6,13.2,46.6-15c16.7-16.7,30.8-37.8,30.8-47.5
              c0-9.7-15-32.5-32.5-51l-32.5-33.4l-143.3,142.5l-143.3,142.5l28.1,29C4710.3,1340.2,4746.4,1341.1,4781.5,1305.9z M4986.4,1320.9
              c20.2-20.2,10.6-39.6-45.7-93.2c-56.3-54.5-69.5-60.7-91.5-46.6c-26.4,16.7-16.7,40.5,36.1,95.9
              C4939,1331.4,4964.5,1342.9,4986.4,1320.9z M4675.1,1172.3l61.6-61.6l-49.2-49.2l-49.2-49.2l-64.2,63.3l-64.2,63.3l47.5,47.5
              c26.4,26.4,50.1,48.4,52.8,48.4C4612.7,1234.7,4641.7,1206.6,4675.1,1172.3z M4844.9,902.3l-45.7-45.7l-61.6,61.6l-61.6,61.6
              l46.6,46.6l46.6,47.5l60.7-62.4l60.7-62.4L4844.9,902.3z"/>
              <path class="st0" d="M4122,921.6c-92.3-133.7-163.6-246.2-172.4-271.7c-41.3-119.6,33.4-276.1,164.5-343
              c44.8-22.9,61.6-26.4,122.2-26.4h71.2l80,52.8c232.2,152.1,397.5,264.7,401.9,275.3c2.6,6.2,1.8,9.7-2.6,6.2
              c-15-8.8-118.7,35.2-182,77.4c-34.3,22.9-92.3,72.1-128.4,109.9c-100.3,104.7-144.2,175.9-178.5,286.7l-18.5,60.7L4122,921.6z"/>
              </g>
              </svg>
     `;
    }

    static get tvheadphone() {
        return html`    
              <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,151.000000) scale(0.090000,-0.090000)">
              <path class="st0" d="M1408,1423l-188-188l-103,103c-108,108-136,122-170,84s-22-62,85-169l103-103H866c-303,0-316-3-367-73l-29-40
              V630c0-407,0-407,23-441c12-18,38-44,56-56l34-23h637h637l34,23c18,12,44,38,56,56c23,34,23,34,23,441v407l-29,40
              c-51,70-64,73-367,73h-268l192,193c106,106,192,200,192,208c0,30-30,59-63,59C1599,1610,1573,1588,1408,1423z M1417,1006
              c61-19,106-66,125-128c8-29,13-112,13-248c0-235-11-287-70-338c-56-49-110-57-410-57c-301,0-354,7-411,57s-69,110-69,338
              c1,384,27,403,540,395C1308,1022,1378,1018,1417,1006z M1809,845c16-8,31-22,35-30c33-86-56-160-127-105c-48,38-41,110,13,137
              C1762,863,1775,863,1809,845z M1809,615c75-38,43-155-42-155s-113,119-37,157C1762,633,1775,633,1809,615z"/>
              <path class="st0" d="M2780,880V770h-110h-110v-75v-75h110h110V510V400h80h80v110v110h110h110v75v75h-110h-110v110v110h-80h-80V880z
              "/>
              <path class="st0" d="M4450,1418.9c-338.9,0-610-271.1-610-610V334.4c0-112.3,91-203.3,203.3-203.3h203.3v542.2h-271.1v135.6
              c0,262,212.4,474.4,474.4,474.4s474.4-212.4,474.4-474.4V673.3h-271.1V131.1h203.3c112.3,0,203.3,91,203.3,203.3v474.4
              C5060,1147.8,4786.9,1418.9,4450,1418.9z"/>
              </g>
              </svg>`;
    }

    static get optic() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M2281,410.7l-45.7-46.6l51.9-52.8c29-29,56.3-52.8,61.6-52.8s28.1,19.3,51,42.2l42.2,43.1l-57.2,57.2
              l-57.2,57.2L2281,410.7z"/>
              <path class="st0" d="M3013.5,1389.5l-64.2-65.1l-32.5,13.2c-43.1,18.5-124.9,17.6-153.9-2.6c-73.9-47.5-64.2-163.6,25.5-307.8
              c109-174.1,319.2-328.9,427.4-315.7c36.1,5.3,87.1,40.5,107.3,73.9c18.5,31.7,19.3,91.5,1.8,141.6c-14.9,43.1-22,30.8,68.6,125.8
              c35.2,37.8,41.3,49.2,41.3,80c0,29.9-6.2,41.3-36.9,73l-36.9,37.8l22,23.7c36.1,38.7,51.9,66.8,51.9,88.8
              c0,51-62.4,106.4-107.3,95.9c-11.4-3.5-39.6-21.1-61.6-40.5l-39.6-35.2l-38.7,39.6c-32.5,33.4-43.1,38.7-73.9,38.7
              C3081.2,1454.6,3072.4,1449.3,3013.5,1389.5z M3166.5,1367.5c23.7-26.4,24.6-26.4,9.7-57.2c-20.2-44-17.6-61.6,15.8-96.7
              c23.7-25.5,36.1-31.7,62.4-31.7c19.3,0,40.5,6.2,50.1,15c14.9,14.1,17.6,13.2,46.6-15c16.7-16.7,30.8-37.8,30.8-47.5
              c0-9.7-14.9-32.5-32.5-51l-32.5-33.4l-143.3,142.5L3030.2,1335l28.1,29C3095.3,1401.8,3131.4,1402.7,3166.5,1367.5z M3371.4,1382.4
              c20.2-20.2,10.6-39.6-45.7-93.2c-56.3-54.5-69.5-60.7-91.5-46.6c-26.4,16.7-16.7,40.5,36.1,95.9
              C3324,1393,3349.5,1404.4,3371.4,1382.4z M3060.1,1233.8l61.6-61.6l-49.2-49.2l-49.2-49.2l-64.2,63.3l-64.2,63.3l47.5,47.5
              c26.4,26.4,50.1,48.4,52.8,48.4S3026.7,1268.1,3060.1,1233.8z M3229.9,963.8l-45.7-45.7l-61.6,61.6l-61.6,61.6l46.6,46.6l46.6,47.5
              l60.7-62.4l60.7-62.4L3229.9,963.8z"/>
              <path class="st0" d="M2507,983.2c-92.3-133.7-163.6-246.2-172.4-271.7c-41.3-119.6,33.4-276.1,164.4-343
              c44.9-22.9,61.6-26.4,122.2-26.4h71.2l80,52.8c232.2,152.1,397.5,264.7,401.9,275.3c2.6,6.2,1.8,9.7-2.6,6.2
              c-14.9-8.8-118.7,35.2-182,77.4c-34.3,22.9-92.3,72.1-128.4,109.9c-100.3,104.7-144.2,175.9-178.5,286.7l-18.5,60.7L2507,983.2z"/>
              </g>
              </svg>
         `;
    }

    static get arc() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M1826.2,1247c-60-32-71-67-71-229V875h-280h-280V640V405h280h280V269c0-154,10-190,65-224c32-20,48-20,885-20
              h853l34,26c36,27,63,72,56,92c-4,9,37,12,184,12h189l42,85l42,85v323v322l-51,83l-51,82h-174c-158,0-175,2-180,18
              c-12,40-32,68-63,89l-34,23h-846C1905.2,1265,1858.2,1264,1826.2,1247z M3495.2,645V175h-790h-790v470v470h790h790V645z
              M3934.2,956c11-20,16-581,5-618c-6-22-10-23-145-23h-139v330v330h135C3911.2,975,3925.2,973,3934.2,956z M1755.2,650v-75h-200
              h-200v75v75h200h200V650z"/>
              <path class="st0" d="M2412.2,769c-4-4-7-22-7-41v-33h135h135v-55v-55h-85h-85v45v45h-50h-50v-78v-77l163,2c89,2,165,3,169,3
              c19,0,38,64,38,124c0,54-4,70-24,93l-24,28l-154,3C2489.2,775,2416.2,773,2412.2,769z"/>
              <path class="st0" d="M2810.2,762c-3-7-4-65-3-128l3-114l48-3l47-3v95v96h40h40v-95v-95h50h50v95v95h40h39l3-92l3-93l53-3l52-3v98
              c0,88-2,101-24,128l-24,30l-206,3C2854.2,776,2814.2,774,2810.2,762z"/>
              <path class="st0" d="M1995.2,640V515h55h55v45v45h83h82v-42v-43h50h50v120v120l-52,3l-53,3v-50v-51h-80h-80v50v50h-55h-55V640z"/>
              <path class="st0" d="M3305.2,640V515h50h50v125v125h-50h-50V640z"/>
              </g>
              </svg>`;
    }

    static get lineout() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M2523.2,1488.7c-10.2-10.2-13.6-31.4-13.6-93.4v-79.8h-50.9h-50.9V1273v-42.5h140.1h140.1v42.5v42.5H2637H2586
              v79.8c0,81.5-9.3,107-38.2,107C2541.9,1502.3,2530,1496.3,2523.2,1488.7z"/>
              <path class="st0" d="M3041.1,1488.7c-10.2-10.2-13.6-31.4-13.6-93.4v-79.8h-50.9h-50.9V1273v-42.5h140.1h140.1v42.5v42.5h-50.9
              H3104v79.8c0,81.5-9.3,107-38.2,107C3059.8,1502.3,3047.9,1496.3,3041.1,1488.7z"/>
              <path class="st0" d="M2356.8,1077.7c0-73,3.4-118.9,8.5-119.7c5.1-0.8,13.6-1.7,19.5-2.5c6.8-0.8,11-24.6,12.7-81.5
              c0.8-44.2,5.9-89.2,11-98.5c11-21.2,41.6-37.4,71.3-37.4c21.2,0,21.2-0.8,21.2-78.1c0.8-165.6,55.2-209.7,321.8-257.3
              c123.1-22.1,180.8-43.3,191-67.9c2.5-7.6,5.1-46.7,5.1-85.8v-71.3h50.9h50.9v280.2c0,272.5,0.8,280.2,17,280.2
              c25.5,0,56.9,17,67.1,37.4c5.1,9.3,10.2,54.3,11,98.5c2.5,76.4,3.4,80.7,22.1,83.2c18.7,2.5,18.7,5.1,18.7,121.4v118h-191h-191
              v-118c0-116.3,0-118.9,19.5-121.4c17.8-2.5,18.7-6.8,20.4-79c1.7-41.6,4.2-84.9,6.8-95.1c5.1-22.1,44.2-45,76.4-45h21.2V598
              c0-77.3-1.7-140.1-3.4-140.1c-1.7,0-17.8,5.1-35.7,11.9c-18.7,5.9-59.4,16.1-92.5,21.2c-208,36.5-259,53.5-280.2,95.1
              c-7.6,14.4-12.7,48.4-12.7,88.3c0,62.8,0,63.7,21.2,63.7c32.3,0,71.3,22.9,76.4,45c2.5,10.2,5.1,53.5,6.8,95.1
              c1.7,72.2,2.5,76.4,21.2,79c18.7,2.5,18.7,5.1,18.7,121.4v118h-191h-191V1077.7z"/>
              </g>
              </svg>
     `;
    }

    static get iconMapping() {
        return {
            "disney": this.disneyIcon,
            "dazn": this.daznIcon,
            "nowtv": this.nowTv,
            "magiogo": this.magiogoIcon
        };
    }

    static get properties() {
        return {
            hass: {},
            config: {},
            _show_inputs: {},
            _show_sound_output: {},
            _show_text: {},
            _show_keypad: {}
        };
    }

    constructor() {
        super();
        this._show_inputs = false;
        this._show_sound_output = false;
        this._show_text = false;
        this._show_keypad = false;
    }

    render() {
        const stateObj = this.hass.states[this.config.entity];
        const colorButtons = this.config.color_buttons === "enable";

        const borderWidth = this.config.dimensions && this.config.dimensions.border_width ? this.config.dimensions.border_width : "1px";
        const scale = this.config.dimensions && this.config.dimensions.scale ? this.config.dimensions.scale : 1;
        const remoteWidth = Math.round(scale * 260) + "px";

        const backgroundColor = this.config.colors && this.config.colors.background ? this.config.colors.background : "var( --ha-card-background, var(--card-background-color, white) )";
        const borderColor = this.config.colors && this.config.colors.border ? this.config.colors.border: "var(--primary-text-color)";
        const buttonColor = this.config.colors && this.config.colors.buttons ? this.config.colors.buttons : "var(--secondary-background-color)";
        const textColor = this.config.colors && this.config.colors.texts ? this.config.colors.texts : "var(--primary-text-color)";
        const mac = this.config.mac;

        return html`
            <div class="card">
            <div class="page" style="--remote-button-color: ${buttonColor}; --remote-text-color: ${textColor}; --remote-color: ${backgroundColor}; --remotewidth: ${remoteWidth};  --main-border-color: ${borderColor}; --main-border-width: ${borderWidth}">
                  ${this.config.name
                  ? html` <span class="title"> ${this.config.name} </span> `
                  : ""}
                  <div class="grid-container-power"  style="--remotewidth: ${remoteWidth}">
                      <button class="btn-flat flat-high ripple" @click=${() => this._channelList()}><ha-icon icon="mdi:format-list-numbered"/></button>
                      ${stateObj.state === 'off' ? html`
                      <button class="btn ripple" @click=${() => this._media_player_turn_on(mac)}><ha-icon icon="mdi:power" style="color: ${textColor};"/></button>
                      ` : html`
                      <button class="btn ripple" @click=${() => this._media_player_service("turn_off")}><ha-icon icon="mdi:power" style="color: red;"/></button>
                      `}
                      <button class="btn-flat flat-high ripple" @click=${() => this._show_keypad = !this._show_keypad}>123</button>
                  </div> 
                 ${this._show_inputs ? html`
<!-- ################################# SOURCES ################################# -->
                  <div class="grid-container-input">
                  <div class="shape-input">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130"><path d="m 187 43 a 30 30 0 0 0 60 0 a 30 30 0 0 0 -60 0 M 148 12 a 30 30 0 0 1 30 30 a 40 40 0 0 0 40 40 a 30 30 0 0 1 30 30 v 18 h -236 v -88 a 30 30 0 0 1 30 -30" fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                   </div>   
                    <button class="ripple bnt-input-back" @click=${() => this._show_inputs = false}><ha-icon icon="mdi:undo-variant"/></button>
                    <p class="source_text"><b>SOURCE</b></p>
                  <div class="grid-item-input">
                    ${stateObj.attributes.source_list.map(source => html`
                    <button class="${stateObj.attributes.source === source ? 'btn-input-on' : 'btn-input  ripple overlay'}" @click=${() => {
                        this._select_source(source);
                        this._show_inputs = false;
                    }}>${source}</button>
                    `)}
                  </div>
<!-- ################################# SOURCES END ################################# -->
                 ` : html`
                 ${this._show_sound_output ? html`
<!-- ################################# SOUND ################################# -->
                  <div class="grid-container-sound">
                    <div class="shape-sound">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260"><path d="m 13 43 a 30 30 0 0 0 60 0 a 30 30 0 0 0 -60 0 M 130 12 h 88 a 30 30 0 0 1 30 30 v 188 a 30 30 0 0 1 -30 30 h -176 a 30 30 0 0 1 -30 -30 v -117 a 30 30 0 0 1 30 -30 a 40 40 0 0 0 41 -41 a 30 30 0 0 1 30 -30 z " fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                       <button class="bnt-sound-back ripple"  @click=${() => this._show_sound_output = false}><ha-icon icon="mdi:undo-variant"/></button>
                    ${this._show_text ? html`
                        <button class="btn_soundoutput ripple" @click=${() => this._show_text = false}>SOUND</button>
                          <button class="${stateObj.attributes.sound_output === "tv_speaker" ? 'btn_sound_on tv bnt_sound_text_width' : 'btn_sound_off tv bnt_sound_text_width ripple overlay'}"style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("tv_speaker")}>TV Speaker</button>
                          <button class="${stateObj.attributes.sound_output === "tv_external_speaker" ? 'btn_sound_on tv-opt bnt_sound_text_width' : 'btn_sound_off tv-opt bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("tv_external_speaker")}>TV + Optic</button>
                          <button class="${stateObj.attributes.sound_output === "tv_speaker_headphone" ? 'btn_sound_on tv-phone bnt_sound_text_width' : 'btn_sound_off tv-phone bnt_sound_text_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("tv_speaker_headphone")}>TV + H-Phone</button>
                          <button class="${stateObj.attributes.sound_output === "external_optical" ? 'btn_sound_on opt bnt_sound_text_width' : 'btn_sound_off opt bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("external_optical")}>Optical</button>
                          <button class="${stateObj.attributes.sound_output === "external_arc" ? 'btn_sound_on hdmi bnt_sound_text_width' : 'btn_sound_off hdmi bnt_sound_text_width ripple overlay'}"style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("external_arc")}>HDMI</button>
                          <button class="${stateObj.attributes.sound_output === "lineout" ? 'btn_sound_on line bnt_sound_text_width' : 'btn_sound_off line bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("lineout")}>Lineout</button>
                          <button class="${stateObj.attributes.sound_output === "headphone" ? 'btn_sound_on phone bnt_sound_text_width' : 'btn_sound_off phone bnt_sound_text_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("headphone")}>HeadPhone</button>
                          <button class="${stateObj.attributes.sound_output === "bt_soundbar" ? 'btn_sound_on bluetooth bnt_sound_text_width' : 'btn_sound_off bluetooth bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("bt_soundbar")}>Bluetooth</button>
                      </div>
                  ` : html`
                      <button class="sound_icon_text  ripple" @click=${() => this._show_text = true}><ha-icon style="height: calc(var(--remotewidth) / 6); width: calc(var(--remotewidth) / 6);" icon="mdi:speaker"></button>
                        <button class="${stateObj.attributes.sound_output === "tv_speaker" ? 'btn_sound_on tv bnt_sound_icon_width' : 'btn_sound_off tv bnt_sound_icon_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("tv_speaker")}><ha-icon class="icon_source" icon="mdi:television-classic"></button>
                        <button class="${stateObj.attributes.sound_output === "tv_external_speaker" ? 'btn_sound_on tv-opt bnt_sound_icon_width' : 'btn_sound_off tv-opt bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("tv_external_speaker")}>${LgRemoteControl.tvoptic}</button>
                        <button class="${stateObj.attributes.sound_output === "tv_speaker_headphone" ? 'btn_sound_on tv-phone bnt_sound_icon_width' : 'btn_sound_off tv-phone bnt_sound_icon_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("tv_speaker_headphone")}>${LgRemoteControl.tvheadphone}</button>
                        <button class="${stateObj.attributes.sound_output === "external_optical" ? 'btn_sound_on opt bnt_sound_icon_width' : 'btn_sound_off opt bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("external_optical")}>${LgRemoteControl.optic}</button>
                        <button class="${stateObj.attributes.sound_output === "external_arc" ? 'btn_sound_on hdmi bnt_sound_icon_width' : 'btn_sound_off hdmi bnt_sound_icon_width ripple overlay'}"style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("external_arc")}>${LgRemoteControl.arc}</button>
                        <button class="${stateObj.attributes.sound_output === "lineout" ? 'btn_sound_on line bnt_sound_icon_width' : 'btn_sound_off line bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("lineout")}>${LgRemoteControl.lineout}</button>
                        <button class="${stateObj.attributes.sound_output === "headphone" ? 'btn_sound_on phone bnt_sound_icon_width' : 'btn_sound_off phone bnt_sound_icon_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("headphone")}><ha-icon class="icon_source" icon="mdi:headphones"></button>
                        <button class="${stateObj.attributes.sound_output === "bt_soundbar" ? 'btn_sound_on bluetooth bnt_sound_icon_width' : 'btn_sound_off bluetooth bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("bt_soundbar")}><ha-icon class="icon_source" icon="mdi:bluetooth"></button>
                    </div>
                    `}
<!-- ################################# SOUND END ################################# -->
                    ` : html`

                    ${this._show_keypad ? html`
<!-- ################################ keypad ################################## -->
                    <div class="grid-container-keypad">
                        <button class="btn-keypad ripple" @click=${() => this._button("1")}>1</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("2")}>2</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("3")}>3</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("4")}>4</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("5")}>5</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("6")}>6</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("7")}>7</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("8")}>8</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("9")}>9</button>
                        <button class="btn-keypad"></button>
                        <button class="btn-keypad ripple" @click=${() => this._button("0")}>0</button>
                        <button class="btn-keypad"></button>
                  </div>
  <!-- ################################# keypad end ############################## --> 
                 ` : html`
<!-- ################################# DIRECTION PAD ################################# -->
                  <div class="grid-container-cursor">
                  <div class="shape">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 79"><path d="m 30 15 a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15 a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15" fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div> 
                      <button class="btn ripple item_sound" @click=${() => this._show_sound_output = true}><ha-icon icon="mdi:speaker"/></button>
                      <button class="btn ripple item_up" style="background-color: transparent;" @click=${() => this._button("UP")}><ha-icon icon="mdi:chevron-up"/></button>
                      <button class="btn ripple item_input" @click=${() => this._show_inputs = true}><ha-icon icon="mdi:import"/></button>
                      <button class="btn ripple item_2_sx" style="background-color: transparent;" @click=${() => this._button("LEFT")}><ha-icon icon="mdi:chevron-left"/></button>
                      <button class="btn bnt_ok ripple item_2_c" style="border: solid 2px ${backgroundColor}"  @click=${() => this._button("ENTER")}>OK</button>
                      <button class="btn ripple item_right" style="background-color: transparent;" @click=${() => this._button("RIGHT")}><ha-icon icon="mdi:chevron-right"/></button>
                      <button class="btn ripple item_back" @click=${() => this._button("BACK")}><ha-icon icon="mdi:undo-variant"/></button>
                      <button class="btn ripple item_down" style="background-color: transparent;" @click=${() => this._button("DOWN")}><ha-icon icon="mdi:chevron-down"/></button>
                      <button class="btn ripple item_exit" @click=${() => this._button("EXIT")}>EXIT</button>
                    </div>
<!-- ################################# DIRECTION PAD END ################################# -->
                  `}
                
                  `}
<!-- ################################# SOURCE BUTTONS ################################# -->
                  ${this.config.sources ? html`
                      <div class="grid-container-source">
                      ${this.config.sources.map(source => {
                      return html`
                        <button class="btn_source ripple" @click=${() => this._select_source(source.name)}>
                          ${LgRemoteControl.getIcon(source.icon)}
                        </button>
                      `;
                      })}
                      </div>
                    ` : html`
                  <div class="grid-container-source">
                      <button class="btn_source ripple" @click=${() => this._select_source("Netflix")}><ha-icon style="heigth: 70%; width: 70%;" icon="mdi:netflix"/></button>
                      <button class="btn_source ripple" @click=${() => this._select_source("Amazon Prime Video")}><ha-icon style="heigth: 70%; width: 70%;" icon="mdi:amazon"/></button>
                      <button class="btn_source ripple" @click=${() => this._select_source("Disney+")}>${LgRemoteControl.disneyIcon}</button>
                      <button class="btn_source ripple" @click=${() => this._select_source("DAZN")}>${LgRemoteControl.daznIcon}</button>
                      <button class="btn_source ripple" @click=${() => this._select_source("Magio GO")}>${LgRemoteControl.magiogoIcon}</button>
                  </div>`}
<!-- ################################# SOURCE BUTTONS END ################################# -->

<!-- ################################# COLORED BUTTONS ################################# -->
                ${colorButtons ? html`
                  <div class="grid-container-color_btn">
                      <button class="btn-color ripple" style="background-color: red; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("RED")}></button>
                      <button class="btn-color ripple" style="background-color: green; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("GREEN")}></button>
                      <button class="btn-color ripple" style="background-color: yellow; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("YELLOW")}></button>
                      <button class="btn-color ripple" style="background-color: blue; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("BLUE")}></button>
                  </div>
                  ` : html`
                  `}
<!-- ################################# COLORED BUTTONS END ################################# -->

                  <div class="grid-container-volume-channel-control" >
                      <button class="btn ripple"  style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;" @click=${() => this._media_player_service("volume_up")}><ha-icon icon="mdi:plus"/></button>
                      <button class="btn-flat flat-high ripple" style="margin-top: 0px; height: 50%;" @click=${() => this._button("HOME")}><ha-icon icon="mdi:home"></button>
                      <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;" @click=${() => this._button("CHANNELUP")}><ha-icon icon="mdi:chevron-up"/></button>
                      <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;"><ha-icon icon="${stateObj.attributes.is_volume_muted === true ? 'mdi:volume-off' : 'mdi:volume-high'}"/></button>
                      <button class="btn ripple" Style="color:${stateObj.attributes.is_volume_muted === true ? 'red' : ''}; height: 100%;"" @click=${() => this._button("MUTE")}><span class="${stateObj.attributes.is_volume_muted === true ? 'blink' : ''}"><ha-icon icon="mdi:volume-mute"></span></button>
                      <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;"><ha-icon icon="mdi:parking"/></button>
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;" @click=${() => this._media_player_service("volume_down")}><ha-icon icon="mdi:minus"/></button>
                      <button class="btn-flat flat-high ripple" style="margin-bottom: 0px; height: 50%;" @click=${() => this._button("INFO")}><ha-icon icon="mdi:information-variant"/></button>
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"  @click=${() => this._button("CHANNELDOWN")}><ha-icon icon="mdi:chevron-down"/></button>
                  </div>

<!-- ################################# MEDIA CONTROL ################################# -->
                 <div class="grid-container-media-control" >
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/play")}><ha-icon icon="mdi:play"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/pause")}><ha-icon icon="mdi:pause"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/stop")}><ha-icon icon="mdi:stop"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/rewind")}><ha-icon icon="mdi:skip-backward"/></button>
                      <button class="btn-flat flat-low ripple" style="color: red;" @click=${() => this._command("media.controls/Record")}><ha-icon icon="mdi:record"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/fastForward")}><ha-icon icon="mdi:skip-forward"/></button>
                  </div> 
<!-- ################################# MEDIA CONTROL END ################################# -->
                  </div>
                `}
                </div>
              </div>
            `;
    }

    _channelList() {
        const popupEvent = new Event('ll-custom', {bubbles: true, cancelable: false, composed: true});
        popupEvent.detail = {
            "browser_mod": {
                "service": "browser_mod.popup",
                "data": {
                    "content": {
                        "type": "custom:card-channel-pad",
                        "entity": this.config.entity,
                        "channels": this.config.channels
                    },
                    "title": " ",
                    "size": "wide",
                    "style": "--popup-border-radius: 15px;"
                }
            }
        };
        this.ownerDocument.querySelector("home-assistant").dispatchEvent(popupEvent);
    }

    _button(button) {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: button
        });
    }

    _command(command) {
        this.hass.callService("webostv", "command", {
            entity_id: this.config.entity,
            command: command
        });
    }
    _media_player_turn_on(mac) {
        if (this.config.mac) {
            this.hass.callService("wake_on_lan", "send_magic_packet", {
                mac: mac
            });
        } else {
            this._media_player_service("turn_on");   
        }
    }

    _media_player_service(service) {
        this.hass.callService("media_player", service, {
            entity_id: this.config.entity,
        });
    }

    _select_source(source) {
        this.hass.callService("media_player", "select_source", {
            entity_id: this.config.entity,
            source: source
        });
    }

    _select_sound_output(sound_output) {
        this.hass.callService("webostv", "select_sound_output", {
            entity_id: this.config.entity,
            sound_output: sound_output
        });
        this._show_sound_output = false;
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error("Invalid configuration");
        }
        this.config = config;
    }

    getCardSize() {
        return 15;
    }

    static getIcon(iconName) {
        return Object.keys(LgRemoteControl.iconMapping).includes(iconName)
            ? LgRemoteControl.iconMapping[iconName]
            : html`<ha-icon style="height: 70%; width: 70%;" icon="${iconName}"/>`;
    }

    static get styles() {
        return css`

        button:focus {
          outline:0;
      }
      /*Create ripple effec*/
       .ripple {
           position: relative;
           overflow: hidden;
           transform: translate3d(0, 0, 0);
      }
       .ripple:after {
           content: "";
           display: block;
           position: absolute;
           border-radius: 50%;
           width: 100%;
           height: 100%;
           top: 0;
           left: 0;
           pointer-events: none;
           background-image: radial-gradient(circle, #7a7f87 2%, transparent 10.01%);
           background-repeat: no-repeat;
           background-position: 50%;
           transform: scale(10, 10);
           opacity: 0;
           transition: transform .5s, opacity 1s;
      }
       .ripple:active:after {
           transform: scale(0, 0);
           opacity: .3;
           transition: 0s;
      }
       .blink {
           animation: blinker 1.5s linear infinite;
           color: red;
      }
       @keyframes blinker {
           50% {
               opacity: 0;
          }
      }
       .card {
           display: flex;
           justify-content: center;
           width: 100%;
           height: 100%;
      }
       .page {
           background-color: var(--remote-color);
           height: 100%;
           display: inline-block;
           flex-direction: row;
           border: var(--main-border-width) solid var(--main-border-color);
           border-radius: calc(var(--remotewidth) / 7.5);
           padding: calc(var(--remotewidth) / 37.5) calc(var(--remotewidth) / 15.2) calc(var(--remotewidth) / 11) calc(var(--remotewidth) / 15.2);
      }
       .grid-container-power {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           grid-template-rows: 1fr;
           background-color: transparent;
           overflow: hidden;
           width: var(--remotewidth);
           height: calc(var(--remotewidth) / 3);
      }
       .grid-container-cursor {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           grid-template-rows: 1fr 1fr 1fr;
           overflow: hidden;
           height: var(--remotewidth);
           width: var(--remotewidth);
           grid-template-areas: "sound up input" "left ok right" "back down exit" 
      }
       .grid-container-keypad {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           grid-template-rows: 1fr 1fr 1fr 1fr;
           background-color: transparent;
           overflow: hidden;
           background-color: var(--remote-button-color);
           border-radius: 35px;
           height: var(--remotewidth);
           width: calc(var(--remotewidth) - 10%);
           margin: auto;
      }
       .grid-container-input {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           grid-template-rows: calc(var(--remotewidth) / 2) calc(var(--remotewidth) / 0.5115);
           background-color: transparent;
           overflow: hidden;
           width: var(--remotewidth);
      }
       .grid-container-sound {
           display: grid;
           grid-template-columns: 1fr 1fr;
           grid-template-rows: 28% 6% 16% 16% 16% 16% 6%;
           background-color: transparent;
           overflow: hidden;
           height: var(--remotewidth);
           width: var(--remotewidth);
           grid-template-areas: "bnt title" ". ." "tv tv-opt" "tv-phone opt" "hdmi line" "phone bluetooth" 
      }
       .grid-container-source {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr 1fr;
           grid-template-rows: auto;
           background-color: transparent;
           width: calc(var(--remotewidth) / 1.03);
           overflow: hidden;
           margin: auto;
      }

        .grid-container-color_btn{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            background-color: transparent;
            width: calc(var(--remotewidth) / 1.03);
            height: calc(var(--remotewidth) / 10);
            overflow: hidden;
            margin: auto;
        }

        .grid-container-volume-channel-control {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           grid-template-rows: 1fr 1fr 1fr;
           background-color: transparent;
           width: var(--remotewidth);
           height: calc(var(--remotewidth) / 1.4);
           overflow: hidden;
           margin-top: calc(var(--remotewidth) / 12);
          ;
      }
       .grid-container-media-control {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           grid-template-rows: 1fr 1fr;
           background-color: transparent;
           width: var(--remotewidth);
           height: calc(var(--remotewidth) / 2.85);
           overflow: hidden;
           margin-top: calc(var(--remotewidth) / 12);
          ;
      }
      /* .grid-item {
           background-color: transparent;
           margin: auto;
           overflow: hidden;
      }
       */
       .grid-item-input{
           grid-column-start: 1;
           grid-column-end: 4;
           grid-row-start: 1;
           grid-row-end: 3;
           display: grid;
           grid-template-columns: auto;
           background-color: var(--remote-button-color);
           margin:auto;
           margin-top: calc(var(--remotewidth) / 2.6);
           overflow: scroll;
           height: calc(var(--remotewidth) * 2.01);
           width: calc(var(--remotewidth) - 9%);
           border-radius: calc(var(--remotewidth) / 12);
      }
       .grid-item-input::-webkit-scrollbar {
           display: none;
      }
       .grid-item-input::-webkit-scrollbar {
           -ms-overflow-style: none;
      }
       .shape {
           grid-column-start: 1;
           grid-column-end: 4;
           grid-row-start: 1;
           grid-row-end: 4;
           padding: 5px;
      }
       .shape-input {
           grid-column-start: 1;
           grid-column-end: 4;
           grid-row-start: 1;
           grid-row-end: 3;
      }
       .shape-sound {
           grid-column-start: 1;
           grid-column-end: 5;
           grid-row-start: 1;
           grid-row-end: 6;
      }
       .source_text {
           grid-column-start: 1;
           grid-column-end: 3;
           grid-row-start: 1;
           grid-row-end: 2;
           text-align: center;
           margin-top: calc(var(--remotewidth) / 6);
           font-size: calc(var(--remotewidth) / 10);
           opacity: 0.3;
      }
       .icon_source {
           height: 65%;
           width: 65%;
      }
       .sound_icon_text {
           background-color: transparent;
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 18.75);
           width: 70%;
           height: 70%;
           border-width: 0px;
           margin:auto auto 0px 0px;
           overflow: hidden;
           grid-area: title;
           cursor: pointer;
      }
       .btn_soundoutput {
           font-size: calc(var(--remotewidth) / 12.5);
           width: 70%;
           height: 70%;
           border-width: 0px;
           margin:auto auto 0px 0px;
           display: block;
           cursor: pointer;
           background-color: transparent;
           opacity: 0.4;
           color: var(--remote-text-color) font-weight: bold;
           grid-area: title;
      }
       .tv {
           grid-area: tv;
      }
       .tv-opt {
           grid-area: tv-opt;
      }
       .tv-phone {
           grid-area: tv-phone;
      }
       .opt {
           grid-area: opt;
      }
       .hdmi {
           grid-area: hdmi;
      }
       .phone {
           grid-area: phone;
      }
       .line {
           grid-area: line;
      }
       .bluetooth {
           grid-area: bluetooth;
      }
       .item_sound {
           grid-area: sound;
      }
       .item_up {
           grid-area: up;
      }
       .item_input {
           grid-area: input;
      }
       .item_2_sx{
           grid-area: left;
      }
       .item_2_c {
           grid-area: ok;
      }
       .item_right {
           grid-area: right;
      }
       .item_back {
           grid-area: back;
      }
       .item_down {
           grid-area: down;
      }
       .item_exit {
           grid-area: exit;
      }
       ha-icon {
           width: calc(var(--remotewidth) / 10.8);
           height: calc(var(--remotewidth) / 10.8); 
      }
       .btn {
           background-color: var(--remote-button-color);
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 18.75);
           width: 70%;
           height: 70%;
           border-width: 0px;
           border-radius: 50%;
           margin: auto;
           place-items: center;
           display: inline-block;
           cursor: pointer;
      }
       .bnt-input-back {
           grid-column-start: 3;
           grid-column-end: 4;
           grid-row-start: 1;
           grid-row-end: 2;
           background-color: transparent;
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 18.75);
           width: 70%;
           height: 50%;
           border-width: 0px;
           border-radius: 50%;
           margin-top: calc(var(--remotewidth) / 21);
           margin-left: calc(var(--remotewidth) / 21);
           place-items: center;
           display: inline-block;
           cursor: pointer;
      }
       .bnt-sound-back {
           margin-left: 0px;
           grid-area: bnt;
           background-color: transparent;
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 18.75);
           width: 45%;
           height: 83%;
           border-width: 0px;
           border-radius: 50%;
           margin-top: calc(var(--remotewidth) / 21);
           margin-left: calc(var(--remotewidth) / 18);
           place-items: center;
           display: inline-block;
           cursor: pointer;
      }
       .btn-keypad {
           background-color: transparent;
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 10);
           width: 100%;
           height: 100%;
           border-width: 0px;
      }
       .btn_source {
           background-color: var(--remote-button-color);
           color: var(--remote-text-color);
           width: calc(var(--remotewidth) / 5.9);
           height: calc(var(--remotewidth) / 8.125);
           border-width: 0px;
           border-radius: calc(var(--remotewidth) / 10);
           margin: calc(var(--remotewidth) / 18.57) auto calc(var(--remotewidth) / 20) auto;
           place-items: center;
           cursor: pointer;
      }
        .btn-color {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            width: 70%;
            height: 55%;
            border-width: 0px;
            border-radius: calc(var(--remotewidth) / 10);
            margin: auto;
            place-items: center;
            cursor: pointer;
        }   

       .icon_source {
           height: 100%;
           width: 100%;
      }
       .btn-input {
           background-color: var(--remote-button-color);
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 18.5);
           calc(var(--remotewidth) / 1.3);
           height: calc(var(--remotewidth) / 7.2226);
           border-width: 0px;
           border-radius: calc(var(--remotewidth) / 20);
           margin: calc(var(--remotewidth) / 47); auto;
           place-items: center;
           display: list-item;
           cursor: pointer;
           border: solid 2px var(--remote-color);
      }
       .btn-input-on {
           background-color: var(--primary-color);
           color: #ffffff;
           font-size: calc(var(--remotewidth) / 18.5);
           calc(var(--remotewidth) / 1.3);
           height: calc(var(--remotewidth) / 7.2226);
           border-width: 0px;
           border-radius: calc(var(--remotewidth) / 20);
           margin: calc(var(--remotewidth) / 47); auto;
           place-items: center;
           display: list-item;
           cursor: pointer;
      }
       .bnt_sound_icon_width {
           width: calc(var(--remotewidth) / 3);
      }
       .bnt_sound_text_width {
           width: calc(var(--remotewidth) / 2.6);
      }
       .btn_sound_on {
           font-size: calc(var(--remotewidth) / 25);
           height: calc(var(--remotewidth) / 9.3);
           border-width: 0px;
           border-radius: calc(var(--remotewidth) / 20);
           margin: auto;
           display: block;
           cursor: pointer;
           background-color: var(--primary-color);
           color: #ffffff;
      }
       .btn_sound_off {
           font-size: calc(var(--remotewidth) / 25);
           height: calc(var(--remotewidth) / 9.3);
           border-width: 0px;
           border-radius: calc(var(--remotewidth) / 20);
           margin: auto;
           display: block;
           cursor: pointer;
           background-color: var(--remote-button-color);
           color: var(--remote-text-color);
           border: solid 2px var(--remote-color);
      }
       .overlay {
           background-color: rgba(0,0,0,0.02) 
      }
       .flat-high {
           width: 70%;
           height: 37%;
      }
       .flat-low {
           width: 70%;
           height: 65%;
      }
       .btn-flat {
           background-color: var(--remote-button-color);
           //rgba(255, 0, 0, 1);
           color: var(--remote-text-color);
           font-size: calc(var(--remotewidth) / 18.75);
           border-width: 0px;
           border-radius: calc(var(--remotewidth) / 10);
           margin: auto;
           display :grid;
           place-items: center;
           display: inline-block;
           cursor: pointer;
      }
       .bnt_ok {
           width: 100%;
           height:100%;
           font-size: calc(var(--remotewidth) / 16.6);
           // border: solid 2px var(--backgroundcolor
      }

       .title {
          display: block;
          text-align: center;
          font-weight: bold
      }
  `;
    }

}

customElements.define('lg-remote-control', LgRemoteControl);
