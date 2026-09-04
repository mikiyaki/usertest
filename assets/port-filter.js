/* Port Panel — 總表 tab: NCC decision-tool style progressive filter that resolves
   a single port style, previewed with the REAL Figma component cropped from the
   VECTOR component-set export assets/port-set-ncc.svg (node 787:1580).
   Both Selected=No and Selected=Yes are cropped from that one vector sprite, so
   corner radius and the 2px #606060 selected border stay crisp (no rasterization).
   Crop tables were measured by getBoundingClientRect on each variant group by its
   exact variant name, deduped to the real-art group, so every combo maps to the
   correct variant. */
(function () {
  "use strict";

  var SVG = "assets/port-set-ncc.svg?v=20260728c";
  // Trimmed viewBox of the re-exported component set (0 0 800 1980).
  var SVG_W = 800, SVG_H = 1980, OFF_X = 0, OFF_Y = 0;
  var SCALE = 2.8;

  // comboKey (Type|State|Speed|Indicator) -> [x, y, w, h] within the SVG viewBox.
  // CROP = Selected=No art; CROP_YES = the real Selected=Yes variant art.
  var CROP = {
    "Copper|Disabled|N/A|None":[0.8,3.1,23.5,21.9],
    "Copper|Disabled|N/A|PoE":[104.1,3.1,23.5,21.9],
    "Copper|Link Down|N/A|None":[206.7,0,25.1,23.5],
    "Copper|Link Down|N/A|PoE":[310.8,0,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Blocking":[310.8,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Blocking+PoE":[517.5,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|HA":[724.2,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|None":[0.8,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|PoE":[207.5,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Stacking":[620.8,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Uplink":[104.1,43.1,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Uplink+PoE":[414.1,43.1,25.1,23.5],
    "Copper|Link Up|100Gbps|Blocking":[310,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|Blocking+PoE":[516.7,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|HA":[723.4,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|None":[0,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|PoE":[206.7,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|Stacking":[620,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|Uplink":[103.3,287.3,25.1,23.5],
    "Copper|Link Up|100Gbps|Uplink+PoE":[413.4,287.3,25.1,23.5],
    "Copper|Link Up|10Gbps|Blocking":[310,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|Blocking+PoE":[516.7,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|HA":[723.4,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|None":[0,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|PoE":[206.7,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|Stacking":[620,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|Uplink":[103.3,205.9,25.1,23.5],
    "Copper|Link Up|10Gbps|Uplink+PoE":[413.4,205.9,25.1,23.5],
    "Copper|Link Up|1Gbps|Blocking":[310.8,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|Blocking+PoE":[517.5,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|HA":[724.2,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|None":[0.8,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|PoE":[207.5,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|Stacking":[620.8,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|Uplink":[104.1,83.8,25.1,23.5],
    "Copper|Link Up|1Gbps|Uplink+PoE":[414.1,83.8,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Blocking":[310,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Blocking+PoE":[516.7,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|HA":[723.4,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|None":[0,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|PoE":[206.7,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Stacking":[620,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Uplink":[103.3,124.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Uplink+PoE":[413.4,124.5,25.1,23.5],
    "Copper|Link Up|25Gbps|Blocking":[310,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|Blocking+PoE":[516.7,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|HA":[723.4,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|None":[0,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|PoE":[206.7,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|Stacking":[620,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|Uplink":[103.3,246.6,25.1,23.5],
    "Copper|Link Up|25Gbps|Uplink+PoE":[413.4,246.6,25.1,23.5],
    "Copper|Link Up|5Gbps|Blocking":[310,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|Blocking+PoE":[516.7,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|HA":[723.4,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|None":[0,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|PoE":[206.7,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|Stacking":[620,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|Uplink":[103.3,165.2,25.1,23.5],
    "Copper|Link Up|5Gbps|Uplink+PoE":[413.4,165.2,25.1,23.5],
    "Copper|Selected|N/A|None":[207.5,894.8,25.1,23.5],
    "Fiber|Disabled|N/A|None":[3.1,460.3,23.5,21.9],
    "Fiber|Link Down|N/A|None":[105.7,459.5,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|Blocking":[312.4,501,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|Blocking+PoE":[519,501,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|None":[2.3,501,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|PoE":[209,501,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|Stacking":[620.8,501,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|Uplink":[105.7,501,25.1,23.5],
    "Fiber|Link Up|10/100Mbps|Uplink+PoE":[415.7,501,25.1,23.5],
    "Fiber|Link Up|100Gbps|Blocking":[312.4,764.1,25.1,23.5],
    "Fiber|Link Up|100Gbps|Blocking+PoE":[519,764.1,25.1,23.5],
    "Fiber|Link Up|100Gbps|None":[2.3,764.1,25.1,23.5],
    "Fiber|Link Up|100Gbps|PoE":[209,764.1,25.1,23.5],
    "Fiber|Link Up|100Gbps|Stacking":[620.8,764.1,25.1,23.5],
    "Fiber|Link Up|100Gbps|Uplink":[105.7,764.1,25.1,23.5],
    "Fiber|Link Up|100Gbps|Uplink+PoE":[415.7,764.1,25.1,23.5],
    "Fiber|Link Up|10Gbps|Blocking":[312.4,680.3,25.1,23.5],
    "Fiber|Link Up|10Gbps|Blocking+PoE":[519,680.3,25.1,23.5],
    "Fiber|Link Up|10Gbps|None":[2.3,680.3,25.1,23.5],
    "Fiber|Link Up|10Gbps|PoE":[209,680.3,25.1,23.5],
    "Fiber|Link Up|10Gbps|Stacking":[620.8,680.3,25.1,23.5],
    "Fiber|Link Up|10Gbps|Uplink":[105.7,680.3,25.1,23.5],
    "Fiber|Link Up|10Gbps|Uplink+PoE":[415.7,680.3,25.1,23.5],
    "Fiber|Link Up|1Gbps|Blocking":[311.6,545.7,25.1,23.5],
    "Fiber|Link Up|1Gbps|Blocking+PoE":[518.3,545.7,25.1,23.5],
    "Fiber|Link Up|1Gbps|None":[1.6,545.7,25.1,23.5],
    "Fiber|Link Up|1Gbps|PoE":[208.2,545.7,25.1,23.5],
    "Fiber|Link Up|1Gbps|Stacking":[620,545.7,25.1,23.5],
    "Fiber|Link Up|1Gbps|Uplink":[104.9,545.7,25.1,23.5],
    "Fiber|Link Up|1Gbps|Uplink+PoE":[414.9,545.7,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|Blocking":[312.4,596.5,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|Blocking+PoE":[519,596.5,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|None":[2.3,596.5,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|PoE":[209,596.5,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|Stacking":[620.8,596.5,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|Uplink":[105.7,596.5,25.1,23.5],
    "Fiber|Link Up|2.5Gbps|Uplink+PoE":[415.7,596.5,25.1,23.5],
    "Fiber|Link Up|25Gbps|Blocking":[312.4,724.9,25.1,23.5],
    "Fiber|Link Up|25Gbps|Blocking+PoE":[519,724.9,25.1,23.5],
    "Fiber|Link Up|25Gbps|None":[2.3,724.9,25.1,23.5],
    "Fiber|Link Up|25Gbps|PoE":[209,724.9,25.1,23.5],
    "Fiber|Link Up|25Gbps|Stacking":[620.8,724.9,25.1,23.5],
    "Fiber|Link Up|25Gbps|Uplink":[105.7,724.9,25.1,23.5],
    "Fiber|Link Up|25Gbps|Uplink+PoE":[415.7,724.9,25.1,23.5],
    "Fiber|Link Up|5Gbps|Blocking":[312.4,641.2,25.1,23.5],
    "Fiber|Link Up|5Gbps|Blocking+PoE":[519,641.2,25.1,23.5],
    "Fiber|Link Up|5Gbps|None":[2.3,641.2,25.1,23.5],
    "Fiber|Link Up|5Gbps|PoE":[209,641.2,25.1,23.5],
    "Fiber|Link Up|5Gbps|Stacking":[620.8,641.2,25.1,23.5],
    "Fiber|Link Up|5Gbps|Uplink":[105.7,641.2,25.1,23.5],
    "Fiber|Link Up|5Gbps|Uplink+PoE":[415.7,641.2,25.1,23.5],
    "Fiber|Selected|N/A|None":[311.6,895.6,23.5,21.9],
    "Special 100G|Disabled|N/A|None":[1.6,825.2,73.6,51.7],
    "Special 100G|Link Down|N/A|None":[104.1,824.4,75.2,53.2],
    "Special 100G|Link Up|100Gbps|None":[0.8,894.8,75.2,53.2],
    "Special 25G 1-to-4|Disabled|N/A|None":[208.2,825.2,73.6,51.7],
    "Special 25G 1-to-4|Link Down|N/A|None":[310.8,824.4,75.2,53.2],
    "Special 25G 1-to-4|Link Up|25Gbps|None":[104.1,924.6,17.2,23.5]
  };
  var CROP_YES = {
    "Copper|Disabled|N/A|None":[1.6,1021.7,21.9,20.4],
    "Copper|Disabled|N/A|PoE":[104.9,1021.7,21.9,20.4],
    "Copper|Link Down|N/A|None":[207.5,1018.5,23.5,21.9],
    "Copper|Link Down|N/A|PoE":[311.6,1018.5,23.5,21.9],
    "Copper|Link Up|10/100Mbps|Blocking":[310.8,1060.8,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Blocking+PoE":[517.5,1060.8,25.1,23.5],
    "Copper|Link Up|10/100Mbps|HA":[724.2,1060.8,25.1,23.5],
    "Copper|Link Up|10/100Mbps|None":[1.6,1061.6,23.5,21.9],
    "Copper|Link Up|10/100Mbps|PoE":[207.5,1060.8,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Stacking":[620.8,1060.8,25.1,23.5],
    "Copper|Link Up|10/100Mbps|Uplink":[104.9,1061.6,23.5,21.9],
    "Copper|Link Up|10/100Mbps|Uplink+PoE":[414.1,1060.8,25.1,23.5],
    "Copper|Link Up|100Gbps|Blocking":[310,1305.1,25.1,23.5],
    "Copper|Link Up|100Gbps|Blocking+PoE":[516.7,1305.1,25.1,23.5],
    "Copper|Link Up|100Gbps|HA":[723.4,1305.1,25.1,23.5],
    "Copper|Link Up|100Gbps|None":[0.8,1305.8,23.5,21.9],
    "Copper|Link Up|100Gbps|PoE":[206.7,1305.1,25.1,23.5],
    "Copper|Link Up|100Gbps|Stacking":[620,1305.1,25.1,23.5],
    "Copper|Link Up|100Gbps|Uplink":[104.1,1305.8,23.5,21.9],
    "Copper|Link Up|100Gbps|Uplink+PoE":[413.4,1305.1,25.1,23.5],
    "Copper|Link Up|10Gbps|Blocking":[310,1223.6,25.1,23.5],
    "Copper|Link Up|10Gbps|Blocking+PoE":[516.7,1223.6,25.1,23.5],
    "Copper|Link Up|10Gbps|HA":[723.4,1223.6,25.1,23.5],
    "Copper|Link Up|10Gbps|None":[0.8,1224.4,23.5,21.9],
    "Copper|Link Up|10Gbps|PoE":[206.7,1223.6,25.1,23.5],
    "Copper|Link Up|10Gbps|Stacking":[620,1223.6,25.1,23.5],
    "Copper|Link Up|10Gbps|Uplink":[104.1,1224.4,23.5,21.9],
    "Copper|Link Up|10Gbps|Uplink+PoE":[413.4,1223.6,25.1,23.5],
    "Copper|Link Up|1Gbps|Blocking":[310.8,1101.5,25.1,23.5],
    "Copper|Link Up|1Gbps|Blocking+PoE":[517.5,1101.5,25.1,23.5],
    "Copper|Link Up|1Gbps|HA":[724.2,1101.5,25.1,23.5],
    "Copper|Link Up|1Gbps|PoE":[207.5,1101.5,25.1,23.5],
    "Copper|Link Up|1Gbps|Stacking":[620.8,1101.5,25.1,23.5],
    "Copper|Link Up|1Gbps|Uplink":[104.9,1102.3,23.5,21.9],
    "Copper|Link Up|1Gbps|Uplink+PoE":[414.1,1101.5,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Blocking":[310,1142.2,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Blocking+PoE":[516.7,1142.2,25.1,23.5],
    "Copper|Link Up|2.5Gbps|HA":[723.4,1142.2,25.1,23.5],
    "Copper|Link Up|2.5Gbps|None":[0.8,1143,23.5,21.9],
    "Copper|Link Up|2.5Gbps|PoE":[206.7,1142.2,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Stacking":[620,1142.2,25.1,23.5],
    "Copper|Link Up|2.5Gbps|Uplink":[104.1,1143,23.5,21.9],
    "Copper|Link Up|2.5Gbps|Uplink+PoE":[413.4,1142.2,25.1,23.5],
    "Copper|Link Up|25Gbps|Blocking":[310,1264.3,25.1,23.5],
    "Copper|Link Up|25Gbps|Blocking+PoE":[516.7,1264.3,25.1,23.5],
    "Copper|Link Up|25Gbps|HA":[723.4,1264.3,25.1,23.5],
    "Copper|Link Up|25Gbps|None":[0.8,1265.1,23.5,21.9],
    "Copper|Link Up|25Gbps|PoE":[206.7,1264.3,25.1,23.5],
    "Copper|Link Up|25Gbps|Stacking":[620,1264.3,25.1,23.5],
    "Copper|Link Up|25Gbps|Uplink":[104.1,1265.1,23.5,21.9],
    "Copper|Link Up|25Gbps|Uplink+PoE":[413.4,1264.3,25.1,23.5],
    "Copper|Link Up|5Gbps|Blocking":[310,1182.9,25.1,23.5],
    "Copper|Link Up|5Gbps|Blocking+PoE":[516.7,1182.9,25.1,23.5],
    "Copper|Link Up|5Gbps|HA":[723.4,1182.9,25.1,23.5],
    "Copper|Link Up|5Gbps|None":[0.8,1183.7,23.5,21.9],
    "Copper|Link Up|5Gbps|PoE":[206.7,1182.9,25.1,23.5],
    "Copper|Link Up|5Gbps|Stacking":[620,1182.9,25.1,23.5],
    "Copper|Link Up|5Gbps|Uplink":[104.1,1183.7,23.5,21.9],
    "Copper|Link Up|5Gbps|Uplink+PoE":[413.4,1182.9,25.1,23.5],
    "Fiber|Disabled|N/A|None":[3.1,1478.1,23.5,21.9],
    "Fiber|Link Down|N/A|None":[106.5,1478.1,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|Blocking":[313.1,1519.6,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|Blocking+PoE":[519.8,1519.6,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|None":[3.1,1519.6,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|PoE":[209.8,1519.6,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|Stacking":[621.6,1519.6,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|Uplink":[106.5,1519.6,23.5,21.9],
    "Fiber|Link Up|10/100Mbps|Uplink+PoE":[416.5,1519.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|Blocking":[313.1,1782.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|Blocking+PoE":[519.8,1782.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|None":[3.1,1782.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|PoE":[209.8,1782.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|Stacking":[621.6,1782.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|Uplink":[106.5,1782.6,23.5,21.9],
    "Fiber|Link Up|100Gbps|Uplink+PoE":[416.5,1782.6,23.5,21.9],
    "Fiber|Link Up|10Gbps|Blocking":[313.1,1698.8,23.5,21.9],
    "Fiber|Link Up|10Gbps|Blocking+PoE":[519.8,1698.8,23.5,21.9],
    "Fiber|Link Up|10Gbps|None":[3.1,1698.8,23.5,21.9],
    "Fiber|Link Up|10Gbps|PoE":[209.8,1698.8,23.5,21.9],
    "Fiber|Link Up|10Gbps|Stacking":[621.6,1698.8,23.5,21.9],
    "Fiber|Link Up|10Gbps|Uplink":[106.5,1698.8,23.5,21.9],
    "Fiber|Link Up|10Gbps|Uplink+PoE":[416.5,1698.8,23.5,21.9],
    "Fiber|Link Up|1Gbps|Blocking":[312.4,1564.2,23.5,21.9],
    "Fiber|Link Up|1Gbps|Blocking+PoE":[519,1564.2,23.5,21.9],
    "Fiber|Link Up|1Gbps|None":[2.3,1564.2,23.5,21.9],
    "Fiber|Link Up|1Gbps|PoE":[209,1564.2,23.5,21.9],
    "Fiber|Link Up|1Gbps|Stacking":[620.8,1564.2,23.5,21.9],
    "Fiber|Link Up|1Gbps|Uplink":[105.7,1564.2,23.5,21.9],
    "Fiber|Link Up|1Gbps|Uplink+PoE":[415.7,1564.2,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|Blocking":[313.1,1615.1,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|Blocking+PoE":[519.8,1615.1,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|None":[3.1,1615.1,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|PoE":[209.8,1615.1,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|Stacking":[621.6,1615.1,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|Uplink":[106.5,1615.1,23.5,21.9],
    "Fiber|Link Up|2.5Gbps|Uplink+PoE":[416.5,1615.1,23.5,21.9],
    "Fiber|Link Up|25Gbps|Blocking":[313.1,1743.5,23.5,21.9],
    "Fiber|Link Up|25Gbps|Blocking+PoE":[519.8,1743.5,23.5,21.9],
    "Fiber|Link Up|25Gbps|None":[3.1,1743.5,23.5,21.9],
    "Fiber|Link Up|25Gbps|PoE":[209.8,1743.5,23.5,21.9],
    "Fiber|Link Up|25Gbps|Stacking":[621.6,1743.5,23.5,21.9],
    "Fiber|Link Up|25Gbps|Uplink":[106.5,1743.5,23.5,21.9],
    "Fiber|Link Up|25Gbps|Uplink+PoE":[416.5,1743.5,23.5,21.9],
    "Fiber|Link Up|5Gbps|Blocking":[313.1,1659.7,23.5,21.9],
    "Fiber|Link Up|5Gbps|Blocking+PoE":[519.8,1659.7,23.5,21.9],
    "Fiber|Link Up|5Gbps|None":[3.1,1659.7,23.5,21.9],
    "Fiber|Link Up|5Gbps|PoE":[209.8,1659.7,23.5,21.9],
    "Fiber|Link Up|5Gbps|Stacking":[621.6,1659.7,23.5,21.9],
    "Fiber|Link Up|5Gbps|Uplink":[106.5,1659.7,23.5,21.9],
    "Fiber|Link Up|5Gbps|Uplink+PoE":[416.5,1659.7,23.5,21.9],
    "Special 100G|Disabled|N/A|None":[1.6,1842.9,73.6,51.7],
    "Special 100G|Link Down|N/A|None":[104.9,1842.9,73.6,51.7],
    "Special 100G|Link Up|100Gbps|None":[1.6,1913.3,73.6,51.7],
    "Special 25G 1-to-4|Disabled|N/A|None":[208.2,1842.9,73.6,51.7],
    "Special 25G 1-to-4|Link Down|N/A|None":[311.6,1842.9,73.6,51.7],
    "Special 25G 1-to-4|Link Up|25Gbps|None":[104.9,1943.1,15.7,21.9]
  };

  var OPT = {
    type: [["Copper", "Copper"], ["Fiber", "Fiber"], ["Special 100G", "Special 100G"], ["Special 25G 1-to-4", "Special 25G 1-to-4"]],
    state: [["Disabled", "Disabled"], ["Link Down", "Link Down"], ["Link Up", "Link Up"]],
    speed: [["10/100Mbps", "10/100 Mbps"], ["1Gbps", "1 Gbps"], ["2.5Gbps", "2.5 Gbps"], ["5Gbps", "5 Gbps"], ["10Gbps", "10 Gbps"], ["25Gbps", "25 Gbps"]],
    ind_up: [["None", "None"], ["PoE", "PoE"], ["Uplink", "Uplink"], ["Uplink+PoE", "Uplink+PoE"], ["Blocking", "Blocking"], ["Blocking+PoE", "Blocking+PoE"], ["Stacking", "Stacking"], ["HA", "HA"]],
    ind_down: [["None", "None（無供電）"], ["PoE", "PoE（純供電）"]],
    selected: [["No", "否 No"], ["Yes", "是 Yes"]]
  };

  function isSpecial(t) { return t === "Special 100G" || t === "Special 25G 1-to-4"; }

  function comboKey(s) {
    if (isSpecial(s.type)) {
      var sp = s.type === "Special 100G" ? "100Gbps" : "25Gbps";
      return s.type + "|" + s.state + "|" + (s.state === "Link Up" ? sp : "N/A") + "|None";
    }
    if (s.state === "Link Up") return s.type + "|Link Up|" + s.speed + "|" + s.indicator;
    return s.type + "|" + s.state + "|N/A|" + (s.indicator === "PoE" ? "PoE" : "None");
  }

  // Filename of the real Selected=Yes component SVG (exported per variant from
  // node 787:1580 into assets/port-selected-svg/). Matches the Figma variant name.
  function yesFile(s) {
    var ind, sp;
    if (isSpecial(s.type)) { ind = "None"; sp = (s.state === "Link Up") ? (s.type === "Special 100G" ? "100Gbps" : "25Gbps") : "N/A"; }
    else if (s.state === "Link Up") { ind = s.indicator; sp = s.speed; }
    else { ind = (s.indicator === "PoE") ? "PoE" : "None"; sp = "N/A"; }
    var name = "Type=" + s.type + ", State=" + s.state + ", Indicator=" + ind + ", Speed=" + sp + ", Selected=Yes.svg";
    return "assets/port-selected-svg/" + name.replace(/\//g, "-") + "?v=20260729c";
  }

  // Reveal order. Speed / Selected carry preset defaults (see normalizeDefaults).
  var STEP_ORDER = ["type", "state", "indicator", "speed", "selected"];

  // A single (type,state,indicator,speed) → CROP combo key, used to test whether a
  // given option actually resolves to a real variant (so dead options can be hidden).
  function keyFor(type, state, indicator, speed) {
    if (isSpecial(type)) { var sp = type === "Special 100G" ? "100Gbps" : "25Gbps"; return type + "|" + state + "|" + (state === "Link Up" ? sp : "N/A") + "|None"; }
    if (state === "Link Up") return type + "|Link Up|" + speed + "|" + indicator;
    return type + "|" + state + "|N/A|" + (indicator === "PoE" ? "PoE" : "None");
  }

  // Does choosing `val` for `dim` (given the rest of s) lead to at least one real
  // variant in the component set? Options that never resolve are hidden entirely.
  function optHasVariant(dim, val, s) {
    var type = (dim === "type") ? val : s.type;
    if (!type || dim === "type" || dim === "selected") return true;
    if (dim === "state") {
      if (isSpecial(type)) return !!CROP[keyFor(type, val, null, null)];
      if (val === "Link Up") return OPT.ind_up.some(function (i) { return OPT.speed.some(function (sp) { return !!CROP[keyFor(type, "Link Up", i[0], sp[0])]; }); });
      return OPT.ind_down.some(function (i) { return !!CROP[keyFor(type, val, i[0], "N/A")]; });
    }
    if (dim === "indicator") {
      if (s.state === "Link Up") return OPT.speed.some(function (sp) { return !!CROP[keyFor(type, "Link Up", val, sp[0])]; });
      return !!CROP[keyFor(type, s.state, val, "N/A")];
    }
    if (dim === "speed") return !!CROP[keyFor(type, "Link Up", s.indicator, val)];
    return true;
  }

  function steps(s) {
    function f(dim, opts) { return opts.filter(function (o) { return optHasVariant(dim, o[0], s); }); }
    var arr = [
      { dim: "type", title: "類型 Type", q: "連接埠的實體型態？", opts: f("type", OPT.type) },
      { dim: "state", title: "狀態 State", q: "port 目前的狀態？", opts: f("state", OPT.state) }
    ];
    if (!isSpecial(s.type) && s.state === "Link Up") {
      arr.push({ dim: "indicator", title: "指示 Indicator", q: "是否有 Uplink / PoE / Blocking 等指示？", opts: f("indicator", OPT.ind_up) });
      arr.push({ dim: "speed", title: "速率 Speed", q: "Link Up 的連線速率？（預設 1 Gbps）", opts: f("speed", OPT.speed) });
    } else if (!isSpecial(s.type) && (s.state === "Disabled" || s.state === "Link Down")) {
      arr.push({ dim: "indicator", title: "指示 Indicator", q: "是否供電（PoE）？", opts: f("indicator", OPT.ind_down) });
    }
    if (s.state != null) {
      arr.push({ dim: "selected", title: '選取 Selected<span class="selection-filter-title-note">(不支援 Device GUI)</span>', q: "是否為選取狀態？（預設 否）", opts: OPT.selected });
    }
    return arr;
  }

  // Speed / Selected are Filter controls with preset defaults, so a revealed
  // step counts as answered immediately: Speed → 1 Gbps (Link Up only),
  // Selected → No. Rewind nulls them, and these lines refill the defaults.
  function normalizeDefaults(s) {
    if (!isSpecial(s.type) && s.state === "Link Up" && s.indicator != null && s.speed == null) {
      s.speed = "1Gbps";
    }
    if (s.state != null && s.selected == null) {
      s.selected = "No";
    }
  }

  function resultHtml(s) {
    var key = comboKey(s);
    var isYes = s.selected === "Yes";
    var cell = CROP[key]; // base variant bbox — drives size & whether a variant exists
    // Speed / Selected are preset controls and stay out of the result label.
    var parts = [s.type, s.state];
    if (!isSpecial(s.type) && s.state === "Link Up") { parts.push(s.indicator); }
    else if (!isSpecial(s.type) && (s.state === "Disabled" || s.state === "Link Down") && s.indicator === "PoE") { parts.push("PoE"); }
    var labelText = parts.filter(Boolean).join(" · ");
    var view;
    if (cell) {
      var h = cell[3] * SCALE;
      if (isYes) {
        // Real Selected=Yes component from its own exported vector SVG — identical
        // to Figma (rounded selected border, crisp). width:auto keeps true aspect.
        view = '<img class="pf-port-svg" src="' + yesFile(s) + '" alt="' + labelText + '" style="height:' + h + 'px;width:auto;">';
      } else {
        var w = cell[2] * SCALE;
        var bgx = -(cell[0] + OFF_X) * SCALE, bgy = -(cell[1] + OFF_Y) * SCALE;
        view = '<div class="pf-port" style="width:' + w + "px;height:" + h + "px;background-image:url(" + SVG + ");background-size:" + (SVG_W * SCALE) + "px " + (SVG_H * SCALE) + "px;background-position:" + bgx + "px " + bgy + 'px;"></div>';
      }
    } else {
      view = '<div class="pf-port pf-port--empty" style="width:90px;height:80px;">此組合<br>無對應變體</div>';
    }
    return '<div class="pf-result-card"><div class="pf-result-eyebrow">結果</div><div class="pf-result-body">' + view +
      '<div class="pf-result-meta"><div class="pf-result-combo">' + labelText + '</div>' +
      (cell ? '' : '<div class="pf-result-note">此組合在元件庫（787:1580）中沒有對應變體。</div>') + '</div></div></div>';
  }

  // 分層揭露：沿已回答的路徑逐層渲染，遇未答層停；全部答完才顯示結果。
  function renderWizard(root, s) {
    var st = steps(s), groups = [], complete = true;
    for (var i = 0; i < st.length; i++) {
      var step = st[i];
      var answered = s[step.dim] != null;
      var opts = step.opts.map(function (o) {
        var sel = s[step.dim] === o[0];
        return '<button type="button" class="tb-seg" data-pf-dim="' + step.dim + '" data-pf-val="' + o[0] + '" aria-pressed="' + sel + '"><span>' + o[1] + '</span></button>';
      }).join("");
      groups.push('<div class="tb-control-group"><div class="selection-filter-q"><span class="selection-filter-num">' + (i + 1) + '.</span><span class="selection-filter-title">' + step.title + '</span><span class="selection-filter-sub">' + step.q + '</span></div><div class="tb-datastate" role="group" aria-label="' + step.q + '">' + opts + '</div></div>');
      if (!answered) { complete = false; break; }
    }
    root.innerHTML = '<section class="decision-wizard selection-filter" aria-label="Port 決策器">' + groups.join("") + (complete ? resultHtml(s) : "") + '</section>';
  }

  window.renderPortPanelTable = function () {
    return '' +
      '<section class="doc-block">' +
      '  <div class="selection-filter-header"><h2>Filter</h2>' +
      '    <button type="button" class="tb-reset-btn" data-pf-reset>↺ 清空篩選</button></div>' +
      '  <div id="pf-wizard"></div>' +
      '</section>' +
      '<section class="doc-block">' +
      '  <h2>Port 樣式總表</h2>' +
      '  <img class="pf-table-img" src="assets/port-master-table.png" alt="Port 樣式總表" loading="lazy">' +
      '</section>';
  };

  window.initPortFilter = function () {
    var host = document.getElementById("pf-wizard");
    if (!host) return;
    var s = { type: null, state: null, speed: null, indicator: null, selected: null };
    function paint() { normalizeDefaults(s); renderWizard(host, s); }
    var scope = host.closest(".doc-block") || document;
    scope.addEventListener("click", function (e) {
      if (e.target.closest("[data-pf-reset]")) { STEP_ORDER.forEach(function (d) { s[d] = null; }); paint(); return; }
      var seg = e.target.closest("[data-pf-dim]");
      if (!seg) return;
      var dim = seg.dataset.pfDim;
      s[dim] = seg.dataset.pfVal;
      var idx = STEP_ORDER.indexOf(dim);
      for (var j = idx + 1; j < STEP_ORDER.length; j++) {
        // Changing State resets Indicator / Speed / Selected back to defaults;
        // changing Indicator or Speed keeps a manual Selected choice.
        if (STEP_ORDER[j] === "selected" && dim !== "state") continue;
        s[STEP_ORDER[j]] = null;
      }
      paint();
    });
    paint();
  };

  // ---- styles ----
  var css = '' +
    '.pf-sub{color:#5b6470;font-size:13px;margin:2px 0 14px;}' +
    '#pf-wizard .selection-filter-title-note{display:block;font-weight:400;color:#5b6470;font-size:12px;line-height:1.4;margin-top:1px;}' +
    '.pf-table-img{display:block;width:100%;height:auto;margin:8px auto 0;border:1px solid #e5e7eb;border-radius:10px;}' +
    '#pf-wizard .decision-wizard{display:flex;flex-direction:column;gap:14px;}' +
    '#pf-wizard .tb-seg{border:1px solid #d9dee7;border-radius:8px;background:#fff;padding:8px 14px;font-size:13px;font-weight:500;color:#374151;cursor:pointer;transition:all .12s;}' +
    '#pf-wizard .tb-seg:hover[aria-pressed="false"]{border-color:#3C9F00;background:rgba(60,159,0,.06);color:#1f2937;}' +
    '#pf-wizard .tb-seg[aria-pressed="true"]{background:#3C9F00;border-color:#3C9F00;color:#fff;box-shadow:0 1px 2px rgba(60,159,0,.25);}' +
    '.pf-result-card{margin-top:4px;border:1px solid #3C9F00;border-radius:10px;padding:14px 16px;background:rgba(60,159,0,.06);}' +
    '.pf-result-eyebrow{font-size:11px;letter-spacing:.04em;color:#3C9F00;text-transform:uppercase;font-weight:700;margin-bottom:12px;}' +
    '.pf-result-body{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}' +
    '.pf-result-meta{flex:1 1 auto;min-width:160px;}' +
    '.pf-port{flex:0 0 auto;background-repeat:no-repeat;}' +
    '.pf-port-svg{flex:0 0 auto;display:block;}' +
    '.pf-port--selected{box-shadow:0 0 0 2px #606060;border-radius:3px;}' +
    '.pf-port--empty{display:flex;align-items:center;justify-content:center;text-align:center;font-size:12px;color:#9aa2ab;background:#f1f3f5;box-shadow:none;line-height:1.4;}' +
    '.pf-result-combo{font-size:14px;color:#1f2937;font-weight:700;word-break:break-word;}' +
    '.pf-result-note{margin-top:8px;font-size:12px;color:#b45309;line-height:1.5;}';
  var st = document.createElement("style");
  st.setAttribute("data-port-filter", "");
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
})();
