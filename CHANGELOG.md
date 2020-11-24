# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0](https://github.com/Opentrons/opentrons/compare/v3.21.2...v4.0.0) (2020-11-20)

### Bug Fixes

* **api:** Mark pipette and deck calibration as bad for slot one ([#7035](https://github.com/Opentrons/opentrons/issues/7035)) ([92f1cbf](https://github.com/Opentrons/opentrons/commit/92f1cbf))
* **app:** cal check: fix deck setup typo ([#7037](https://github.com/Opentrons/opentrons/issues/7037)) ([0c0013e](https://github.com/Opentrons/opentrons/commit/0c0013e))
* **api:** handle missing intermediate keys in poc index ([#7029](https://github.com/Opentrons/opentrons/issues/7029)) ([a123a5f](https://github.com/Opentrons/opentrons/commit/a123a5f))
* **api:** tolerate delete of nonexistent pip offset ([#7027](https://github.com/Opentrons/opentrons/issues/7027)) ([6fac6ce](https://github.com/Opentrons/opentrons/commit/6fac6ce))
* **app:** Filter pipette offset calibrations by mount as well ([#7017](https://github.com/Opentrons/opentrons/issues/7017)) ([8bf5a71](https://github.com/Opentrons/opentrons/commit/8bf5a71))
* **app:** fix pipette info page flag for configuring or changing pipette ([#7018](https://github.com/Opentrons/opentrons/issues/7018)) ([74d9cb4](https://github.com/Opentrons/opentrons/commit/74d9cb4))
* **robot-server:** deck cal: clear pipette offset cal when deck cal completes ([#7019](https://github.com/Opentrons/opentrons/issues/7019)) ([243c683](https://github.com/Opentrons/opentrons/commit/243c683))
* **robot-server:** remove pip offset after tlc in fused flow ([#7020](https://github.com/Opentrons/opentrons/issues/7020)) ([858219e](https://github.com/Opentrons/opentrons/commit/858219e))
* **app:** consistent date formatting for calibration last modified time ([#7003](https://github.com/Opentrons/opentrons/issues/7003)) ([3b3d75d](https://github.com/Opentrons/opentrons/commit/3b3d75d)), closes [#7002](https://github.com/Opentrons/opentrons/issues/7002)
* **app:** fix post attach pipette calibration double wizard ([#7008](https://github.com/Opentrons/opentrons/issues/7008)) ([f4ec258](https://github.com/Opentrons/opentrons/commit/f4ec258))
* **app:** fix required modules list on protocol info page ([#7012](https://github.com/Opentrons/opentrons/issues/7012)) ([47fdbb5](https://github.com/Opentrons/opentrons/commit/47fdbb5))
* **robot-server:** load tip length data correctly in pipette offset cal ([#7009](https://github.com/Opentrons/opentrons/issues/7009)) ([8c8ef89](https://github.com/Opentrons/opentrons/commit/8c8ef89))
* **app:** misc cal overhaul sizing, font weight, and spacing tweaks ([#6999](https://github.com/Opentrons/opentrons/issues/6999)) ([ac07045](https://github.com/Opentrons/opentrons/commit/ac07045))
* **app:** pipette calibration info sections show be same height ([#6996](https://github.com/Opentrons/opentrons/issues/6996)) ([bb9cfc4](https://github.com/Opentrons/opentrons/commit/bb9cfc4))
* **api:** session._dedupe needs to use equality checking ([#6988](https://github.com/Opentrons/opentrons/issues/6988)) ([26c666b](https://github.com/Opentrons/opentrons/commit/26c666b)), closes [#6692](https://github.com/Opentrons/opentrons/issues/6692)
* **robot-server:** reset cal when starting pip offset cal ([#6991](https://github.com/Opentrons/opentrons/issues/6991)) ([d471900](https://github.com/Opentrons/opentrons/commit/d471900))
* **shared-data:** fix P300 GEN2 tip overlap values ([#6987](https://github.com/Opentrons/opentrons/issues/6987)) ([bc38f36](https://github.com/Opentrons/opentrons/commit/bc38f36))
* **app:** Accidental parens in react usememo deps ([#6968](https://github.com/Opentrons/opentrons/issues/6968)) ([df0a15e](https://github.com/Opentrons/opentrons/commit/df0a15e))
* **app:** Correct text when saving z point for all sessions ([#6955](https://github.com/Opentrons/opentrons/issues/6955)) ([71d5ff9](https://github.com/Opentrons/opentrons/commit/71d5ff9))
* **app:** Ensure we are using the correct logic for screen transitions in cal check ([#6960](https://github.com/Opentrons/opentrons/issues/6960)) ([2fbc872](https://github.com/Opentrons/opentrons/commit/2fbc872))
* **app:** fix buildroot download modal title ([#6966](https://github.com/Opentrons/opentrons/issues/6966)) ([9ea7b45](https://github.com/Opentrons/opentrons/commit/9ea7b45)), closes [#5546](https://github.com/Opentrons/opentrons/issues/5546)
* **app:** Fix calibration warning text ([#6977](https://github.com/Opentrons/opentrons/issues/6977)) ([32c90c5](https://github.com/Opentrons/opentrons/commit/32c90c5))
* **app:** fix change pipette and add tests ([#6976](https://github.com/Opentrons/opentrons/issues/6976)) ([079b8c3](https://github.com/Opentrons/opentrons/commit/079b8c3))
* **app:** full-width jog controls ([#6970](https://github.com/Opentrons/opentrons/issues/6970)) ([e41ab7a](https://github.com/Opentrons/opentrons/commit/e41ab7a))
* **app:** prettyprint cal check results ([#6964](https://github.com/Opentrons/opentrons/issues/6964)) ([8ebb9f7](https://github.com/Opentrons/opentrons/commit/8ebb9f7))
* **robot-server:** cal check: fix comparingHeight y-value ([#6981](https://github.com/Opentrons/opentrons/issues/6981)) ([dd393e9](https://github.com/Opentrons/opentrons/commit/dd393e9))
* **robot-server:** Opt logs out of version requirements ([#6980](https://github.com/Opentrons/opentrons/issues/6980)) ([e73083d](https://github.com/Opentrons/opentrons/commit/e73083d))
* **app:** Fix a typo in introduction ([#6946](https://github.com/Opentrons/opentrons/issues/6946)) ([8cba814](https://github.com/Opentrons/opentrons/commit/8cba814))
* **app:** place top portal at higher z index than page level portal ([#6950](https://github.com/Opentrons/opentrons/issues/6950)) ([b08c4d3](https://github.com/Opentrons/opentrons/commit/b08c4d3))
* **app:** debounce jogs in calcheck ([#6933](https://github.com/Opentrons/opentrons/issues/6933)) ([f355397](https://github.com/Opentrons/opentrons/commit/f355397))
* **app:** Fix intro screen layout with p1k tiprack ([#6932](https://github.com/Opentrons/opentrons/issues/6932)) ([431eacc](https://github.com/Opentrons/opentrons/commit/431eacc))
* **app:** Handle cal data without status ([#6936](https://github.com/Opentrons/opentrons/issues/6936)) ([1cfc0a5](https://github.com/Opentrons/opentrons/commit/1cfc0a5))
* **app:** suppress title bar exit in calcheck results ([#6941](https://github.com/Opentrons/opentrons/issues/6941)) ([e52c8db](https://github.com/Opentrons/opentrons/commit/e52c8db))
* **robot-server:** calcheck: fix invalidation, pickup, retract ([#6934](https://github.com/Opentrons/opentrons/issues/6934)) ([c351ea7](https://github.com/Opentrons/opentrons/commit/c351ea7))
* **robot-server,api:** reset cal during dc process ([#6942](https://github.com/Opentrons/opentrons/issues/6942)) ([8d142d4](https://github.com/Opentrons/opentrons/commit/8d142d4))
* **app:** change pipette exit button text ([#6930](https://github.com/Opentrons/opentrons/issues/6930))
* **app:** Spinner for deck calibration button ([#6902](https://github.com/Opentrons/opentrons/issues/6902)) ([7df8b95](https://github.com/Opentrons/opentrons/commit/7df8b95))
* **robot-server:** prefer smaller pipette in deck cal ([#6900](https://github.com/Opentrons/opentrons/issues/6900)) ([9f2830a](https://github.com/Opentrons/opentrons/commit/9f2830a))
* **api:** recache position before plunger home ([#6881](https://github.com/Opentrons/opentrons/issues/6881)) ([603dfff](https://github.com/Opentrons/opentrons/commit/603dfff))
* **app:** cal wizards show if session exists, always ask for cal block if not saved ([#6870](https://github.com/Opentrons/opentrons/issues/6870)) ([e19b850](https://github.com/Opentrons/opentrons/commit/e19b850))
* **build:** Dont break make with weird deps in shared-data ([#6857](https://github.com/Opentrons/opentrons/issues/6857)) ([0681ae0](https://github.com/Opentrons/opentrons/commit/0681ae0))
* **app:** Center start over in measure nozzle ([c875f3d](https://github.com/Opentrons/opentrons/commit/c875f3d))
* **app:** put blocking user flows in new top level modal portal ([#6821](https://github.com/Opentrons/opentrons/issues/6821)) ([0e62ff4](https://github.com/Opentrons/opentrons/commit/0e62ff4))
* **robot-server:** cache instruments before each calibration flow ([#6822](https://github.com/Opentrons/opentrons/issues/6822)) ([0d61b0e](https://github.com/Opentrons/opentrons/commit/0d61b0e))
* **robot-server:** home plungers in cal flows ([#6823](https://github.com/Opentrons/opentrons/issues/6823)) ([c641d0f](https://github.com/Opentrons/opentrons/commit/c641d0f))
* **api,robot-server:** reload robot calibration on deck calibration exit ([#6815](https://github.com/Opentrons/opentrons/issues/6815)) ([254af66](https://github.com/Opentrons/opentrons/commit/254af66))
* **app:** Display if DC was migrated ([#6812](https://github.com/Opentrons/opentrons/issues/6812)) ([d37c0c0](https://github.com/Opentrons/opentrons/commit/d37c0c0))
* **robot-server:** Fix return tip moves in cal flows ([#6814](https://github.com/Opentrons/opentrons/issues/6814)) ([3c94eef](https://github.com/Opentrons/opentrons/commit/3c94eef))
* **robot-server:** Home pipettes after calibration flows ([#6813](https://github.com/Opentrons/opentrons/issues/6813)) ([1f378a2](https://github.com/Opentrons/opentrons/commit/1f378a2))
* **api:** Do not perform a transfer if a zero volume is passed in ([#6620](https://github.com/opentrons/opentrons/issues/6620)) ([05e66b4](https://github.com/opentrons/opentrons/commit/05e66b4))
* **api:** Increase the tolerance on this test for how long a function takes to execute ([#6621](https://github.com/opentrons/opentrons/issues/6621)) ([1b068c2](https://github.com/opentrons/opentrons/commit/1b068c2))
* **api,robot-server:** add pydantic to api, upgrade and add test dev deps ([#6673](https://github.com/opentrons/opentrons/issues/6673)) ([2e4ad6a](https://github.com/opentrons/opentrons/commit/2e4ad6a))
* **app:** debounce calibration jog requests while others are in flight ([#6794](https://github.com/opentrons/opentrons/issues/6794)) ([d5ae8cd](https://github.com/opentrons/opentrons/commit/d5ae8cd))
* **app:** fix fetch-on-session-end epics for POC, TLC ([#6757](https://github.com/opentrons/opentrons/issues/6757)) ([7124bd9](https://github.com/opentrons/opentrons/commit/7124bd9)), closes [#6747](https://github.com/opentrons/opentrons/issues/6747)
* **app:** Fix the fetch epics for real this time ([#6761](https://github.com/opentrons/opentrons/issues/6761)) ([0df6dc5](https://github.com/opentrons/opentrons/commit/0df6dc5))
* **app:** remove redundant tip rack display name from tooltip ([#6770](https://github.com/opentrons/opentrons/issues/6770)) ([a81228a](https://github.com/opentrons/opentrons/commit/a81228a))
* **app, robot-server:** add param to set has cal block command  ([#6792](https://github.com/opentrons/opentrons/issues/6792)) ([4b9e582](https://github.com/opentrons/opentrons/commit/4b9e582))
* **protocol-designer:** cast mix tip offset to number ([#6629](https://github.com/opentrons/opentrons/issues/6629)) ([7b4ee9b](https://github.com/opentrons/opentrons/commit/7b4ee9b)), closes [#6552](https://github.com/opentrons/opentrons/issues/6552)
* **protocol-designer:** fix 5.1.0 migration ([#6643](https://github.com/opentrons/opentrons/issues/6643)) ([cc7cd17](https://github.com/opentrons/opentrons/commit/cc7cd17))
* **api:** Increase the tolerance on this test for how long a function takes to execute ([#6621](https://github.com/Opentrons/opentrons/issues/6621)) ([1b068c2](https://github.com/Opentrons/opentrons/commit/1b068c2))
* **api,robot-server:** add pydantic to api, upgrade and add test dev deps ([#6673](https://github.com/Opentrons/opentrons/issues/6673)) ([2e4ad6a](https://github.com/Opentrons/opentrons/commit/2e4ad6a))
* **app:** fix fetch-on-session-end epics for POC, TLC ([#6757](https://github.com/Opentrons/opentrons/issues/6757)) ([7124bd9](https://github.com/Opentrons/opentrons/commit/7124bd9)), closes [#6747](https://github.com/Opentrons/opentrons/issues/6747)
* **app:** Fix the fetch epics for real this time ([#6761](https://github.com/Opentrons/opentrons/issues/6761)) ([0df6dc5](https://github.com/Opentrons/opentrons/commit/0df6dc5))
* **app:** remove redundant tip rack display name from tooltip ([#6770](https://github.com/Opentrons/opentrons/issues/6770)) ([a81228a](https://github.com/Opentrons/opentrons/commit/a81228a))
* **app, robot-server:** add param to set has cal block command  ([#6792](https://github.com/Opentrons/opentrons/issues/6792)) ([4b9e582](https://github.com/Opentrons/opentrons/commit/4b9e582))
* **protocol-designer:** cast mix tip offset to number ([#6629](https://github.com/Opentrons/opentrons/issues/6629)) ([7b4ee9b](https://github.com/Opentrons/opentrons/commit/7b4ee9b)), closes [#6552](https://github.com/Opentrons/opentrons/issues/6552)
* **protocol-designer:** fix 5.1.0 migration ([#6643](https://github.com/Opentrons/opentrons/issues/6643)) ([cc7cd17](https://github.com/Opentrons/opentrons/commit/cc7cd17))





### Performance Improvements

* **shared-data,api:** speed up pipette settings ([#6952](https://github.com/Opentrons/opentrons/issues/6952)) ([f8b6266](https://github.com/Opentrons/opentrons/commit/f8b6266))



### Features

* **api:** Mark calibrations as bad when determined they exceed threshold ([#6918](https://github.com/Opentrons/opentrons/issues/6918)) ([ac3a866](https://github.com/Opentrons/opentrons/commit/ac3a866))
* **app, robot-server:** Report both the minimum and maximum supported protocol api versions ([#6921](https://github.com/Opentrons/opentrons/issues/6921)) ([22fc36a](https://github.com/Opentrons/opentrons/commit/22fc36a))
* **api:** p1000_single_v2.2, p20_single_v2.2 ([#6922](https://github.com/Opentrons/opentrons/issues/6922)) ([14659b8](https://github.com/Opentrons/opentrons/commit/14659b8))

([7d4a6bd](https://github.com/Opentrons/opentrons/commit/7d4a6bd))
* **app,discovery-client:** send Opentrons-Version header with HTTP requests ([#6914](https://github.com/Opentrons/opentrons/issues/6914)) ([089dd36](https://github.com/Opentrons/opentrons/commit/089dd36)), closes [#6852](https://github.com/Opentrons/opentrons/issues/6852)
* **robot-server:** increment HTTP API version ([#6917](https://github.com/Opentrons/opentrons/issues/6917)) ([601c3fb](https://github.com/Opentrons/opentrons/commit/601c3fb)), closes [#6851](https://github.com/Opentrons/opentrons/issues/6851)
* **app:** Send intercom event on no-cal-block selected ([#6893](https://github.com/Opentrons/opentrons/issues/6893))
* **notify-server:** add models package and Event model ([#6785](https://github.com/Opentrons/opentrons/issues/6785)) ([aa26264](https://github.com/Opentrons/opentrons/commit/aa26264)), closes [#6705](https://github.com/Opentrons/opentrons/issues/6705)
* **notify-server:** create pub sub server ([#6777](https://github.com/Opentrons/opentrons/issues/6777)) ([04b1e7e](https://github.com/Opentrons/opentrons/commit/04b1e7e)), closes [#6703](https://github.com/Opentrons/opentrons/issues/6703)
* **notify-server:** Notify server publisher client ([#6817](https://github.com/Opentrons/opentrons/issues/6817)) ([12b1c09](https://github.com/Opentrons/opentrons/commit/12b1c09)), closes [#6706](https://github.com/Opentrons/opentrons/issues/6706)
* **notify-server:** Notify server subscriber client ([#6818](https://github.com/Opentrons/opentrons/issues/6818)) ([6611e07](https://github.com/Opentrons/opentrons/commit/6611e07)), closes [#6707](https://github.com/Opentrons/opentrons/issues/6707)
* **protocol-designer:** add dispense air gap to distribute command creator ([#6824](https://github.com/Opentrons/opentrons/issues/6824)) ([2aeccd4](https://github.com/Opentrons/opentrons/commit/2aeccd4)), closes [#6510](https://github.com/Opentrons/opentrons/issues/6510)
* **protocol-designer:** add validation to dispense > air gap volume ([#6771](https://github.com/Opentrons/opentrons/issues/6771)) ([2594aa8](https://github.com/Opentrons/opentrons/commit/2594aa8)), closes [#6500](https://github.com/Opentrons/opentrons/issues/6500) [#6513](https://github.com/Opentrons/opentrons/issues/6513) [#6652](https://github.com/Opentrons/opentrons/issues/6652)
* **protocol-designer:** implement consolidate dispense airgap commands ([#6845](https://github.com/Opentrons/opentrons/issues/6845)) ([0dd7157](https://github.com/Opentrons/opentrons/commit/0dd7157)), closes [#6512](https://github.com/Opentrons/opentrons/issues/6512)
* add basic application configuration using pydantic BaseSettings. ([#6768](https://github.com/Opentrons/opentrons/issues/6768)) ([13db187](https://github.com/Opentrons/opentrons/commit/13db187)), closes [#6704](https://github.com/Opentrons/opentrons/issues/6704)
* **api:** Prevent Python API v1 protocol upload in server version 4.0.0 ([#6841](https://github.com/Opentrons/opentrons/issues/6841)) ([054f037](https://github.com/Opentrons/opentrons/commit/054f037))
* **app,robot-server:** Retry cal actions ([#6830](https://github.com/Opentrons/opentrons/issues/6830)) ([86c729b](https://github.com/Opentrons/opentrons/commit/86c729b)), closes [#6729](https://github.com/Opentrons/opentrons/issues/6729)
* **api:** Add calibration status to all of the calibration data models ([#6648](https://github.com/opentrons/opentrons/issues/6648)) ([2753734](https://github.com/opentrons/opentrons/commit/2753734))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/opentrons/opentrons/issues/6670)) ([811a767](https://github.com/opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/opentrons/opentrons/issues/6576)
* **api:** pin JSON protocols to APIVersion 2.8 ([#6691](https://github.com/opentrons/opentrons/issues/6691)) ([0804474](https://github.com/opentrons/opentrons/commit/0804474)), closes [#6681](https://github.com/opentrons/opentrons/issues/6681)
* **api:** Use more human-friendly names in "API version too low" error messages ([#6662](https://github.com/opentrons/opentrons/issues/6662)) ([55daec2](https://github.com/opentrons/opentrons/commit/55daec2))
* **api,robot-server:** Overhaul robot calibration flows ([#6797](https://github.com/opentrons/opentrons/issues/6797)) ([f0f236f](https://github.com/opentrons/opentrons/commit/f0f236f)), closes [#6738](https://github.com/opentrons/opentrons/issues/6738) [#6739](https://github.com/opentrons/opentrons/issues/6739)
* **app:** Overhaul OT-2 calibration experience ([#6804](https://github.com/opentrons/opentrons/issues/6804)) ([91f9e98](https://github.com/opentrons/opentrons/commit/91f9e98)), closes [#6736](https://github.com/opentrons/opentrons/issues/6736) [#6737](https://github.com/opentrons/opentrons/issues/6737)
* **app:** update pipette attach flow to include calibration ([#6760](https://github.com/opentrons/opentrons/issues/6760)) ([c873113](https://github.com/opentrons/opentrons/commit/c873113)), closes [#2130](https://github.com/opentrons/opentrons/issues/2130)
* **labware-library:** Add labware creator visibility ([#6667](https://github.com/opentrons/opentrons/issues/6667)) ([eb906a3](https://github.com/opentrons/opentrons/commit/eb906a3)), closes [#6307](https://github.com/opentrons/opentrons/issues/6307)
* **protocol designer:** put mix delay behind FF ([#6619](https://github.com/opentrons/opentrons/issues/6619)) ([5c7bf7d](https://github.com/opentrons/opentrons/commit/5c7bf7d))
* **protocol-designer:** add air gap dispense FF ([#6647](https://github.com/opentrons/opentrons/issues/6647)) ([4c53b73](https://github.com/opentrons/opentrons/commit/4c53b73)), closes [#6522](https://github.com/opentrons/opentrons/issues/6522)
* **protocol-designer:** add air gap dispense for fields to move liquid form ([#6658](https://github.com/opentrons/opentrons/issues/6658)) ([a6c1930](https://github.com/opentrons/opentrons/commit/a6c1930)), closes [#6499](https://github.com/opentrons/opentrons/issues/6499)
* **protocol-designer:** add dispenseAirGapVolume arg ([#6656](https://github.com/opentrons/opentrons/issues/6656)) ([4703456](https://github.com/opentrons/opentrons/commit/4703456)), closes [#6653](https://github.com/opentrons/opentrons/issues/6653)
* **protocol-designer:** add mix delay commands ([#6631](https://github.com/opentrons/opentrons/issues/6631)) ([953d454](https://github.com/opentrons/opentrons/commit/953d454)), closes [#6498](https://github.com/opentrons/opentrons/issues/6498)
* **protocol-designer:** add mix delay default values ([#6607](https://github.com/opentrons/opentrons/issues/6607)) ([db2b331](https://github.com/opentrons/opentrons/commit/db2b331)), closes [#6579](https://github.com/opentrons/opentrons/issues/6579)
* **protocol-designer:** bump pd to 5.1.0; add migration ([#6583](https://github.com/opentrons/opentrons/issues/6583)) ([d6ba128](https://github.com/opentrons/opentrons/commit/d6ba128)), closes [#6573](https://github.com/opentrons/opentrons/issues/6573) [#6634](https://github.com/opentrons/opentrons/issues/6634)
* **protocol-designer:** implement dispense > air gap for Transfer command creator ([#6745](https://github.com/opentrons/opentrons/issues/6745)) ([e684f7d](https://github.com/opentrons/opentrons/commit/e684f7d)), closes [#6508](https://github.com/opentrons/opentrons/issues/6508)
* **protocol-designer:** update air gap dispense tooltip ([#6753](https://github.com/opentrons/opentrons/issues/6753)) ([b6ace2d](https://github.com/opentrons/opentrons/commit/b6ace2d)), closes [#6714](https://github.com/opentrons/opentrons/issues/6714)
* **robot-server:** create models for basic pipetting session commands ([#6560](https://github.com/opentrons/opentrons/issues/6560)) ([b31377b](https://github.com/opentrons/opentrons/commit/b31377b)), closes [#6556](https://github.com/opentrons/opentrons/issues/6556)
* **robot-server:** http basic pipetting session - command routing and state store ([#6606](https://github.com/opentrons/opentrons/issues/6606)) ([534f038](https://github.com/opentrons/opentrons/commit/534f038)), closes [#6559](https://github.com/opentrons/opentrons/issues/6559)
* **robot-server:** http basic pipetting- load labware ([#6640](https://github.com/opentrons/opentrons/issues/6640)) ([afeee2e](https://github.com/opentrons/opentrons/commit/afeee2e))
* **robot-server:** live protocol session handles LoadInstrument command ([#6639](https://github.com/opentrons/opentrons/issues/6639)) ([969112c](https://github.com/opentrons/opentrons/commit/969112c)), closes [#6602](https://github.com/opentrons/opentrons/issues/6602)
* **robot-server,app:** extend pipette offset cal to include tip length cal if needed ([#6641](https://github.com/opentrons/opentrons/issues/6641)) ([5819f29](https://github.com/opentrons/opentrons/commit/5819f29))
* **api:** Add calibration status to all of the calibration data models ([#6648](https://github.com/Opentrons/opentrons/issues/6648)) ([2753734](https://github.com/Opentrons/opentrons/commit/2753734))
* **api:** add source blowout location option to transfer function ([#6670](https://github.com/Opentrons/opentrons/issues/6670)) ([811a767](https://github.com/Opentrons/opentrons/commit/811a767)), closes [#6576](https://github.com/Opentrons/opentrons/issues/6576)
* **api:** pin JSON protocols to APIVersion 2.8 ([#6691](https://github.com/Opentrons/opentrons/issues/6691)) ([0804474](https://github.com/Opentrons/opentrons/commit/0804474)), closes [#6681](https://github.com/Opentrons/opentrons/issues/6681)
* **api:** Use more human-friendly names in "API version too low" error messages ([#6662](https://github.com/Opentrons/opentrons/issues/6662)) ([55daec2](https://github.com/Opentrons/opentrons/commit/55daec2))
* **app:** update pipette attach flow to include calibration ([#6760](https://github.com/Opentrons/opentrons/issues/6760)) ([c873113](https://github.com/Opentrons/opentrons/commit/c873113)), closes [#2130](https://github.com/Opentrons/opentrons/issues/2130)
* **labware-library:** Add labware creator visibility ([#6667](https://github.com/Opentrons/opentrons/issues/6667)) ([eb906a3](https://github.com/Opentrons/opentrons/commit/eb906a3)), closes [#6307](https://github.com/Opentrons/opentrons/issues/6307)
* **protocol designer:** put mix delay behind FF ([#6619](https://github.com/Opentrons/opentrons/issues/6619)) ([5c7bf7d](https://github.com/Opentrons/opentrons/commit/5c7bf7d))
* **protocol-designer:** add air gap dispense FF ([#6647](https://github.com/Opentrons/opentrons/issues/6647)) ([4c53b73](https://github.com/Opentrons/opentrons/commit/4c53b73)), closes [#6522](https://github.com/Opentrons/opentrons/issues/6522)
* **protocol-designer:** add air gap dispense for fields to move liquid form ([#6658](https://github.com/Opentrons/opentrons/issues/6658)) ([a6c1930](https://github.com/Opentrons/opentrons/commit/a6c1930)), closes [#6499](https://github.com/Opentrons/opentrons/issues/6499)
* **protocol-designer:** add dispenseAirGapVolume arg ([#6656](https://github.com/Opentrons/opentrons/issues/6656)) ([4703456](https://github.com/Opentrons/opentrons/commit/4703456)), closes [#6653](https://github.com/Opentrons/opentrons/issues/6653)
* **protocol-designer:** add mix delay commands ([#6631](https://github.com/Opentrons/opentrons/issues/6631)) ([953d454](https://github.com/Opentrons/opentrons/commit/953d454)), closes [#6498](https://github.com/Opentrons/opentrons/issues/6498)
* **protocol-designer:** add mix delay default values ([#6607](https://github.com/Opentrons/opentrons/issues/6607)) ([db2b331](https://github.com/Opentrons/opentrons/commit/db2b331)), closes [#6579](https://github.com/Opentrons/opentrons/issues/6579)
* **protocol-designer:** bump pd to 5.1.0; add migration ([#6583](https://github.com/Opentrons/opentrons/issues/6583)) ([d6ba128](https://github.com/Opentrons/opentrons/commit/d6ba128)), closes [#6573](https://github.com/Opentrons/opentrons/issues/6573) [#6634](https://github.com/Opentrons/opentrons/issues/6634)
* **protocol-designer:** implement dispense > air gap for Transfer command creator ([#6745](https://github.com/Opentrons/opentrons/issues/6745)) ([e684f7d](https://github.com/Opentrons/opentrons/commit/e684f7d)), closes [#6508](https://github.com/Opentrons/opentrons/issues/6508)
* **protocol-designer:** update air gap dispense tooltip ([#6753](https://github.com/Opentrons/opentrons/issues/6753)) ([b6ace2d](https://github.com/Opentrons/opentrons/commit/b6ace2d)), closes [#6714](https://github.com/Opentrons/opentrons/issues/6714)
* **robot-server:** create models for basic pipetting session commands ([#6560](https://github.com/Opentrons/opentrons/issues/6560)) ([b31377b](https://github.com/Opentrons/opentrons/commit/b31377b)), closes [#6556](https://github.com/Opentrons/opentrons/issues/6556)
* **robot-server:** http basic pipetting session - command routing and state store ([#6606](https://github.com/Opentrons/opentrons/issues/6606)) ([534f038](https://github.com/Opentrons/opentrons/commit/534f038)), closes [#6559](https://github.com/Opentrons/opentrons/issues/6559)
* **robot-server:** http basic pipetting- load labware ([#6640](https://github.com/Opentrons/opentrons/issues/6640)) ([afeee2e](https://github.com/Opentrons/opentrons/commit/afeee2e))
* **robot-server:** live protocol session handles LoadInstrument command ([#6639](https://github.com/Opentrons/opentrons/issues/6639)) ([969112c](https://github.com/Opentrons/opentrons/commit/969112c)), closes [#6602](https://github.com/Opentrons/opentrons/issues/6602)
* **robot-server,app:** extend pipette offset cal to include tip length cal if needed ([#6641](https://github.com/Opentrons/opentrons/issues/6641)) ([5819f29](https://github.com/Opentrons/opentrons/commit/5819f29))





### BREAKING CHANGES

* **robot-server:** Requests without Opentrons-Version or with a value lower than 2 will be rejected

([8e7059a](https://github.com/Opentrons/opentrons/commit/8e7059a)), closes [#6781](https://github.com/Opentrons/opentrons/issues/6781)




## [3.21.2](https://github.com/Opentrons/opentrons/compare/v3.21.1...v3.21.2) (2020-10-16)


* **api:** Be fault-tolerant to bad deck cal data ([#6803](https://github.com/Opentrons/opentrons/issues/6803)) ([43ba721](https://github.com/Opentrons/opentrons/commit/43ba721))
* **app:** add analytics and support tracking to ignore app update ([#6790](https://github.com/Opentrons/opentrons/issues/6790)) ([079c2e9](https://github.com/Opentrons/opentrons/commit/079c2e9))
* **app-shell:** ensure robot update download folder exists before caching manifest ([#6787](https://github.com/Opentrons/opentrons/issues/6787)) ([200b3d5](https://github.com/Opentrons/opentrons/commit/200b3d5)), closes [#6786](https://github.com/Opentrons/opentrons/issues/6786)





## [3.21.1](https://github.com/Opentrons/opentrons/compare/v3.21.0...v3.21.1) (2020-10-14)


### Features

* **app:** allow app update pop-up notifications to be disabled ([#6715](https://github.com/Opentrons/opentrons/issues/6715)) ([7982d5f](https://github.com/Opentrons/opentrons/commit/7982d5f)), closes [#6684](https://github.com/Opentrons/opentrons/issues/6684)
* **components:** add primitives-based BaseModal layout component ([#6687](https://github.com/Opentrons/opentrons/issues/6687)) ([dfa0b0d](https://github.com/Opentrons/opentrons/commit/dfa0b0d))





# [3.21.0](https://github.com/Opentrons/opentrons/compare/v3.20.1...v3.21.0) (2020-09-30)


### Bug Fixes

* **api:** can't inhibit creating Session in build_and_prep if http protocol sessions are enabled because.... THATS HOW PROTOCOL SESSIONS RUN PROTOCOLS ([#6345](https://github.com/Opentrons/opentrons/issues/6345)) ([b49c2a1](https://github.com/Opentrons/opentrons/commit/b49c2a1))
* **api:** Document deck slot deletion ([#6260](https://github.com/Opentrons/opentrons/issues/6260)) ([b37e23a](https://github.com/Opentrons/opentrons/commit/b37e23a)), closes [#6214](https://github.com/Opentrons/opentrons/issues/6214)
* **api:** fix Deck.get_slot_center z value ([#6435](https://github.com/Opentrons/opentrons/issues/6435)) ([ddc8965](https://github.com/Opentrons/opentrons/commit/ddc8965))
* **api:** fix InstrumentContext.home_plunger ([#6367](https://github.com/Opentrons/opentrons/issues/6367)) ([120d68a](https://github.com/Opentrons/opentrons/commit/120d68a))
* **api:** limit calibration jogs when going upward ([#6565](https://github.com/Opentrons/opentrons/issues/6565)) ([5a82384](https://github.com/Opentrons/opentrons/commit/5a82384)), closes [#6562](https://github.com/Opentrons/opentrons/issues/6562)
* **api:** Prevent extra pipette movement after homing ([#6364](https://github.com/Opentrons/opentrons/issues/6364)) ([1ea97c7](https://github.com/Opentrons/opentrons/commit/1ea97c7))
* **api:** thermocycler hold_time bug ([#6479](https://github.com/Opentrons/opentrons/issues/6479)) ([b9d6498](https://github.com/Opentrons/opentrons/commit/b9d6498))
* **api:** typo in should_dodge_thermocycler ([#6458](https://github.com/Opentrons/opentrons/issues/6458)) ([8e446e1](https://github.com/Opentrons/opentrons/commit/8e446e1))
* **app:** cache robot releases manifest for offline usage ([#6494](https://github.com/Opentrons/opentrons/issues/6494)) ([5308562](https://github.com/Opentrons/opentrons/commit/5308562)), closes [#5992](https://github.com/Opentrons/opentrons/issues/5992)
* **app:** do not set the user's Intercom name to "Unknown User" ([#6468](https://github.com/Opentrons/opentrons/issues/6468)) ([66662a4](https://github.com/Opentrons/opentrons/commit/66662a4)), closes [#6461](https://github.com/Opentrons/opentrons/issues/6461)
* **app:** Ensure cal check exit button on the title modal only displays if there is no primary exit ([#6616](https://github.com/Opentrons/opentrons/issues/6616)) ([88bb0a8](https://github.com/Opentrons/opentrons/commit/88bb0a8))
* **app:** fix layout of calibration panel complete confirmation button ([#6509](https://github.com/Opentrons/opentrons/issues/6509)) ([093bddb](https://github.com/Opentrons/opentrons/commit/093bddb))
* **app:** flip modules on deck map when in slots 3, 6, or 9 ([#6383](https://github.com/Opentrons/opentrons/issues/6383)) ([d0347da](https://github.com/Opentrons/opentrons/commit/d0347da)), closes [#4422](https://github.com/Opentrons/opentrons/issues/4422)
* **app:** make cal commands chain instead of race ([#6561](https://github.com/Opentrons/opentrons/issues/6561)) ([20f01bc](https://github.com/Opentrons/opentrons/commit/20f01bc)), closes [#6535](https://github.com/Opentrons/opentrons/issues/6535)
* **app:** make tip length calibration use generic calibration move to tiprack command ([#6489](https://github.com/Opentrons/opentrons/issues/6489)) ([b5a59e0](https://github.com/Opentrons/opentrons/commit/b5a59e0))
* **app:** properly enable/disable robot update from file button ([#6483](https://github.com/Opentrons/opentrons/issues/6483)) ([a996cdc](https://github.com/Opentrons/opentrons/commit/a996cdc)), closes [#5429](https://github.com/Opentrons/opentrons/issues/5429)
* **app:** sync robot time with app time on connect ([#6501](https://github.com/Opentrons/opentrons/issues/6501)) ([66dc626](https://github.com/Opentrons/opentrons/commit/66dc626)), closes [#3872](https://github.com/Opentrons/opentrons/issues/3872)
* **app:** temporary fix for chained command race conditions in cal flows to unblock user testing ([#6530](https://github.com/Opentrons/opentrons/issues/6530)) ([3c17d9e](https://github.com/Opentrons/opentrons/commit/3c17d9e))
* **app, app-shell:** use mtime for custom labware date display ([#6396](https://github.com/Opentrons/opentrons/issues/6396)) ([45f7ec8](https://github.com/Opentrons/opentrons/commit/45f7ec8)), closes [#6381](https://github.com/Opentrons/opentrons/issues/6381)
* **labware-library:** fix test protocol well order bug ([#6393](https://github.com/Opentrons/opentrons/issues/6393)) ([d6c42bf](https://github.com/Opentrons/opentrons/commit/d6c42bf))
* **protocol-designer:** fix dismissing warnings for unsaved step forms ([#6503](https://github.com/Opentrons/opentrons/issues/6503)) ([1d37f09](https://github.com/Opentrons/opentrons/commit/1d37f09)), closes [#6263](https://github.com/Opentrons/opentrons/issues/6263)
* **protocol-designer:** fix scroll position of MoreOptionsModal ([#6515](https://github.com/Opentrons/opentrons/issues/6515)) ([2bf776b](https://github.com/Opentrons/opentrons/commit/2bf776b)), closes [#6156](https://github.com/Opentrons/opentrons/issues/6156)
* **protocol-designer:** Rename aspirate/dispense delay tip position fields ([#6324](https://github.com/Opentrons/opentrons/issues/6324)) ([bf4a959](https://github.com/Opentrons/opentrons/commit/bf4a959)), closes [#6300](https://github.com/Opentrons/opentrons/issues/6300)
* **robot-server:** add inspectingTip state to deck calibration ([#6313](https://github.com/Opentrons/opentrons/issues/6313)) ([c1fd90a](https://github.com/Opentrons/opentrons/commit/c1fd90a))
* **robot-server:** calibraiton flows - fix assert statements ([#6529](https://github.com/Opentrons/opentrons/issues/6529)) ([a269b0f](https://github.com/Opentrons/opentrons/commit/a269b0f))
* **robot-server:** correct move to deck safety buffer in y ([#6478](https://github.com/Opentrons/opentrons/issues/6478)) ([a124bb5](https://github.com/Opentrons/opentrons/commit/a124bb5))
* **robot-server:** datetime responses are missing timezone. ([#6375](https://github.com/Opentrons/opentrons/issues/6375)) ([1a65835](https://github.com/Opentrons/opentrons/commit/1a65835)), closes [#6374](https://github.com/Opentrons/opentrons/issues/6374)
* **robot-server:** deck calibration flow clean up ([#6430](https://github.com/Opentrons/opentrons/issues/6430)) ([986e5d1](https://github.com/Opentrons/opentrons/commit/986e5d1))
* **robot-server:** fix multi channel move in tip length cal ([#6319](https://github.com/Opentrons/opentrons/issues/6319)) ([898a24b](https://github.com/Opentrons/opentrons/commit/898a24b))
* **robot-server:** make systemd startup more tolerant ([#6397](https://github.com/Opentrons/opentrons/issues/6397)) ([86fbc47](https://github.com/Opentrons/opentrons/commit/86fbc47))
* **robot-server:** only import type_extension during type checking ([#6462](https://github.com/Opentrons/opentrons/issues/6462)) ([b3c844d](https://github.com/Opentrons/opentrons/commit/b3c844d))
* **robot-server:** pip offset: save offset from reference point ([#6586](https://github.com/Opentrons/opentrons/issues/6586)) ([ef722ba](https://github.com/Opentrons/opentrons/commit/ef722ba))
* **robot-server:** pipette offset - uses z ref height to move to point ([#6514](https://github.com/Opentrons/opentrons/issues/6514)) ([58116d0](https://github.com/Opentrons/opentrons/commit/58116d0)), closes [#6424](https://github.com/Opentrons/opentrons/issues/6424)
* **robot-server:** pipette offset cal - add missing arg to save offset data ([#6520](https://github.com/Opentrons/opentrons/issues/6520)) ([13c2b27](https://github.com/Opentrons/opentrons/commit/13c2b27))
* **robot-server:** tip length cal -  use nozzle height for tip length calculation ([#6527](https://github.com/Opentrons/opentrons/issues/6527)) ([b87df49](https://github.com/Opentrons/opentrons/commit/b87df49))
* **shared-data:** fix typos (themocycler->thermocycler) ([1689fa8](https://github.com/Opentrons/opentrons/commit/1689fa8))


### Features

* **api:** Add all tip handling and tracking functions for the paired instrument context ([#6550](https://github.com/Opentrons/opentrons/issues/6550)) ([d9cf00e](https://github.com/Opentrons/opentrons/commit/d9cf00e))
* **api:** Add pipette pairing to the command log and support in rpc ([#6577](https://github.com/Opentrons/opentrons/issues/6577)) ([75a7545](https://github.com/Opentrons/opentrons/commit/75a7545))
* **api:** Add skeleton Pipette pairing context ([#6472](https://github.com/Opentrons/opentrons/issues/6472)) ([eb030d1](https://github.com/Opentrons/opentrons/commit/eb030d1))
* **api:** adding deep_get utility function ([#6338](https://github.com/Opentrons/opentrons/issues/6338)) ([f83dc3e](https://github.com/Opentrons/opentrons/commit/f83dc3e))
* **api:** Allow pipette pairing for aspirate and dispense functions ([#6450](https://github.com/Opentrons/opentrons/issues/6450)) ([f1cbe81](https://github.com/Opentrons/opentrons/commit/f1cbe81))
* **api:** Lay foundation on the backend to support simultaneous axis movement ([#6373](https://github.com/Opentrons/opentrons/issues/6373)) ([82e5edf](https://github.com/Opentrons/opentrons/commit/82e5edf))
* **api:** Save new robot calibration in a separate location ([#6281](https://github.com/Opentrons/opentrons/issues/6281)) ([03c3051](https://github.com/Opentrons/opentrons/commit/03c3051))
* **api:** Support pipette pairing for pickup and drop tip ([#6390](https://github.com/Opentrons/opentrons/issues/6390)) ([a3d4d12](https://github.com/Opentrons/opentrons/commit/a3d4d12))
* **api, robot-server:** expose pipette offset cal via http ([#6563](https://github.com/Opentrons/opentrons/issues/6563)) ([ffd3439](https://github.com/Opentrons/opentrons/commit/ffd3439)), closes [#6429](https://github.com/Opentrons/opentrons/issues/6429)
* **api,robot-server:** Robot server rpc http ff ([#6310](https://github.com/Opentrons/opentrons/issues/6310)) ([ba0fc92](https://github.com/Opentrons/opentrons/commit/ba0fc92)), closes [#6305](https://github.com/Opentrons/opentrons/issues/6305)
* **app:** add Jupyter Notebook button to robot's Advanced Settings ([#6474](https://github.com/Opentrons/opentrons/issues/6474)) ([d615d2d](https://github.com/Opentrons/opentrons/commit/d615d2d)), closes [#6102](https://github.com/Opentrons/opentrons/issues/6102)
* **app:** rename base -> block for TC copy ([#6524](https://github.com/Opentrons/opentrons/issues/6524)) ([abd6b65](https://github.com/Opentrons/opentrons/commit/abd6b65)), closes [#6086](https://github.com/Opentrons/opentrons/issues/6086)
* **protocol designer:** remove mix tip position fields ([#6590](https://github.com/Opentrons/opentrons/issues/6590)) ([eb058a2](https://github.com/Opentrons/opentrons/commit/eb058a2)), closes [#6589](https://github.com/Opentrons/opentrons/issues/6589)
* **protocol-designer:** account for two air gaps when bumping down multi aspirate to single path ([#6477](https://github.com/Opentrons/opentrons/issues/6477)) ([897e711](https://github.com/Opentrons/opentrons/commit/897e711)), closes [#6469](https://github.com/Opentrons/opentrons/issues/6469)
* **protocol-designer:** add 3.20 export warning modal ([#6436](https://github.com/Opentrons/opentrons/issues/6436)) ([70cb5bb](https://github.com/Opentrons/opentrons/commit/70cb5bb)), closes [#6278](https://github.com/Opentrons/opentrons/issues/6278)
* **protocol-designer:** add air gap commands and export protocols as v5 ([#6401](https://github.com/Opentrons/opentrons/issues/6401)) ([a16351e](https://github.com/Opentrons/opentrons/commit/a16351e))
* **protocol-designer:** add air gap formToArgs ([#6334](https://github.com/Opentrons/opentrons/issues/6334)) ([16684e4](https://github.com/Opentrons/opentrons/commit/16684e4)), closes [#6219](https://github.com/Opentrons/opentrons/issues/6219) [#6217](https://github.com/Opentrons/opentrons/issues/6217)
* **protocol-designer:** Add defaults for air gap and delay ([#6341](https://github.com/Opentrons/opentrons/issues/6341)) ([8b9ba81](https://github.com/Opentrons/opentrons/commit/8b9ba81)), closes [#6058](https://github.com/Opentrons/opentrons/issues/6058)
* **protocol-designer:** add delay field to mix form ([#6574](https://github.com/Opentrons/opentrons/issues/6574)) ([70b5344](https://github.com/Opentrons/opentrons/commit/70b5344)), closes [#6347](https://github.com/Opentrons/opentrons/issues/6347)
* **protocol-designer:** add migration for new fields; bump to 5.0.0 ([#6357](https://github.com/Opentrons/opentrons/issues/6357)) ([3377ff7](https://github.com/Opentrons/opentrons/commit/3377ff7)), closes [#6183](https://github.com/Opentrons/opentrons/issues/6183) [#6276](https://github.com/Opentrons/opentrons/issues/6276)
* **protocol-designer:** add new air gap / delay announcement ([#6414](https://github.com/Opentrons/opentrons/issues/6414)) ([2ea012f](https://github.com/Opentrons/opentrons/commit/2ea012f)), closes [#6411](https://github.com/Opentrons/opentrons/issues/6411)
* **protocol-designer:** add OT_PD_ENABLE_MIX_DELAY feature flag ([#6525](https://github.com/Opentrons/opentrons/issues/6525)) ([862ab14](https://github.com/Opentrons/opentrons/commit/862ab14)), closes [#6523](https://github.com/Opentrons/opentrons/issues/6523)
* **protocol-designer:** adjust disposal volume and path for air gap ([#6372](https://github.com/Opentrons/opentrons/issues/6372)) ([aa70623](https://github.com/Opentrons/opentrons/commit/aa70623)), closes [#6022](https://github.com/Opentrons/opentrons/issues/6022)
* **protocol-designer:** apply delays to aspirates/dispenses in a mix  ([#6365](https://github.com/Opentrons/opentrons/issues/6365)) ([a34e3f4](https://github.com/Opentrons/opentrons/commit/a34e3f4)), closes [#6306](https://github.com/Opentrons/opentrons/issues/6306)
* **protocol-designer:** apply delays to pre-wet ([#6380](https://github.com/Opentrons/opentrons/issues/6380)) ([516783a](https://github.com/Opentrons/opentrons/commit/516783a)), closes [#6021](https://github.com/Opentrons/opentrons/issues/6021)
* **protocol-designer:** clamp air gap volume when tiprack changes ([#6320](https://github.com/Opentrons/opentrons/issues/6320)) ([1af3bae](https://github.com/Opentrons/opentrons/commit/1af3bae)), closes [#6264](https://github.com/Opentrons/opentrons/issues/6264)
* **protocol-designer:** export airgap protocols as v5 ([#6433](https://github.com/Opentrons/opentrons/issues/6433)) ([a3c960d](https://github.com/Opentrons/opentrons/commit/a3c960d)), closes [#6400](https://github.com/Opentrons/opentrons/issues/6400)
* **protocol-designer:** implement formToArgs for delays ([#6301](https://github.com/Opentrons/opentrons/issues/6301)) ([6681cfb](https://github.com/Opentrons/opentrons/commit/6681cfb)), closes [#6219](https://github.com/Opentrons/opentrons/issues/6219)
* **protocol-designer:** minor copy change for aspirate delay tooltip ([#6449](https://github.com/Opentrons/opentrons/issues/6449)) ([e00fcc1](https://github.com/Opentrons/opentrons/commit/e00fcc1)), closes [#6448](https://github.com/Opentrons/opentrons/issues/6448)
* **protocol-designer:** remove air gap + delay FF ([#6434](https://github.com/Opentrons/opentrons/issues/6434)) ([e3906f5](https://github.com/Opentrons/opentrons/commit/e3906f5)), closes [#6277](https://github.com/Opentrons/opentrons/issues/6277)
* **protocol-designer:** setup Mixpanel and add initial events ([#6511](https://github.com/Opentrons/opentrons/issues/6511)) ([1959639](https://github.com/Opentrons/opentrons/commit/1959639)), closes [#6057](https://github.com/Opentrons/opentrons/issues/6057)
* **protocol-designer:** update mixFormToArgs with new delay fields ([#6575](https://github.com/Opentrons/opentrons/issues/6575)) ([ff69de7](https://github.com/Opentrons/opentrons/commit/ff69de7)), closes [#6348](https://github.com/Opentrons/opentrons/issues/6348)
* **protocol-designer:** update tooltips for air gap + delay ([#6404](https://github.com/Opentrons/opentrons/issues/6404)) ([89e63b4](https://github.com/Opentrons/opentrons/commit/89e63b4)), closes [#6402](https://github.com/Opentrons/opentrons/issues/6402)
* **robot_server:** add system/time GET & PUT endpoints ([#6403](https://github.com/Opentrons/opentrons/issues/6403)) ([c3e5b46](https://github.com/Opentrons/opentrons/commit/c3e5b46))
* **robot-server:** Executor for protocol session ([#6262](https://github.com/Opentrons/opentrons/issues/6262)) ([7b473c1](https://github.com/Opentrons/opentrons/commit/7b473c1)), closes [#6192](https://github.com/Opentrons/opentrons/issues/6192) [#6194](https://github.com/Opentrons/opentrons/issues/6194) [#6195](https://github.com/Opentrons/opentrons/issues/6195) [#6196](https://github.com/Opentrons/opentrons/issues/6196)
* **robot-server:** Robot server protocol session model ([#6371](https://github.com/Opentrons/opentrons/issues/6371)) ([973ee18](https://github.com/Opentrons/opentrons/commit/973ee18)), closes [#6225](https://github.com/Opentrons/opentrons/issues/6225)
* **robot-server,app:** add download deck calibration button ([#6453](https://github.com/Opentrons/opentrons/issues/6453)) ([b3b365d](https://github.com/Opentrons/opentrons/commit/b3b365d)), closes [#6055](https://github.com/Opentrons/opentrons/issues/6055)


### Performance Improvements

* **protocol-designer:** strip no-op mixes from robot state generation ([#6488](https://github.com/Opentrons/opentrons/issues/6488)) ([4885b50](https://github.com/Opentrons/opentrons/commit/4885b50)), closes [#6176](https://github.com/Opentrons/opentrons/issues/6176)





## [3.20.1](https://github.com/Opentrons/opentrons/compare/v3.20.0...v3.20.1) (2020-08-25)

### Bug Fixes

* **api, app:** Ensure index file exists before reading from it ([#6410](https://github.com/Opentrons/opentrons/issues/6410)) ([d616d0b](https://github.com/Opentrons/opentrons/commit/d616d0b)), closes [#6394](https://github.com/Opentrons/opentrons/issues/6394)





# [3.20.0](https://github.com/Opentrons/opentrons/compare/v3.19.0...v3.20.0) (2020-08-13)

### Bug Fixes

* **api:** use the hash-with-parent for rpc cal hashes ([#6355](https://github.com/Opentrons/opentrons/issues/6355)) ([6675154](https://github.com/Opentrons/opentrons/commit/6675154))
* **api:** Save v2 labware in api v1 with URIs ([#6325](https://github.com/Opentrons/opentrons/issues/6325)) ([c6e3688](https://github.com/Opentrons/opentrons/commit/c6e3688))
* **robot-server:** Robot server createParams bug ([fa7a35e](https://github.com/Opentrons/opentrons/commit/fa7a35e))
* **app:** fix tip probe button in apiV1 protocols ([#6318](https://github.com/Opentrons/opentrons/issues/6318)) ([3b75f5d](https://github.com/Opentrons/opentrons/commit/3b75f5d))
* **app:** fix labware list uniqueing logic for file info page ([#6309](https://github.com/Opentrons/opentrons/issues/6309)) ([ca85b7e](https://github.com/Opentrons/opentrons/commit/ca85b7e))
* **api:** add missing space to runlog entry for set block temperature ([#6259](https://github.com/Opentrons/opentrons/issues/6259)) ([2c24069](https://github.com/Opentrons/opentrons/commit/2c24069)), closes [#6258](https://github.com/Opentrons/opentrons/issues/6258)
* **api:** avoid hitting endstop during retract fast home ([#6299](https://github.com/Opentrons/opentrons/issues/6299)) ([997e156](https://github.com/Opentrons/opentrons/commit/997e156))
* **api:** Clarify what is behind GPIO connection problems ([#6204](https://github.com/Opentrons/opentrons/issues/6204)) ([5148f96](https://github.com/Opentrons/opentrons/commit/5148f96)), closes [#6164](https://github.com/Opentrons/opentrons/issues/6164)
* **api:** Commands log: misleading "rate" for aspirate/dispense ([#6189](https://github.com/Opentrons/opentrons/issues/6189)) ([74dad72](https://github.com/Opentrons/opentrons/commit/74dad72))
* **api:** db write optimization ([#6033](https://github.com/Opentrons/opentrons/issues/6033)) ([a62b833](https://github.com/Opentrons/opentrons/commit/a62b833)), closes [#6029](https://github.com/Opentrons/opentrons/issues/6029) [#5983](https://github.com/Opentrons/opentrons/issues/5983)
* **api:** don't stomp other loggers in log config ([#6286](https://github.com/Opentrons/opentrons/issues/6286)) ([b6d6e18](https://github.com/Opentrons/opentrons/commit/b6d6e18))
* **api:** Ensure old calibration index entries are migrated over before displaying data ([#6297](https://github.com/Opentrons/opentrons/issues/6297)) ([f242c4b](https://github.com/Opentrons/opentrons/commit/f242c4b))
* **api:** fix APIv1 GPIO ctl for cmdline and jupyter protocol execution ([#6091](https://github.com/Opentrons/opentrons/issues/6091)) ([09b6459](https://github.com/Opentrons/opentrons/commit/09b6459)), closes [#6045](https://github.com/Opentrons/opentrons/issues/6045)
* **api:** fix load tip length calibration exception handling ([#6206](https://github.com/Opentrons/opentrons/issues/6206)) ([e89cda2](https://github.com/Opentrons/opentrons/commit/e89cda2))
* **api:** get_parent_identifier should get parent identifier ([#6295](https://github.com/Opentrons/opentrons/issues/6295)) ([9ef28a8](https://github.com/Opentrons/opentrons/commit/9ef28a8))
* **api:** move TypedDicts to dev_types for type checking only ([#6185](https://github.com/Opentrons/opentrons/issues/6185)) ([34633f8](https://github.com/Opentrons/opentrons/commit/34633f8))
* **api:** set parent for in-slot offsets to empty ([#6211](https://github.com/Opentrons/opentrons/issues/6211)) ([463d56d](https://github.com/Opentrons/opentrons/commit/463d56d))
* **api:** verify lid target temp has propagated to TC status after set_lid_temperature ([#6143](https://github.com/Opentrons/opentrons/issues/6143)) ([676f129](https://github.com/Opentrons/opentrons/commit/676f129))
* **api, app:** Clear instrument offset before performing deck calibration, don't restart ([#6208](https://github.com/Opentrons/opentrons/issues/6208)) ([cefa633](https://github.com/Opentrons/opentrons/commit/cefa633)), closes [#5022](https://github.com/Opentrons/opentrons/issues/5022)
* **api, robot-server:** remove the deprecated useV1HttpApi config setting and use_fast_api feature flag. ([#6082](https://github.com/Opentrons/opentrons/issues/6082)) ([83d7c7d](https://github.com/Opentrons/opentrons/commit/83d7c7d)), closes [#6079](https://github.com/Opentrons/opentrons/issues/6079)
* **app:** correctly namespace calibration check command ([#6127](https://github.com/Opentrons/opentrons/issues/6127)) ([59faac6](https://github.com/Opentrons/opentrons/commit/59faac6))
* **app:** don't doublecount labware on modules ([#6246](https://github.com/Opentrons/opentrons/issues/6246)) ([837f153](https://github.com/Opentrons/opentrons/commit/837f153))
* **app:** fix calibrate to trough bottom image for multi pipettes ([#5974](https://github.com/Opentrons/opentrons/issues/5974)) ([dac535f](https://github.com/Opentrons/opentrons/commit/dac535f)), closes [#4734](https://github.com/Opentrons/opentrons/issues/4734)
* **app:** fix data reads from JSON Protocols later than v3 ([#6284](https://github.com/Opentrons/opentrons/issues/6284)) ([f0f7109](https://github.com/Opentrons/opentrons/commit/f0f7109)), closes [#6235](https://github.com/Opentrons/opentrons/issues/6235)
* **app:** show alert if WS closes **or** robot becomes unhealthy ([#6233](https://github.com/Opentrons/opentrons/issues/6233)) ([2cd4fd1](https://github.com/Opentrons/opentrons/commit/2cd4fd1))
* **app:** simplify discovery state to avoid stale IPs and health data ([#6193](https://github.com/Opentrons/opentrons/issues/6193)) ([0e089a7](https://github.com/Opentrons/opentrons/commit/0e089a7)), closes [#5985](https://github.com/Opentrons/opentrons/issues/5985) [#5250](https://github.com/Opentrons/opentrons/issues/5250)
* **app:** update link to support center ([#6087](https://github.com/Opentrons/opentrons/issues/6087)) ([be05ef9](https://github.com/Opentrons/opentrons/commit/be05ef9))
* **comp-lib:** Update SlotMap prop names ([#6124](https://github.com/Opentrons/opentrons/issues/6124)) ([392e35c](https://github.com/Opentrons/opentrons/commit/392e35c))
* **docs:** Remove legacy intercom script ([#6298](https://github.com/Opentrons/opentrons/issues/6298)) ([7d38504](https://github.com/Opentrons/opentrons/commit/7d38504))
* **protocol-designer:** fix TC profile step lid label text ([#6069](https://github.com/Opentrons/opentrons/issues/6069)) ([39ed163](https://github.com/Opentrons/opentrons/commit/39ed163)), closes [#6060](https://github.com/Opentrons/opentrons/issues/6060)
* **protocol-designer:** lazy load air gap/delay FF from local storage ([#6252](https://github.com/Opentrons/opentrons/issues/6252)) ([414dc0b](https://github.com/Opentrons/opentrons/commit/414dc0b))
* **protocol-designer:** new TC steps default to last TC module state ([#6090](https://github.com/Opentrons/opentrons/issues/6090)) ([1d79fdc](https://github.com/Opentrons/opentrons/commit/1d79fdc)), closes [#6068](https://github.com/Opentrons/opentrons/issues/6068)
* **protocol-designer:** Update TC timeline text alignment ([#6202](https://github.com/Opentrons/opentrons/issues/6202)) ([98eeec1](https://github.com/Opentrons/opentrons/commit/98eeec1)), closes [#6138](https://github.com/Opentrons/opentrons/issues/6138)
* **protocol-designer:** Update temperature field min sizing tc state ([#6113](https://github.com/Opentrons/opentrons/issues/6113)) ([1163a36](https://github.com/Opentrons/opentrons/commit/1163a36))
* **robot-server:** correct return tip height, only load block when present ([#6224](https://github.com/Opentrons/opentrons/issues/6224)) ([3bf6b26](https://github.com/Opentrons/opentrons/commit/3bf6b26))
* **robot-server:** fix a merge race condition. ([#6030](https://github.com/Opentrons/opentrons/issues/6030)) ([628049c](https://github.com/Opentrons/opentrons/commit/628049c))
* **robot-server:** fix typo in change pipette position ([#6083](https://github.com/Opentrons/opentrons/issues/6083)) ([67c3332](https://github.com/Opentrons/opentrons/commit/67c3332))
* **robot-server:** force pydantic to version 1.4 as that is what is on the robot. ([#6037](https://github.com/Opentrons/opentrons/issues/6037)) ([aa5bcc2](https://github.com/Opentrons/opentrons/commit/aa5bcc2))
* **robot-server:** Log uncaught exceptions ([#6209](https://github.com/Opentrons/opentrons/issues/6209)) ([0e1b15b](https://github.com/Opentrons/opentrons/commit/0e1b15b))
* **robot-server:** tavern test setup fix ([#6025](https://github.com/Opentrons/opentrons/issues/6025)) ([7b17c83](https://github.com/Opentrons/opentrons/commit/7b17c83))
* **robot-server:** websockets has a 1mb upload limit. Use wsproto instead. ([#6229](https://github.com/Opentrons/opentrons/issues/6229)) ([c23e980](https://github.com/Opentrons/opentrons/commit/c23e980)), closes [#6159](https://github.com/Opentrons/opentrons/issues/6159)
* **robot-server, app:** fix broken chained commands in tip length cal ([#6212](https://github.com/Opentrons/opentrons/issues/6212)) ([727ba64](https://github.com/Opentrons/opentrons/commit/727ba64))
* **shared-data:** do not show calibration block defs in the labware library ([#6031](https://github.com/Opentrons/opentrons/issues/6031)) ([c248d32](https://github.com/Opentrons/opentrons/commit/c248d32))
* **shared-data:** fix well bottom shape of nest_96_wellplate_2ml_deep ([#6216](https://github.com/Opentrons/opentrons/issues/6216)) ([6350511](https://github.com/Opentrons/opentrons/commit/6350511)), closes [#6171](https://github.com/Opentrons/opentrons/issues/6171)


### Features

* **api:**  Use 10mm/s-equivalent flow rates for GEN2 singles in API Version 2.6 ([#6283](https://github.com/Opentrons/opentrons/issues/6283)) ([70c54e2](https://github.com/Opentrons/opentrons/commit/70c54e2)), closes [#6279](https://github.com/Opentrons/opentrons/issues/6279) [#5968](https://github.com/Opentrons/opentrons/issues/5968)
* **api:** add JSON v5 executor and schema ([#6239](https://github.com/Opentrons/opentrons/issues/6239)) ([17969d6](https://github.com/Opentrons/opentrons/commit/17969d6)), closes [#6228](https://github.com/Opentrons/opentrons/issues/6228)
* **api:** ensure stable load_module order in JSON executor ([#5995](https://github.com/Opentrons/opentrons/issues/5995)) ([c34aa22](https://github.com/Opentrons/opentrons/commit/c34aa22))
* **api:** load tip length calibratioin in v1 ([#5936](https://github.com/Opentrons/opentrons/issues/5936)) ([598f7e6](https://github.com/Opentrons/opentrons/commit/598f7e6)), closes [#5608](https://github.com/Opentrons/opentrons/issues/5608)
* **api:** support air gap command in V3+V4 executors ([#6003](https://github.com/Opentrons/opentrons/issues/6003)) ([4e85f4d](https://github.com/Opentrons/opentrons/commit/4e85f4d))
* **app:** Expose Labware Calibration Status on the FileInfo Page ([#6100](https://github.com/Opentrons/opentrons/issues/6100)) ([2a22f59](https://github.com/Opentrons/opentrons/commit/2a22f59))
* **components:** add primitive btns and fix useHover on disabled buttons ([#5972](https://github.com/Opentrons/opentrons/issues/5972)) ([57cc219](https://github.com/Opentrons/opentrons/commit/57cc219))
* **labware-library:** avoid adding info to 'group' field in LC ([#5975](https://github.com/Opentrons/opentrons/issues/5975)) ([c6f1fa9](https://github.com/Opentrons/opentrons/commit/c6f1fa9)), closes [#5801](https://github.com/Opentrons/opentrons/issues/5801)
* **labware-library:** make LC test protocol go to bottom last ([#5958](https://github.com/Opentrons/opentrons/issues/5958)) ([b1bc683](https://github.com/Opentrons/opentrons/commit/b1bc683)), closes [#4625](https://github.com/Opentrons/opentrons/issues/4625)
* **protocol-designer:** add air gap command creator ([#6179](https://github.com/Opentrons/opentrons/issues/6179)) ([db071cb](https://github.com/Opentrons/opentrons/commit/db071cb)), closes [#6053](https://github.com/Opentrons/opentrons/issues/6053)
* **protocol-designer:** add air gap form validation ([#6226](https://github.com/Opentrons/opentrons/issues/6226)) ([46958b3](https://github.com/Opentrons/opentrons/commit/46958b3))
* **protocol-designer:** add aspirate delay commands ([#6290](https://github.com/Opentrons/opentrons/issues/6290)) ([08ad8db](https://github.com/Opentrons/opentrons/commit/08ad8db)), closes [#6019](https://github.com/Opentrons/opentrons/issues/6019)
* **protocol-designer:** add commands for delay after dispense ([#6294](https://github.com/Opentrons/opentrons/issues/6294)) ([d94bb47](https://github.com/Opentrons/opentrons/commit/d94bb47)), closes [#6019](https://github.com/Opentrons/opentrons/issues/6019)
* **protocol-designer:** Add delay field validation ([#6145](https://github.com/Opentrons/opentrons/issues/6145)) ([e26ca78](https://github.com/Opentrons/opentrons/commit/e26ca78)), closes [#6008](https://github.com/Opentrons/opentrons/issues/6008) [#6108](https://github.com/Opentrons/opentrons/issues/6108)
* **protocol-designer:** add delay form fields ([#6085](https://github.com/Opentrons/opentrons/issues/6085)) ([eeb56cc](https://github.com/Opentrons/opentrons/commit/eeb56cc))
* **protocol-designer:** add FF for air gap + delay ([#6048](https://github.com/Opentrons/opentrons/issues/6048)) ([5fd5f4d](https://github.com/Opentrons/opentrons/commit/5fd5f4d)), closes [#6005](https://github.com/Opentrons/opentrons/issues/6005)
* **protocol-designer:** add form level errors for missing TC block + lid temperatures ([da8bb24](https://github.com/Opentrons/opentrons/commit/da8bb24)), closes [#6114](https://github.com/Opentrons/opentrons/issues/6114)
* **protocol-designer:** add initial step to new tc cycles ([#6092](https://github.com/Opentrons/opentrons/issues/6092)) ([ee0d583](https://github.com/Opentrons/opentrons/commit/ee0d583)), closes [#6064](https://github.com/Opentrons/opentrons/issues/6064)
* **protocol-designer:** add move to slot command creator ([#6261](https://github.com/Opentrons/opentrons/issues/6261)) ([fd45dd7](https://github.com/Opentrons/opentrons/commit/fd45dd7)), closes [#6221](https://github.com/Opentrons/opentrons/issues/6221)
* **protocol-designer:** add moveToWell command creator ([#6244](https://github.com/Opentrons/opentrons/issues/6244)) ([762a956](https://github.com/Opentrons/opentrons/commit/762a956)), closes [#6240](https://github.com/Opentrons/opentrons/issues/6240)
* **protocol-designer:** add new air gap UI fields ([#6190](https://github.com/Opentrons/opentrons/issues/6190)) ([c07682f](https://github.com/Opentrons/opentrons/commit/c07682f)), closes [#6005](https://github.com/Opentrons/opentrons/issues/6005)
* **protocol-designer:** add profile button tooltips ([#6076](https://github.com/Opentrons/opentrons/issues/6076)) ([13259ff](https://github.com/Opentrons/opentrons/commit/13259ff)), closes [#6062](https://github.com/Opentrons/opentrons/issues/6062)
* **protocol-designer:** add profile step numbers to TC side bar ([#6099](https://github.com/Opentrons/opentrons/issues/6099)) ([8bd03f8](https://github.com/Opentrons/opentrons/commit/8bd03f8)), closes [#6059](https://github.com/Opentrons/opentrons/issues/6059)
* **protocol-designer:** air gap default value ([#6218](https://github.com/Opentrons/opentrons/issues/6218)) ([1fb272d](https://github.com/Opentrons/opentrons/commit/1fb272d)), closes [#6017](https://github.com/Opentrons/opentrons/issues/6017)
* **protocol-designer:** change default lid open state to false ([#6129](https://github.com/Opentrons/opentrons/issues/6129)) ([6b5acce](https://github.com/Opentrons/opentrons/commit/6b5acce)), closes [#6128](https://github.com/Opentrons/opentrons/issues/6128)
* **protocol-designer:** do not default select TC state form ([#6158](https://github.com/Opentrons/opentrons/issues/6158)) ([2444f07](https://github.com/Opentrons/opentrons/commit/2444f07)), closes [#6097](https://github.com/Opentrons/opentrons/issues/6097)
* **protocol-designer:** do not display calibration blocks ([#6118](https://github.com/Opentrons/opentrons/issues/6118)) ([081ac74](https://github.com/Opentrons/opentrons/commit/081ac74)), closes [#6117](https://github.com/Opentrons/opentrons/issues/6117)
* **protocol-designer:** offload timeline computation from UI thread ([#5917](https://github.com/Opentrons/opentrons/issues/5917)) ([7bd381b](https://github.com/Opentrons/opentrons/commit/7bd381b))
* **protocol-designer:** only show one labware name in sidebar tooltip ([#6088](https://github.com/Opentrons/opentrons/issues/6088)) ([d697b35](https://github.com/Opentrons/opentrons/commit/d697b35))
* **protocol-designer:** promote thermocycler to full feature ([#5921](https://github.com/Opentrons/opentrons/issues/5921)) ([9681aca](https://github.com/Opentrons/opentrons/commit/9681aca)), closes [#5889](https://github.com/Opentrons/opentrons/issues/5889)
* **protocol-designer:** replace computing overlay with wait cursor ([#6150](https://github.com/Opentrons/opentrons/issues/6150)) ([e16e05e](https://github.com/Opentrons/opentrons/commit/e16e05e))
* **protocol-designer:** show confirm modal before losing form's unsaved changes ([#6040](https://github.com/Opentrons/opentrons/issues/6040)) ([e32cc01](https://github.com/Opentrons/opentrons/commit/e32cc01)), closes [#5472](https://github.com/Opentrons/opentrons/issues/5472) [#6042](https://github.com/Opentrons/opentrons/issues/6042)
* **protocol-designer:** update tc profile button copy ([#6094](https://github.com/Opentrons/opentrons/issues/6094)) ([7f98f1f](https://github.com/Opentrons/opentrons/commit/7f98f1f)), closes [#6065](https://github.com/Opentrons/opentrons/issues/6065)
* **protocol-designer:** warn before deleting cycle; update confirm modals ([#6101](https://github.com/Opentrons/opentrons/issues/6101)) ([33ae860](https://github.com/Opentrons/opentrons/commit/33ae860)), closes [#6081](https://github.com/Opentrons/opentrons/issues/6081) [#6096](https://github.com/Opentrons/opentrons/issues/6096)
* **robot-server:** Add endpoints to access labware calibration ([#5811](https://github.com/Opentrons/opentrons/issues/5811)) ([6e24726](https://github.com/Opentrons/opentrons/commit/6e24726))
* **robot-server:** add started_at and completed_at to command response. ([#5940](https://github.com/Opentrons/opentrons/issues/5940)) ([b626f67](https://github.com/Opentrons/opentrons/commit/b626f67)), closes [#5828](https://github.com/Opentrons/opentrons/issues/5828)
* **robot-server:** protocol manager and api ([#6182](https://github.com/Opentrons/opentrons/issues/6182)) ([f296bb4](https://github.com/Opentrons/opentrons/commit/f296bb4)), closes [#6071](https://github.com/Opentrons/opentrons/issues/6071)
* **robot-server:** return created_at in session response ([#6011](https://github.com/Opentrons/opentrons/issues/6011)) ([f5865be](https://github.com/Opentrons/opentrons/commit/f5865be))
* **robot-server:** Robot server command namespaces ([#6098](https://github.com/Opentrons/opentrons/issues/6098)) ([73152e3](https://github.com/Opentrons/opentrons/commit/73152e3)), closes [#6089](https://github.com/Opentrons/opentrons/issues/6089)
* **robot-server:** Robot server default session ([#5967](https://github.com/Opentrons/opentrons/issues/5967)) ([754057b](https://github.com/Opentrons/opentrons/commit/754057b)), closes [#5768](https://github.com/Opentrons/opentrons/issues/5768)
* **robot-server:** Robot server protocol session mockup ([#6215](https://github.com/Opentrons/opentrons/issues/6215)) ([d137be0](https://github.com/Opentrons/opentrons/commit/d137be0)), closes [#6072](https://github.com/Opentrons/opentrons/issues/6072)
* **robot-server:** Session create parameters ([#6144](https://github.com/Opentrons/opentrons/issues/6144)) ([ee1b504](https://github.com/Opentrons/opentrons/commit/ee1b504)), closes [#6149](https://github.com/Opentrons/opentrons/issues/6149)
* **robot-server, api:** async hardware initialization after HTTP server starts. ([#6116](https://github.com/Opentrons/opentrons/issues/6116)) ([b4eb2ca](https://github.com/Opentrons/opentrons/commit/b4eb2ca)), closes [#6109](https://github.com/Opentrons/opentrons/issues/6109)
* **shared-data:** add labware definitions for calibration block ([#5993](https://github.com/Opentrons/opentrons/issues/5993)) ([f56e2f4](https://github.com/Opentrons/opentrons/commit/f56e2f4)), closes [#5618](https://github.com/Opentrons/opentrons/issues/5618)





# [3.19.0](https://github.com/opentrons/opentrons/compare/v3.18.1...v3.19.0) (2020-06-29)


### Bug Fixes

* **app:** fix clunky text wrapping for multi tip pick up in cal check ([#6026](https://github.com/opentrons/opentrons/issues/6026)) ([76edd1d](https://github.com/opentrons/opentrons/commit/76edd1d))
* **app:** calcheck: content fixups ([#5989](https://github.com/opentrons/opentrons/issues/5989)) ([21b5e4e](https://github.com/opentrons/opentrons/commit/21b5e4e))
* **app:** calcheck: fix display of bad deck transform ([#5988](https://github.com/opentrons/opentrons/issues/5988)) ([22b15ff](https://github.com/opentrons/opentrons/commit/22b15ff))
* **app:** replace wrong assets for xy multi cal check ([#5996](https://github.com/opentrons/opentrons/issues/5996)) ([072062d](https://github.com/opentrons/opentrons/commit/072062d))
* **api:** catch factory tests up to gpio changes ([#5747](https://github.com/opentrons/opentrons/issues/5747)) ([751d9a4](https://github.com/opentrons/opentrons/commit/751d9a4))
* **api:** convert extra seconds to minutes in delay command ([#5755](https://github.com/opentrons/opentrons/issues/5755)) ([df26e07](https://github.com/opentrons/opentrons/commit/df26e07)), closes [#5414](https://github.com/opentrons/opentrons/issues/5414)
* **api:** disallow calling Session._run while protocol is running. ([#5831](https://github.com/opentrons/opentrons/issues/5831)) ([fce1f79](https://github.com/opentrons/opentrons/commit/fce1f79)), closes [#5239](https://github.com/opentrons/opentrons/issues/5239)
* **api:** do not allow v1 imports in v2 protocols ([#5859](https://github.com/opentrons/opentrons/issues/5859)) ([7ed945d](https://github.com/opentrons/opentrons/commit/7ed945d)), closes [#5852](https://github.com/opentrons/opentrons/issues/5852)
* **api:** Enable audio on GPIO startup ([#5787](https://github.com/opentrons/opentrons/issues/5787)) ([907401c](https://github.com/opentrons/opentrons/commit/907401c)), closes [/github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py#L217](https://github.com//github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py/issues/L217)
* **api:** Fix failing test from edge due to kwarg check ([#5961](https://github.com/opentrons/opentrons/issues/5961)) ([ef70a7c](https://github.com/opentrons/opentrons/commit/ef70a7c))
* **api:** Fix return tip behavior in check session ([#5772](https://github.com/opentrons/opentrons/issues/5772)) ([34ef09c](https://github.com/opentrons/opentrons/commit/34ef09c))
* **api:** fix transform type logic in calibration check session ([#5951](https://github.com/opentrons/opentrons/issues/5951)) ([bcb566e](https://github.com/opentrons/opentrons/commit/bcb566e))
* **api:** prevent thermocycler wait_for_temp() from exiting prematurely ([#5807](https://github.com/opentrons/opentrons/issues/5807)) ([7720b28](https://github.com/opentrons/opentrons/commit/7720b28)), closes [#5602](https://github.com/opentrons/opentrons/issues/5602)
* **api:** return rail lights to original state post cal-check ([#5861](https://github.com/opentrons/opentrons/issues/5861)) ([3a6cc41](https://github.com/opentrons/opentrons/commit/3a6cc41))
* **api:** Simulate protocols with a realistic deck transform ([#5908](https://github.com/opentrons/opentrons/issues/5908)) ([03757d9](https://github.com/opentrons/opentrons/commit/03757d9))
* **app:** clear <input> value after robot update file select ([#5789](https://github.com/opentrons/opentrons/issues/5789)) ([62372b0](https://github.com/opentrons/opentrons/commit/62372b0)), closes [#5781](https://github.com/opentrons/opentrons/issues/5781)
* **app:** delete local records of session if id not found  ([#5863](https://github.com/opentrons/opentrons/issues/5863)) ([9f8adfb](https://github.com/opentrons/opentrons/commit/9f8adfb))
* **app:** fix cal check tiprack images at large window sizes ([#5841](https://github.com/opentrons/opentrons/issues/5841)) ([065ce49](https://github.com/opentrons/opentrons/commit/065ce49))
* **app:** fix up calibration check copy ([#5779](https://github.com/opentrons/opentrons/issues/5779)) ([57b9ca8](https://github.com/opentrons/opentrons/commit/57b9ca8))
* **app:** interpolate session type into session exit event name ([#5804](https://github.com/opentrons/opentrons/issues/5804)) ([bee8cb0](https://github.com/opentrons/opentrons/commit/bee8cb0))
* **app:** restart MDNS browser when network interfaces change ([#5933](https://github.com/opentrons/opentrons/issues/5933)) ([c9c6dc8](https://github.com/opentrons/opentrons/commit/c9c6dc8)), closes [#5343](https://github.com/opentrons/opentrons/issues/5343)
* **app:** use troubleshooting link when calcheck fails at tip pickup ([#5952](https://github.com/opentrons/opentrons/issues/5952)) ([474c98f](https://github.com/opentrons/opentrons/commit/474c98f))
* **app-shell:** clean up old robot update files ([#5892](https://github.com/opentrons/opentrons/issues/5892)) ([1e2b815](https://github.com/opentrons/opentrons/commit/1e2b815)), closes [#4667](https://github.com/opentrons/opentrons/issues/4667)
* **build:** allow test pypi uploads to fail again ([#5849](https://github.com/opentrons/opentrons/issues/5849)) ([61b5eba](https://github.com/opentrons/opentrons/commit/61b5eba))
* **build:** missing semicolon in shared-data/python/Makefile ([#5901](https://github.com/opentrons/opentrons/issues/5901)) ([27a8751](https://github.com/opentrons/opentrons/commit/27a8751))
* **protocol-designer:** Add scroll to top on export modal display ([#5744](https://github.com/opentrons/opentrons/issues/5744)) ([f797cdc](https://github.com/opentrons/opentrons/commit/f797cdc)), closes [#5422](https://github.com/opentrons/opentrons/issues/5422)
* **protocol-designer:** auto add TC module id to TC steps ([#5944](https://github.com/opentrons/opentrons/issues/5944)) ([cf70c98](https://github.com/opentrons/opentrons/commit/cf70c98)), closes [#5942](https://github.com/opentrons/opentrons/issues/5942)
* **protocol-designer:** Correct tc profile fields sizing ([#5870](https://github.com/opentrons/opentrons/issues/5870)) ([2ac185b](https://github.com/opentrons/opentrons/commit/2ac185b)), closes [#5851](https://github.com/opentrons/opentrons/issues/5851)
* **protocol-designer:** ensure all TC set temps + runProfile are awaited ([#5910](https://github.com/opentrons/opentrons/issues/5910)) ([644375c](https://github.com/opentrons/opentrons/commit/644375c))
* **protocol-designer:** ensure lid is closed before calling TC runProfile ([#5918](https://github.com/opentrons/opentrons/issues/5918)) ([19c2479](https://github.com/opentrons/opentrons/commit/19c2479))
* **protocol-designer:** Lighten TC hover overlay ([#5939](https://github.com/opentrons/opentrons/issues/5939)) ([3204f6c](https://github.com/opentrons/opentrons/commit/3204f6c)), closes [#5912](https://github.com/opentrons/opentrons/issues/5912)
* **protocol-designer:** Remove errant p tag ([#5786](https://github.com/opentrons/opentrons/issues/5786)) ([6695bd3](https://github.com/opentrons/opentrons/commit/6695bd3))
* **protocol-designer:** Update profile step fields alignment ([#5937](https://github.com/opentrons/opentrons/issues/5937)) ([5ab095d](https://github.com/opentrons/opentrons/commit/5ab095d))
* **robot-server:** make sure fastapi validation errors are properly documented ([#5748](https://github.com/opentrons/opentrons/issues/5748)) ([dbecbfc](https://github.com/opentrons/opentrons/commit/dbecbfc))
* **robot-server:** preserve newlines in text logs ([#5850](https://github.com/opentrons/opentrons/issues/5850)) ([6420b5f](https://github.com/opentrons/opentrons/commit/6420b5f)), closes [#5846](https://github.com/opentrons/opentrons/issues/5846)
* **robot-server:** type mismatch in SerialCommand args ([#5883](https://github.com/opentrons/opentrons/issues/5883)) ([2134b97](https://github.com/opentrons/opentrons/commit/2134b97))
* **robot-server, api:** reject commands while robot is moving ([#5878](https://github.com/opentrons/opentrons/issues/5878)) ([d8c63d7](https://github.com/opentrons/opentrons/commit/d8c63d7)), closes [#5810](https://github.com/opentrons/opentrons/issues/5810)
* **scripts:** make python_build_utils 2.7 compatible again ([#5886](https://github.com/opentrons/opentrons/issues/5886)) ([bd9e6b7](https://github.com/opentrons/opentrons/commit/bd9e6b7))
* **shared-data:** recursively specify subpackages ([#5844](https://github.com/opentrons/opentrons/issues/5844)) ([3ccbbea](https://github.com/opentrons/opentrons/commit/3ccbbea))
* fix makefile refactor for push tasks ([#5773](https://github.com/opentrons/opentrons/issues/5773)) ([db743bc](https://github.com/opentrons/opentrons/commit/db743bc))
* **api:** catch factory tests up to gpio changes ([#5747](https://github.com/opentrons/opentrons/issues/5747)) ([751d9a4](https://github.com/opentrons/opentrons/commit/751d9a4))
* **api:** convert extra seconds to minutes in delay command ([#5755](https://github.com/opentrons/opentrons/issues/5755)) ([df26e07](https://github.com/opentrons/opentrons/commit/df26e07)), closes [#5414](https://github.com/opentrons/opentrons/issues/5414)
* **api:** do not allow v1 imports in v2 protocols ([#5859](https://github.com/opentrons/opentrons/issues/5859)) ([7ed945d](https://github.com/opentrons/opentrons/commit/7ed945d)), closes [#5852](https://github.com/opentrons/opentrons/issues/5852)
* **api:** Enable audio on GPIO startup ([#5787](https://github.com/opentrons/opentrons/issues/5787)) ([907401c](https://github.com/opentrons/opentrons/commit/907401c)), closes [/github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py#L217](https://github.com//github.com/Opentrons/opentrons/blob/751d9a402fa5d1f936df43ed12fd7387be23237f/api/src/opentrons/tools/factory_test.py/issues/L217)
* **build:** allow test pypi uploads to fail again ([#5849](https://github.com/opentrons/opentrons/issues/5849)) ([61b5eba](https://github.com/opentrons/opentrons/commit/61b5eba))
* **protocol-designer:** Add scroll to top on export modal display ([#5744](https://github.com/opentrons/opentrons/issues/5744)) ([f797cdc](https://github.com/opentrons/opentrons/commit/f797cdc)), closes [#5422](https://github.com/opentrons/opentrons/issues/5422)




### Features

* **api:** add warning when a wrong tiprack is used for the pipette in the protocol ([#5997](https://github.com/opentrons/opentrons/issues/5997)) ([24b7756](https://github.com/opentrons/opentrons/commit/24b7756))
* **api:** add info to debug warning on how IS_ROBOT is determined ([#5783](https://github.com/opentrons/opentrons/issues/5783)) ([fbbf1b6](https://github.com/opentrons/opentrons/commit/fbbf1b6))
* **api:** add skeleton state machine instance for tip length calibration ([#5805](https://github.com/opentrons/opentrons/issues/5805)) ([dd36d53](https://github.com/opentrons/opentrons/commit/dd36d53)), closes [#5605](https://github.com/opentrons/opentrons/issues/5605)
* **api:** define data architecture for tip length calibration in v2 ([#5820](https://github.com/opentrons/opentrons/issues/5820)) ([f149cb6](https://github.com/opentrons/opentrons/commit/f149cb6)), closes [#5606](https://github.com/opentrons/opentrons/issues/5606)
* **api, app:** Check Robot Deck Transform ([#5845](https://github.com/opentrons/opentrons/issues/5845)) ([ed67383](https://github.com/opentrons/opentrons/commit/ed67383))
* **api, app:** implement automatic door safety stop feature ([#5706](https://github.com/opentrons/opentrons/issues/5706)) ([ad94d07](https://github.com/opentrons/opentrons/commit/ad94d07)), closes [#2820](https://github.com/opentrons/opentrons/issues/2820) [#2752](https://github.com/opentrons/opentrons/issues/2752)
* **api, docs:** add GPIO rail lights and door control to ProtocolContext ([#5862](https://github.com/opentrons/opentrons/issues/5862)) ([4d5d89f](https://github.com/opentrons/opentrons/commit/4d5d89f)), closes [#5775](https://github.com/opentrons/opentrons/issues/5775) [#5703](https://github.com/opentrons/opentrons/issues/5703)
* **app:** add network interface collection to system-info ([#5764](https://github.com/opentrons/opentrons/issues/5764)) ([7d64efa](https://github.com/opentrons/opentrons/commit/7d64efa)), closes [#5397](https://github.com/opentrons/opentrons/issues/5397)
* **app:** introduce Robot Calibration Check tool ([#5960](https://github.com/opentrons/opentrons/issues/5960)) ([bc7d5d5](https://github.com/opentrons/opentrons/commit/bc7d5d5))
* **app, app-shell:** add ability to disable discovery cache ([#5759](https://github.com/opentrons/opentrons/issues/5759)) ([5ad57d9](https://github.com/opentrons/opentrons/commit/5ad57d9))
* **components:** add position props to primitive components ([#5926](https://github.com/opentrons/opentrons/issues/5926)) ([9b0a666](https://github.com/opentrons/opentrons/commit/9b0a666))
* **components:** add useConditionalConfirm hook to shared components ([#5735](https://github.com/opentrons/opentrons/issues/5735)) ([8e5248f](https://github.com/opentrons/opentrons/commit/8e5248f))
* **js:** update lodash to 4.17.15 ([#5788](https://github.com/opentrons/opentrons/issues/5788)) ([5a145dc](https://github.com/opentrons/opentrons/commit/5a145dc))
* **labware-library:** use loadname not displayname for LC file ([#5945](https://github.com/opentrons/opentrons/issues/5945)) ([3869c63](https://github.com/opentrons/opentrons/commit/3869c63)), closes [#5722](https://github.com/opentrons/opentrons/issues/5722)
* **labware-library:** use slot 2 instead of 3 in LC test protocol ([#5950](https://github.com/opentrons/opentrons/issues/5950)) ([fbd1506](https://github.com/opentrons/opentrons/commit/fbd1506)), closes [#5019](https://github.com/opentrons/opentrons/issues/5019)
* **protocol-designer:** add atomic thermocyclerRunProfile command creator ([#5843](https://github.com/opentrons/opentrons/issues/5843)) ([e20bbda](https://github.com/opentrons/opentrons/commit/e20bbda)), closes [#5839](https://github.com/opentrons/opentrons/issues/5839)
* **protocol-designer:** Add ending hold state fields to TC profile ([#5750](https://github.com/opentrons/opentrons/issues/5750)) ([d388237](https://github.com/opentrons/opentrons/commit/d388237)), closes [#5519](https://github.com/opentrons/opentrons/issues/5519)
* **protocol-designer:** add ending hold to TC profile substeps ([#5884](https://github.com/opentrons/opentrons/issues/5884)) ([edcfadc](https://github.com/opentrons/opentrons/commit/edcfadc)), closes [#5522](https://github.com/opentrons/opentrons/issues/5522)
* **protocol-designer:** Add number maskers to tc duration fields ([#5848](https://github.com/opentrons/opentrons/issues/5848)) ([e7523a8](https://github.com/opentrons/opentrons/commit/e7523a8)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** Add profile step numbers and tooltips ([#5819](https://github.com/opentrons/opentrons/issues/5819)) ([4cfc25d](https://github.com/opentrons/opentrons/commit/4cfc25d)), closes [#5515](https://github.com/opentrons/opentrons/issues/5515)
* **protocol-designer:** Add profiles settings to TC profile form ([#5771](https://github.com/opentrons/opentrons/issues/5771)) ([ce484cb](https://github.com/opentrons/opentrons/commit/ce484cb))
* **protocol-designer:** Add step grouping and styles for tc cycles ([#5836](https://github.com/opentrons/opentrons/issues/5836)) ([f335d77](https://github.com/opentrons/opentrons/commit/f335d77)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** add support for TC cycles ([#5809](https://github.com/opentrons/opentrons/issues/5809)) ([5cb55bc](https://github.com/opentrons/opentrons/commit/5cb55bc)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** add TC announcement modal ([#5898](https://github.com/opentrons/opentrons/issues/5898)) ([e5894c5](https://github.com/opentrons/opentrons/commit/e5894c5)), closes [#5887](https://github.com/opentrons/opentrons/issues/5887)
* **protocol-designer:** add TC profile deck visualization ([#5896](https://github.com/opentrons/opentrons/issues/5896)) ([47b4329](https://github.com/opentrons/opentrons/commit/47b4329)), closes [#5523](https://github.com/opentrons/opentrons/issues/5523)
* **protocol-designer:** add TC profile state updater ([#5856](https://github.com/opentrons/opentrons/issues/5856)) ([83eff59](https://github.com/opentrons/opentrons/commit/83eff59)), closes [#5837](https://github.com/opentrons/opentrons/issues/5837)
* **protocol-designer:** Add validation to profile settings and end hold ([#5802](https://github.com/opentrons/opentrons/issues/5802)) ([c303e38](https://github.com/opentrons/opentrons/commit/c303e38)), closes [#5520](https://github.com/opentrons/opentrons/issues/5520) [#5753](https://github.com/opentrons/opentrons/issues/5753)
* **protocol-designer:** create barebones setup for TC profile steps ([#5751](https://github.com/opentrons/opentrons/issues/5751)) ([a2c6ca6](https://github.com/opentrons/opentrons/commit/a2c6ca6))
* **protocol-designer:** create barebones TC profile substeps ([#5865](https://github.com/opentrons/opentrons/issues/5865)) ([ab29038](https://github.com/opentrons/opentrons/commit/ab29038)), closes [#5522](https://github.com/opentrons/opentrons/issues/5522)
* **protocol-designer:** disable save for dynamic field errors ([#5769](https://github.com/opentrons/opentrons/issues/5769)) ([9a36b87](https://github.com/opentrons/opentrons/commit/9a36b87)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** finish form-level errors for dynamic fields ([#5818](https://github.com/opentrons/opentrons/issues/5818)) ([9ca9911](https://github.com/opentrons/opentrons/commit/9ca9911)), closes [#5814](https://github.com/opentrons/opentrons/issues/5814)
* **protocol-designer:** implement form-level errors for dynamic profile fields ([#5784](https://github.com/opentrons/opentrons/issues/5784)) ([56588f0](https://github.com/opentrons/opentrons/commit/56588f0)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** implement formToArgs for TC profile ([#5842](https://github.com/opentrons/opentrons/issues/5842)) ([4b3e008](https://github.com/opentrons/opentrons/commit/4b3e008)), closes [#5838](https://github.com/opentrons/opentrons/issues/5838)
* **protocol-designer:** implement thermocyclerProfileStep CC ([#5858](https://github.com/opentrons/opentrons/issues/5858)) ([cc3be8e](https://github.com/opentrons/opentrons/commit/cc3be8e)), closes [#5835](https://github.com/opentrons/opentrons/issues/5835)
* **protocol-designer:** replace v4 protocol export hint ([#5897](https://github.com/opentrons/opentrons/issues/5897)) ([179f638](https://github.com/opentrons/opentrons/commit/179f638)), closes [#5888](https://github.com/opentrons/opentrons/issues/5888)
* **protocol-designer:** Reset TC form on form type toggle ([#5871](https://github.com/opentrons/opentrons/issues/5871)) ([8192afd](https://github.com/opentrons/opentrons/commit/8192afd)), closes [#5754](https://github.com/opentrons/opentrons/issues/5754)
* **protocol-designer:** reverse multi channel substep arrows in sidebar ([#5931](https://github.com/opentrons/opentrons/issues/5931)) ([ade4cca](https://github.com/opentrons/opentrons/commit/ade4cca))
* **protocol-designer:** Style dynamic step fields ([#5795](https://github.com/opentrons/opentrons/issues/5795)) ([eb950b6](https://github.com/opentrons/opentrons/commit/eb950b6)), closes [#5513](https://github.com/opentrons/opentrons/issues/5513)
* **protocol-designer:** style TC profile substeps ([#5876](https://github.com/opentrons/opentrons/issues/5876)) ([615866c](https://github.com/opentrons/opentrons/commit/615866c)), closes [#5522](https://github.com/opentrons/opentrons/issues/5522)
* **robot-server:** Add skeleton of tip calibration session including integration test.' ([#5868](https://github.com/opentrons/opentrons/issues/5868)) ([c66f8ae](https://github.com/opentrons/opentrons/commit/c66f8ae))
* **robot-server:** Mock up of access control models and router. ([#5749](https://github.com/opentrons/opentrons/issues/5749)) ([05348ec](https://github.com/opentrons/opentrons/commit/05348ec)), closes [#5746](https://github.com/opentrons/opentrons/issues/5746)
* **robot-server:** session manager ([#5796](https://github.com/opentrons/opentrons/issues/5796)) ([c1fd7e8](https://github.com/opentrons/opentrons/commit/c1fd7e8)), closes [#5763](https://github.com/opentrons/opentrons/issues/5763) [#5765](https://github.com/opentrons/opentrons/issues/5765)
* **test:** add button names to edit pipette, swap pipette, and continue to liquids ([#5826](https://github.com/opentrons/opentrons/issues/5826)) ([cc3ba61](https://github.com/opentrons/opentrons/commit/cc3ba61)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)
* **test:** add test id to Pipette Select component ([#5791](https://github.com/opentrons/opentrons/issues/5791)) ([845b508](https://github.com/opentrons/opentrons/commit/845b508)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)



### Features

* **api:** add info to debug warning on how IS_ROBOT is determined ([#5783](https://github.com/opentrons/opentrons/issues/5783)) ([fbbf1b6](https://github.com/opentrons/opentrons/commit/fbbf1b6))
* **api:** add skeleton state machine instance for tip length calibration ([#5805](https://github.com/opentrons/opentrons/issues/5805)) ([dd36d53](https://github.com/opentrons/opentrons/commit/dd36d53)), closes [#5605](https://github.com/opentrons/opentrons/issues/5605)
* **api, app:** implement automatic door safety stop feature ([#5706](https://github.com/opentrons/opentrons/issues/5706)) ([ad94d07](https://github.com/opentrons/opentrons/commit/ad94d07)), closes [#2820](https://github.com/opentrons/opentrons/issues/2820) [#2752](https://github.com/opentrons/opentrons/issues/2752)
* **app:** add network interface collection to system-info ([#5764](https://github.com/opentrons/opentrons/issues/5764)) ([7d64efa](https://github.com/opentrons/opentrons/commit/7d64efa)), closes [#5397](https://github.com/opentrons/opentrons/issues/5397)
* **app, app-shell:** add ability to disable discovery cache ([#5759](https://github.com/opentrons/opentrons/issues/5759)) ([5ad57d9](https://github.com/opentrons/opentrons/commit/5ad57d9))
* **components:** add useConditionalConfirm hook to shared components ([#5735](https://github.com/opentrons/opentrons/issues/5735)) ([8e5248f](https://github.com/opentrons/opentrons/commit/8e5248f))
* **js:** update lodash to 4.17.15 ([#5788](https://github.com/opentrons/opentrons/issues/5788)) ([5a145dc](https://github.com/opentrons/opentrons/commit/5a145dc))
* **protocol-designer:** add atomic thermocyclerRunProfile command creator ([#5843](https://github.com/opentrons/opentrons/issues/5843)) ([e20bbda](https://github.com/opentrons/opentrons/commit/e20bbda)), closes [#5839](https://github.com/opentrons/opentrons/issues/5839)
* **protocol-designer:** Add ending hold state fields to TC profile ([#5750](https://github.com/opentrons/opentrons/issues/5750)) ([d388237](https://github.com/opentrons/opentrons/commit/d388237)), closes [#5519](https://github.com/opentrons/opentrons/issues/5519)
* **protocol-designer:** Add profile step numbers and tooltips ([#5819](https://github.com/opentrons/opentrons/issues/5819)) ([4cfc25d](https://github.com/opentrons/opentrons/commit/4cfc25d)), closes [#5515](https://github.com/opentrons/opentrons/issues/5515)
* **protocol-designer:** Add profiles settings to TC profile form ([#5771](https://github.com/opentrons/opentrons/issues/5771)) ([ce484cb](https://github.com/opentrons/opentrons/commit/ce484cb))
* **protocol-designer:** Add step grouping and styles for tc cycles ([#5836](https://github.com/opentrons/opentrons/issues/5836)) ([f335d77](https://github.com/opentrons/opentrons/commit/f335d77)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** add support for TC cycles ([#5809](https://github.com/opentrons/opentrons/issues/5809)) ([5cb55bc](https://github.com/opentrons/opentrons/commit/5cb55bc)), closes [#5516](https://github.com/opentrons/opentrons/issues/5516) [#5517](https://github.com/opentrons/opentrons/issues/5517) [#5518](https://github.com/opentrons/opentrons/issues/5518)
* **protocol-designer:** Add validation to profile settings and end hold ([#5802](https://github.com/opentrons/opentrons/issues/5802)) ([c303e38](https://github.com/opentrons/opentrons/commit/c303e38)), closes [#5520](https://github.com/opentrons/opentrons/issues/5520) [#5753](https://github.com/opentrons/opentrons/issues/5753)
* **protocol-designer:** create barebones setup for TC profile steps ([#5751](https://github.com/opentrons/opentrons/issues/5751)) ([a2c6ca6](https://github.com/opentrons/opentrons/commit/a2c6ca6))
* **protocol-designer:** disable save for dynamic field errors ([#5769](https://github.com/opentrons/opentrons/issues/5769)) ([9a36b87](https://github.com/opentrons/opentrons/commit/9a36b87)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** finish form-level errors for dynamic fields ([#5818](https://github.com/opentrons/opentrons/issues/5818)) ([9ca9911](https://github.com/opentrons/opentrons/commit/9ca9911)), closes [#5814](https://github.com/opentrons/opentrons/issues/5814)
* **protocol-designer:** implement form-level errors for dynamic profile fields ([#5784](https://github.com/opentrons/opentrons/issues/5784)) ([56588f0](https://github.com/opentrons/opentrons/commit/56588f0)), closes [#5737](https://github.com/opentrons/opentrons/issues/5737)
* **protocol-designer:** implement formToArgs for TC profile ([#5842](https://github.com/opentrons/opentrons/issues/5842)) ([4b3e008](https://github.com/opentrons/opentrons/commit/4b3e008)), closes [#5838](https://github.com/opentrons/opentrons/issues/5838)
* **protocol-designer:** Style dynamic step fields ([#5795](https://github.com/opentrons/opentrons/issues/5795)) ([eb950b6](https://github.com/opentrons/opentrons/commit/eb950b6)), closes [#5513](https://github.com/opentrons/opentrons/issues/5513)
* **robot-server:** Mock up of access control models and router. ([#5749](https://github.com/opentrons/opentrons/issues/5749)) ([05348ec](https://github.com/opentrons/opentrons/commit/05348ec)), closes [#5746](https://github.com/opentrons/opentrons/issues/5746)
* **robot-server:** session manager ([#5796](https://github.com/opentrons/opentrons/issues/5796)) ([c1fd7e8](https://github.com/opentrons/opentrons/commit/c1fd7e8)), closes [#5763](https://github.com/opentrons/opentrons/issues/5763) [#5765](https://github.com/opentrons/opentrons/issues/5765)
* **test:** add button names to edit pipette, swap pipette, and continue to liquids ([#5826](https://github.com/opentrons/opentrons/issues/5826)) ([cc3ba61](https://github.com/opentrons/opentrons/commit/cc3ba61)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)
* **test:** add test id to Pipette Select component ([#5791](https://github.com/opentrons/opentrons/issues/5791)) ([845b508](https://github.com/opentrons/opentrons/commit/845b508)), closes [#5724](https://github.com/opentrons/opentrons/issues/5724)



## [3.18.1](https://github.com/Opentrons/opentrons/compare/v3.18.0...v3.18.1) (2020-05-26)


### Bug Fixes

* **app:** workaround issues with Realtek's website and driver versions ([67d6d89](https://github.com/Opentrons/opentrons/commit/67d6d89))





# [3.18.0](https://github.com/Opentrons/opentrons/compare/v3.17.1...v3.18.0) (2020-05-20)


### Bug Fixes

* **api:** cal check: terminal drop tips during delete ([#5664](https://github.com/Opentrons/opentrons/issues/5664)) ([872140e](https://github.com/Opentrons/opentrons/commit/872140e))
* **api:** cal check: use plan_arc to blend critical points ([#5663](https://github.com/Opentrons/opentrons/issues/5663)) ([ed70395](https://github.com/Opentrons/opentrons/commit/ed70395))
* **api:** cal check: use real trash labware ([#5666](https://github.com/Opentrons/opentrons/issues/5666)) ([a90f675](https://github.com/Opentrons/opentrons/commit/a90f675))
* **api:** calcheck: move the slot 5 check point -y ([#5667](https://github.com/Opentrons/opentrons/issues/5667)) ([11cec65](https://github.com/Opentrons/opentrons/commit/11cec65))
* **api:** Correctly grab slot from labware object ([#5532](https://github.com/Opentrons/opentrons/issues/5532)) ([39cd384](https://github.com/Opentrons/opentrons/commit/39cd384))
* **api:** don't return defaultdicts for labware accessors ([#5593](https://github.com/Opentrons/opentrons/issues/5593)) ([6b2c9e8](https://github.com/Opentrons/opentrons/commit/6b2c9e8))
* **api:** make delay wait for existing pause before pausing itself ([#5558](https://github.com/Opentrons/opentrons/issues/5558)) ([3935adc](https://github.com/Opentrons/opentrons/commit/3935adc)), closes [#4801](https://github.com/Opentrons/opentrons/issues/4801)
* **api:** make reading door switch state unblocking ([#5658](https://github.com/Opentrons/opentrons/issues/5658)) ([4efa400](https://github.com/Opentrons/opentrons/commit/4efa400)), closes [#5536](https://github.com/Opentrons/opentrons/issues/5536)
* **api:** Move multi-channel pipettes to the correct location in cal check ([#5544](https://github.com/Opentrons/opentrons/issues/5544)) ([f29861f](https://github.com/Opentrons/opentrons/commit/f29861f))
* **app:** tighten filter logic that identifies Realtek U2E adapters ([#5707](https://github.com/Opentrons/opentrons/issues/5707)) ([ea9a6c4](https://github.com/Opentrons/opentrons/commit/ea9a6c4))
* **protocol-designer:** fix multichannel well selection bug ([#5607](https://github.com/Opentrons/opentrons/issues/5607)) ([e20d645](https://github.com/Opentrons/opentrons/commit/e20d645))
* **protocol-designer:** set lower bound for temp module target temp to 4 degrees ([#5644](https://github.com/Opentrons/opentrons/issues/5644)) ([9ae81db](https://github.com/Opentrons/opentrons/commit/9ae81db)), closes [#5548](https://github.com/Opentrons/opentrons/issues/5548)
* **robot-server:**  /modules was not returning the right module specific data ([9ba54e4](https://github.com/Opentrons/opentrons/commit/9ba54e4))
* **robot-server:** Fixup failing tests in robot-server ([#5673](https://github.com/Opentrons/opentrons/issues/5673)) ([d307e12](https://github.com/Opentrons/opentrons/commit/d307e12))
* **robot-server:** prevent nmcli connection states from causing a 500 response ([e380837](https://github.com/Opentrons/opentrons/commit/e380837)), closes [#5698](https://github.com/Opentrons/opentrons/issues/5698)
* **robot-server,api:** bug in deck calibration ([e0c1754](https://github.com/Opentrons/opentrons/commit/e0c1754)), closes [#5688](https://github.com/Opentrons/opentrons/issues/5688)


### Features

* **api:** Add type of deck calibration and remove ability to start the program without pipettes ([#5645](https://github.com/Opentrons/opentrons/issues/5645)) ([334be7f](https://github.com/Opentrons/opentrons/commit/334be7f))
* **api:** support thermocycler commands in executor ([#5557](https://github.com/Opentrons/opentrons/issues/5557)) ([b4ca09e](https://github.com/Opentrons/opentrons/commit/b4ca09e))
* **api, app:** add state change information to rpc ([#5512](https://github.com/Opentrons/opentrons/issues/5512)) ([ca3ef95](https://github.com/Opentrons/opentrons/commit/ca3ef95)), closes [#5502](https://github.com/Opentrons/opentrons/issues/5502)
* **app:** add UI to clear cached robots ([#5629](https://github.com/Opentrons/opentrons/issues/5629)) ([330acc0](https://github.com/Opentrons/opentrons/commit/330acc0)), closes [#2435](https://github.com/Opentrons/opentrons/issues/2435)
* **app:** alert user if Windows U2E driver is out of date ([#5656](https://github.com/Opentrons/opentrons/issues/5656)) ([02cd054](https://github.com/Opentrons/opentrons/commit/02cd054)), closes [#5493](https://github.com/Opentrons/opentrons/issues/5493)
* **app:** collect pipette and module load analytics from protocol runs' ([#5675](https://github.com/Opentrons/opentrons/issues/5675)) ([11feca3](https://github.com/Opentrons/opentrons/commit/11feca3)), closes [#5540](https://github.com/Opentrons/opentrons/issues/5540)
* **app,robot-server:** add support for sessions API ([#5628](https://github.com/Opentrons/opentrons/issues/5628)) ([441d682](https://github.com/Opentrons/opentrons/commit/441d682))
* **components:** add Box primitive to components library ([#5665](https://github.com/Opentrons/opentrons/issues/5665)) ([73614d0](https://github.com/Opentrons/opentrons/commit/73614d0))
* **components:** add Flex and Text primitives to components library ([#5637](https://github.com/Opentrons/opentrons/issues/5637)) ([b1b318e](https://github.com/Opentrons/opentrons/commit/b1b318e))
* **components:** Add ToggleField form component and tests ([#5579](https://github.com/Opentrons/opentrons/issues/5579)) ([4272cc6](https://github.com/Opentrons/opentrons/commit/4272cc6))
* **protocol-designer:** add 'mini' command creators for TC ([#5643](https://github.com/Opentrons/opentrons/issues/5643)) ([e6654a8](https://github.com/Opentrons/opentrons/commit/e6654a8)), closes [#5598](https://github.com/Opentrons/opentrons/issues/5598)
* **protocol-designer:** Add base thermocycler form ([#5585](https://github.com/Opentrons/opentrons/issues/5585)) ([ec469a4](https://github.com/Opentrons/opentrons/commit/ec469a4)), closes [#5566](https://github.com/Opentrons/opentrons/issues/5566)
* **protocol-designer:** add custom tiprack on protocol creation ([#5489](https://github.com/Opentrons/opentrons/issues/5489)) ([485bb7c](https://github.com/Opentrons/opentrons/commit/485bb7c)), closes [#4736](https://github.com/Opentrons/opentrons/issues/4736)
* **protocol-designer:** add groundwork for 5421 ([#5494](https://github.com/Opentrons/opentrons/issues/5494)) ([03ba3c4](https://github.com/Opentrons/opentrons/commit/03ba3c4))
* **protocol-designer:** Add thermocycler state form ([#5615](https://github.com/Opentrons/opentrons/issues/5615)) ([51b04e0](https://github.com/Opentrons/opentrons/commit/51b04e0)), closes [#5568](https://github.com/Opentrons/opentrons/issues/5568)
* **protocol-designer:** Add validation to TC state form ([#5659](https://github.com/Opentrons/opentrons/issues/5659)) ([7849b5c](https://github.com/Opentrons/opentrons/commit/7849b5c)), closes [#5569](https://github.com/Opentrons/opentrons/issues/5569)
* **protocol-designer:** confirm when creating a new step when needed ([#5634](https://github.com/Opentrons/opentrons/issues/5634)) ([7b0cf77](https://github.com/Opentrons/opentrons/commit/7b0cf77))
* **protocol-designer:** Implement presaved step form for TC state ([#5641](https://github.com/Opentrons/opentrons/issues/5641)) ([32b191b](https://github.com/Opentrons/opentrons/commit/32b191b)), closes [#5596](https://github.com/Opentrons/opentrons/issues/5596)
* **protocol-designer:** implement TC robot state updaters ([#5657](https://github.com/Opentrons/opentrons/issues/5657)) ([34ff540](https://github.com/Opentrons/opentrons/commit/34ff540)), closes [#5611](https://github.com/Opentrons/opentrons/issues/5611)
* **protocol-designer:** implement thermocyclerFormToArgs for TC State ([#5640](https://github.com/Opentrons/opentrons/issues/5640)) ([b8d5f11](https://github.com/Opentrons/opentrons/commit/b8d5f11)), closes [#5597](https://github.com/Opentrons/opentrons/issues/5597)
* **protocol-designer:** make steps transient until saved ([#5560](https://github.com/Opentrons/opentrons/issues/5560)) ([2067b62](https://github.com/Opentrons/opentrons/commit/2067b62))
* **protocol-designer:** Remove custom tiprack feature flag ([#5631](https://github.com/Opentrons/opentrons/issues/5631)) ([3e83e78](https://github.com/Opentrons/opentrons/commit/3e83e78))
* **protocol-designer:** removes form level warnings for pause until temperature form ([#5655](https://github.com/Opentrons/opentrons/issues/5655)) ([5165f07](https://github.com/Opentrons/opentrons/commit/5165f07))
* **protocol-designer:** set up tc module state ([#5636](https://github.com/Opentrons/opentrons/issues/5636)) ([e61e731](https://github.com/Opentrons/opentrons/commit/e61e731)), closes [#5609](https://github.com/Opentrons/opentrons/issues/5609)
* **robot-server:** session response must contain session_id ([#5635](https://github.com/Opentrons/opentrons/issues/5635)) ([52313f5](https://github.com/Opentrons/opentrons/commit/52313f5))
* **robot-server, api:** calibration check fastapi  ([#5581](https://github.com/Opentrons/opentrons/issues/5581)) ([b44360d](https://github.com/Opentrons/opentrons/commit/b44360d))
* **robot-server,api:** robot-server's fastapi endpoints are now the default ([f69f276](https://github.com/Opentrons/opentrons/commit/f69f276)), closes [#5510](https://github.com/Opentrons/opentrons/issues/5510)





## [3.17.1](https://github.com/opentrons/opentrons/compare/v3.17.0...v3.17.1) (2020-05-06)

### Bug Fixes

* **api:** fix tempdeck simulate freeze ([#5563](https://github.com/Opentrons/opentrons/issues/5563)) ([ae2bdcb](https://github.com/Opentrons/opentrons/commit/ae2bdcb)), closes [#5561](https://github.com/Opentrons/opentrons/issues/5561)
* **app-shell:** upgrade Electron, avoid hoisting dependencies, and fix devtools ([#5545](https://github.com/Opentrons/opentrons/issues/5545)) ([f993925](https://github.com/Opentrons/opentrons/commit/f993925)), closes [#5537](https://github.com/Opentrons/opentrons/issues/5537) [#5541](https://github.com/Opentrons/opentrons/issues/5541)
* **api:** Correctly grab slot from labware object ([#5534](https://github.com/opentrons/opentrons/issues/5534)) ([8a3850a](https://github.com/opentrons/opentrons/commit/8a3850a))
* **api:** home only the axis probing after error ([#5525](https://github.com/opentrons/opentrons/issues/5525)) ([c0d640c](https://github.com/opentrons/opentrons/commit/c0d640c))
* **api:** allow protocol delay to be cancelled ([#5403](https://github.com/opentrons/opentrons/issues/5403)) ([c0ed09d](https://github.com/opentrons/opentrons/commit/c0ed09d)), closes [#5400](https://github.com/opentrons/opentrons/issues/5400)
* **api:** avoid tc lid when pathing ([#5390](https://github.com/opentrons/opentrons/issues/5390)) ([4a7fe0b](https://github.com/opentrons/opentrons/commit/4a7fe0b)), closes [#5263](https://github.com/opentrons/opentrons/issues/5263)
* **api:** Load the correct gantry calibration upon deck calibration exit ([#5469](https://github.com/opentrons/opentrons/issues/5469)) ([b03038d](https://github.com/opentrons/opentrons/commit/b03038d))
* **api:** verify the structure of v2 protocol ast ([#5454](https://github.com/opentrons/opentrons/issues/5454)) ([b45af1e](https://github.com/opentrons/opentrons/commit/b45af1e))
* **app:** ensure only one RPC connect request can go out at once ([#5322](https://github.com/opentrons/opentrons/issues/5322)) ([9465cef](https://github.com/opentrons/opentrons/commit/9465cef)), closes [#5241](https://github.com/opentrons/opentrons/issues/5241) [#5307](https://github.com/opentrons/opentrons/issues/5307)
* **protocol-designer:** add field level validation for magnetic module engage height ([#5339](https://github.com/opentrons/opentrons/issues/5339)) ([5e2aff6](https://github.com/opentrons/opentrons/commit/5e2aff6)), closes [#5274](https://github.com/opentrons/opentrons/issues/5274)
* **protocol-designer:** allow adding labware to slots again ([#5378](https://github.com/opentrons/opentrons/issues/5378)) ([e49e162](https://github.com/opentrons/opentrons/commit/e49e162)), closes [#5370](https://github.com/opentrons/opentrons/issues/5370)
* **protocol-designer:** Default to GEN1 model for TC ([#5443](https://github.com/opentrons/opentrons/issues/5443)) ([14c68c8](https://github.com/opentrons/opentrons/commit/14c68c8)), closes [#5389](https://github.com/opentrons/opentrons/issues/5389)
* **protocol-designer:** default to non-i18n step-gen errors if no i18n title ([#5360](https://github.com/opentrons/opentrons/issues/5360)) ([644b2db](https://github.com/opentrons/opentrons/commit/644b2db))
* **protocol-designer:** fix dnd steps vs labware bug ([#5370](https://github.com/opentrons/opentrons/issues/5370)) ([a6f6594](https://github.com/opentrons/opentrons/commit/a6f6594)), closes [#5367](https://github.com/opentrons/opentrons/issues/5367)
* **protocol-designer:** fix module substep text styling ([#5306](https://github.com/opentrons/opentrons/issues/5306)) ([61b94ab](https://github.com/opentrons/opentrons/commit/61b94ab)), closes [#5305](https://github.com/opentrons/opentrons/issues/5305)
* **protocol-designer:** Hide CrashInfoBox when module restrictions disabled ([#5295](https://github.com/opentrons/opentrons/issues/5295)) ([692f307](https://github.com/opentrons/opentrons/commit/692f307)), closes [#5276](https://github.com/opentrons/opentrons/issues/5276)
* **protocol-designer:** Only show slot access warnings for Gen1 modules ([#5313](https://github.com/opentrons/opentrons/issues/5313)) ([74d9d64](https://github.com/opentrons/opentrons/commit/74d9d64)), closes [#5309](https://github.com/opentrons/opentrons/issues/5309)
* **protocol-designer:** Remove mm unit from engage height field ([#5365](https://github.com/opentrons/opentrons/issues/5365)) ([fc18eea](https://github.com/opentrons/opentrons/commit/fc18eea))
* **protocol-designer:** rename 'module' variables to something else ([#5308](https://github.com/opentrons/opentrons/issues/5308)) ([e5536da](https://github.com/opentrons/opentrons/commit/e5536da)), closes [#5284](https://github.com/opentrons/opentrons/issues/5284)
* **protocol-designer:** Unify pause step item spacing ([#5408](https://github.com/opentrons/opentrons/issues/5408)) ([d75f471](https://github.com/opentrons/opentrons/commit/d75f471)), closes [#5387](https://github.com/opentrons/opentrons/issues/5387)
* **protocol-designer:** Update TC image proportions ([#5442](https://github.com/opentrons/opentrons/issues/5442)) ([0e5f284](https://github.com/opentrons/opentrons/commit/0e5f284)), closes [#5388](https://github.com/opentrons/opentrons/issues/5388)
* **protocol-designer:** updates module slot placement after warning modal is confirmed ([#5393](https://github.com/opentrons/opentrons/issues/5393)) ([0adc97e](https://github.com/opentrons/opentrons/commit/0adc97e))
* **protocol-designer e2e:** Add custom command to close the 3.17 announcement modal ([#5355](https://github.com/opentrons/opentrons/issues/5355)) ([77af8ac](https://github.com/opentrons/opentrons/commit/77af8ac))
* **robot-server:** add robot-server to monorepo's package.json [#5433](https://github.com/opentrons/opentrons/issues/5433) ([705b5cc](https://github.com/opentrons/opentrons/commit/705b5cc))
* **robot-server:** unavailable is a valid network connection state ([#5316](https://github.com/opentrons/opentrons/issues/5316)) ([7438453](https://github.com/opentrons/opentrons/commit/7438453))


### Features

* **api:** Add labware required to session status  ([#5298](https://github.com/opentrons/opentrons/issues/5298)) ([c602cd6](https://github.com/opentrons/opentrons/commit/c602cd6))
* **api:** Allow move, jog and tip handling for a cal session ([#5402](https://github.com/opentrons/opentrons/issues/5402)) ([d5ff537](https://github.com/opentrons/opentrons/commit/d5ff537))
* **api:** Allow moves to crosses and slot 5 ([#5415](https://github.com/opentrons/opentrons/issues/5415)) ([98ca207](https://github.com/opentrons/opentrons/commit/98ca207)), closes [#5099](https://github.com/opentrons/opentrons/issues/5099) [#5098](https://github.com/opentrons/opentrons/issues/5098)
* **api:** Allow Non-Full plate Thermocycler Configuration ([#5498](https://github.com/opentrons/opentrons/issues/5498)) ([60f6b16](https://github.com/opentrons/opentrons/commit/60f6b16))
* **app:** guide the user through leveling gen2 multis ([#5348](https://github.com/opentrons/opentrons/issues/5348)) ([185d0ad](https://github.com/opentrons/opentrons/commit/185d0ad)), closes [#5344](https://github.com/opentrons/opentrons/issues/5344)
* **components:** add hooks-based tooltip component to library ([#5362](https://github.com/opentrons/opentrons/issues/5362)) ([7ef3ca9](https://github.com/opentrons/opentrons/commit/7ef3ca9)), closes [#5120](https://github.com/opentrons/opentrons/issues/5120)
* **components:** add useHover and useHoverTooltip hooks ([#5364](https://github.com/opentrons/opentrons/issues/5364)) ([874d749](https://github.com/opentrons/opentrons/commit/874d749))
* **protocol-designer:** add PD Pause form migration for 3.0.x -> 4.0.0 ([#5373](https://github.com/opentrons/opentrons/issues/5373)) ([e3ce552](https://github.com/opentrons/opentrons/commit/e3ce552)), closes [#5371](https://github.com/opentrons/opentrons/issues/5371)
* **protocol-designer:** add warning modal switching mag model ([#5329](https://github.com/opentrons/opentrons/issues/5329)) ([2cfe3e1](https://github.com/opentrons/opentrons/commit/2cfe3e1)), closes [#5251](https://github.com/opentrons/opentrons/issues/5251)
* **protocol-designer:** allow GEN1 multi pipette access N/S of GEN2 modules ([#5341](https://github.com/opentrons/opentrons/issues/5341)) ([dc6af21](https://github.com/opentrons/opentrons/commit/dc6af21)), closes [#5331](https://github.com/opentrons/opentrons/issues/5331)
* **protocol-designer:** allow moving empty module under compat labware ([#5396](https://github.com/opentrons/opentrons/issues/5396)) ([57ef5ce](https://github.com/opentrons/opentrons/commit/57ef5ce)), closes [#5384](https://github.com/opentrons/opentrons/issues/5384)
* **protocol-designer:** allow user to select module model when adding or editing modules ([#5284](https://github.com/opentrons/opentrons/issues/5284)) ([8ad1607](https://github.com/opentrons/opentrons/commit/8ad1607)), closes [#5188](https://github.com/opentrons/opentrons/issues/5188)
* **protocol-designer:** Enable magnetic and temperature module support ([#5304](https://github.com/opentrons/opentrons/issues/5304)) ([8235e71](https://github.com/opentrons/opentrons/commit/8235e71)), closes [#4968](https://github.com/opentrons/opentrons/issues/4968)
* **protocol-designer:** hide slot placement tooltip when slot dropdown enabled ([#5405](https://github.com/opentrons/opentrons/issues/5405)) ([8a8b757](https://github.com/opentrons/opentrons/commit/8a8b757)), closes [#5385](https://github.com/opentrons/opentrons/issues/5385)
* **protocol-designer:** Implement custom tiprack UI behind flag ([#5440](https://github.com/opentrons/opentrons/issues/5440)) ([1fc35fd](https://github.com/opentrons/opentrons/commit/1fc35fd)), closes [#5332](https://github.com/opentrons/opentrons/issues/5332)
* **protocol-designer:** preserve engage heights if already default ([#5294](https://github.com/opentrons/opentrons/issues/5294)) ([9cac165](https://github.com/opentrons/opentrons/commit/9cac165)), closes [#5232](https://github.com/opentrons/opentrons/issues/5232)
* **protocol-designer:** Remove multi gen2 feature flag ([#5351](https://github.com/opentrons/opentrons/issues/5351)) ([4a2a1fd](https://github.com/opentrons/opentrons/commit/4a2a1fd)), closes [#5336](https://github.com/opentrons/opentrons/issues/5336)
* **protocol-designer:** remove unnecessary comment ([#5379](https://github.com/opentrons/opentrons/issues/5379)) ([12277df](https://github.com/opentrons/opentrons/commit/12277df))
* **protocol-designer:** update export v4 protocol modal copy ([#5356](https://github.com/opentrons/opentrons/issues/5356)) ([81489a0](https://github.com/opentrons/opentrons/commit/81489a0))
* **protocol-designer:** update intro announcement modal copy ([#5345](https://github.com/opentrons/opentrons/issues/5345)) ([20e2a96](https://github.com/opentrons/opentrons/commit/20e2a96)), closes [#5334](https://github.com/opentrons/opentrons/issues/5334)
* **protocol-designer:** update pause until temp modal copy ([#5434](https://github.com/opentrons/opentrons/issues/5434)) ([441f30e](https://github.com/opentrons/opentrons/commit/441f30e)), closes [#5432](https://github.com/opentrons/opentrons/issues/5432)
* **protocol-designer:** use model-specific engageHeight diagram ([#5273](https://github.com/opentrons/opentrons/issues/5273)) ([a85f206](https://github.com/opentrons/opentrons/commit/a85f206)), closes [#5228](https://github.com/opentrons/opentrons/issues/5228)
* **robot-server:** create middleware to support api versioning ([#5438](https://github.com/opentrons/opentrons/issues/5438)) ([6fed41a](https://github.com/opentrons/opentrons/commit/6fed41a)), closes [#4633](https://github.com/opentrons/opentrons/issues/4633)
* **robot-server:** make fastapi return v1 style errors ([#5404](https://github.com/opentrons/opentrons/issues/5404)) ([906c399](https://github.com/opentrons/opentrons/commit/906c399)), closes [#5285](https://github.com/opentrons/opentrons/issues/5285)
* **robot-server:** return correct error format based on endpoint ([e6a98ad](https://github.com/opentrons/opentrons/commit/e6a98ad)), closes [#5401](https://github.com/opentrons/opentrons/issues/5401)
* **robot-server:** Robot server logging and settings ([#5398](https://github.com/opentrons/opentrons/issues/5398)) ([041c313](https://github.com/opentrons/opentrons/commit/041c313)), closes [#5013](https://github.com/opentrons/opentrons/issues/5013)
* **robot-server, api:** calibration check overhaul ([#5465](https://github.com/opentrons/opentrons/issues/5465)) ([4feeeba](https://github.com/opentrons/opentrons/commit/4feeeba))
* **shared-data:** add nest_96_wellplate_2ml_deep ([#5503](https://github.com/opentrons/opentrons/issues/5503)) ([3002453](https://github.com/opentrons/opentrons/commit/3002453))





# [3.17.0](https://github.com/opentrons/opentrons/compare/v3.17.0-beta.1...v3.17.0) (2020-04-23)

**Note:** Version bump only for package opentrons





# [3.17.0-beta.1](https://github.com/opentrons/opentrons/compare/v3.17.0-beta.0...v3.17.0-beta.1) (2020-04-14)

### Bug Fixes

* **api:** allow protocol delay to be cancelled ([#5403](https://github.com/opentrons/opentrons/issues/5403)) ([67d090e](https://github.com/opentrons/opentrons/commit/67d090e)), closes [#5400](https://github.com/opentrons/opentrons/issues/5400)
* **api:** correctly set magdeck offsets ([#5416](https://github.com/opentrons/opentrons/issues/5416)) ([5c121cf](https://github.com/opentrons/opentrons/commit/5c121cf))





# [3.17.0-beta.0](https://github.com/opentrons/opentrons/compare/v3.16.1...v3.17.0-beta.0) (2020-04-01)

### Bug Fixes

* **api:** correctly handle magdeck engage kwargs ([#5330](https://github.com/opentrons/opentrons/issues/5330)) ([57c0382](https://github.com/opentrons/opentrons/commit/57c0382))
* **api:** fix missing arg in v1 move splitting during cache instr models ([#5338](https://github.com/opentrons/opentrons/issues/5338)) ([057bea5](https://github.com/opentrons/opentrons/commit/057bea5))
* **api:** move splitting: strip step postfix ([#5337](https://github.com/opentrons/opentrons/issues/5337)) ([e36217a](https://github.com/opentrons/opentrons/commit/e36217a))
* **api:** fix blocking module tasks ([#5315](https://github.com/opentrons/opentrons/issues/5315)) ([0f4e2c1](https://github.com/opentrons/opentrons/commit/0f4e2c1)), closes [#5312](https://github.com/opentrons/opentrons/issues/5312)
* **api:** fix update module firmware ([#5317](https://github.com/opentrons/opentrons/issues/5317)) ([63808c2](https://github.com/opentrons/opentrons/commit/63808c2)), closes [#5314](https://github.com/opentrons/opentrons/issues/5314)
* **app:** alignment and time formatting in thermocycler card ([#5320](https://github.com/opentrons/opentrons/issues/5320)) ([3c7fcc8](https://github.com/opentrons/opentrons/commit/3c7fcc8))
* **app:** fix tiprack in tip probe instructions when tipracks are shared ([#5319](https://github.com/opentrons/opentrons/issues/5319)) ([7d5f4ab](https://github.com/opentrons/opentrons/commit/7d5f4ab)), closes [#5311](https://github.com/opentrons/opentrons/issues/5311)
* **api:** add ThreadManager.cleanup() calls in test fixtures ([#5109](https://github.com/opentrons/opentrons/issues/5109)) ([45f81db](https://github.com/opentrons/opentrons/commit/45f81db))
* **api:** Avoid Python 3.8 unsupported `str in Enum` expression ([#5088](https://github.com/opentrons/opentrons/issues/5088)) ([6f399ba](https://github.com/opentrons/opentrons/commit/6f399ba))
* **api:** call module functions across threads ([#5194](https://github.com/opentrons/opentrons/issues/5194)) ([ba1afe2](https://github.com/opentrons/opentrons/commit/ba1afe2))
* **api:** compare smoothie version before hardware controller on boot ([#5165](https://github.com/opentrons/opentrons/issues/5165)) ([285211f](https://github.com/opentrons/opentrons/commit/285211f))
* **api:** exec protocol contents in module mode ([#5292](https://github.com/opentrons/opentrons/issues/5292)) ([0174ab3](https://github.com/opentrons/opentrons/commit/0174ab3)), closes [#4982](https://github.com/opentrons/opentrons/issues/4982) [#4981](https://github.com/opentrons/opentrons/issues/4981)
* **api:** fix recent change breaking api server init ([#5003](https://github.com/opentrons/opentrons/issues/5003)) ([01fccdf](https://github.com/opentrons/opentrons/commit/01fccdf))
* **api:** fix server crash due to unresponsive motor controller at boot ([#5277](https://github.com/opentrons/opentrons/issues/5277)) ([103e3d1](https://github.com/opentrons/opentrons/commit/103e3d1))
* **api:** make api coroutine properties sync for polls during pause ([#5166](https://github.com/opentrons/opentrons/issues/5166)) ([e9dcd9e](https://github.com/opentrons/opentrons/commit/e9dcd9e))
* **api:** make hardware control gantry fns observe execution manager ([#5180](https://github.com/opentrons/opentrons/issues/5180)) ([c143bcf](https://github.com/opentrons/opentrons/commit/c143bcf))
* **api:** make sure we move plunger to bottom after home ([#5253](https://github.com/opentrons/opentrons/issues/5253)) ([f298b6e](https://github.com/opentrons/opentrons/commit/f298b6e)), closes [#5164](https://github.com/opentrons/opentrons/issues/5164)
* **api:** properly parse escaped nmcli responses ([#5246](https://github.com/opentrons/opentrons/issues/5246)) ([91178f0](https://github.com/opentrons/opentrons/commit/91178f0))
* **api:** remove unnecessary pipette movement during mix ([#5128](https://github.com/opentrons/opentrons/issues/5128)) ([88e1893](https://github.com/opentrons/opentrons/commit/88e1893)), closes [#4640](https://github.com/opentrons/opentrons/issues/4640)
* **api:** reset location cache before tip probe ([#5269](https://github.com/opentrons/opentrons/issues/5269)) ([53977ec](https://github.com/opentrons/opentrons/commit/53977ec)), closes [#4793](https://github.com/opentrons/opentrons/issues/4793)
* **api:** return tips to tipracks from the same height as drop tip ([#5187](https://github.com/opentrons/opentrons/issues/5187)) ([82187ed](https://github.com/opentrons/opentrons/commit/82187ed)), closes [#5186](https://github.com/opentrons/opentrons/issues/5186)
* **api:** ThreadManager hides builder exceptions ([#5108](https://github.com/opentrons/opentrons/issues/5108)) ([9c50a79](https://github.com/opentrons/opentrons/commit/9c50a79))
* **app:** accept mixed-case extensions for protocols and custom labware ([#5153](https://github.com/opentrons/opentrons/issues/5153)) ([12cce54](https://github.com/opentrons/opentrons/commit/12cce54)), closes [#5151](https://github.com/opentrons/opentrons/issues/5151)
* **app:** build RPC pipette tip rack list from both containers and instruments ([#5147](https://github.com/opentrons/opentrons/issues/5147)) ([2c5fc9f](https://github.com/opentrons/opentrons/commit/2c5fc9f))
* **app:** Deck cal: Tell users to attach an Opentrons tip, not a GEB tip. ([#5048](https://github.com/opentrons/opentrons/issues/5048)) ([336bb17](https://github.com/opentrons/opentrons/commit/336bb17))
* **app:** disable module commands when protocol paused ([#5209](https://github.com/opentrons/opentrons/issues/5209)) ([b313c95](https://github.com/opentrons/opentrons/commit/b313c95))
* **protocol-designer:** fix bug with selecting magnet > disengage step ([#5257](https://github.com/opentrons/opentrons/issues/5257)) ([42e6a65](https://github.com/opentrons/opentrons/commit/42e6a65)), closes [#5247](https://github.com/opentrons/opentrons/issues/5247)
* **protocol-designer:** fix failing action test ([#5002](https://github.com/opentrons/opentrons/issues/5002)) ([46f6d3f](https://github.com/opentrons/opentrons/commit/46f6d3f))
* **protocol-designer:** fix tests for FileSidebar after merging [#5029](https://github.com/opentrons/opentrons/issues/5029) ([#5077](https://github.com/opentrons/opentrons/issues/5077)) ([62a4461](https://github.com/opentrons/opentrons/commit/62a4461))
* **protocol-designer:** fix typo in deck setup explanation modal ([#5104](https://github.com/opentrons/opentrons/issues/5104)) ([5a70562](https://github.com/opentrons/opentrons/commit/5a70562)), closes [#5102](https://github.com/opentrons/opentrons/issues/5102)
* **protocol-designer:** null out deleted module IDs from step forms ([#5017](https://github.com/opentrons/opentrons/issues/5017)) ([5a94de5](https://github.com/opentrons/opentrons/commit/5a94de5)), closes [#4883](https://github.com/opentrons/opentrons/issues/4883)
* **protocol-designer:** removes error when fn cannot find temperature or thermocycler on deck ([#4994](https://github.com/opentrons/opentrons/issues/4994)) ([951a3e1](https://github.com/opentrons/opentrons/commit/951a3e1)), closes [#4841](https://github.com/opentrons/opentrons/issues/4841)
* **protocol-designer:** round caption under engage height to match input box ([#4993](https://github.com/opentrons/opentrons/issues/4993)) ([f5c2c47](https://github.com/opentrons/opentrons/commit/f5c2c47)), closes [#4912](https://github.com/opentrons/opentrons/issues/4912)
* **protocol-designer:** set magnetic module params for both pristine … ([#4990](https://github.com/opentrons/opentrons/issues/4990)) ([9b3fef1](https://github.com/opentrons/opentrons/commit/9b3fef1)), closes [#4908](https://github.com/opentrons/opentrons/issues/4908)
* **protocol-designer:** Update conditional experimental settings warning text ([#4978](https://github.com/opentrons/opentrons/issues/4978)) ([cd3d645](https://github.com/opentrons/opentrons/commit/cd3d645)), closes [#4911](https://github.com/opentrons/opentrons/issues/4911)
* **protocol-designer:** Update SlotMap and CrashInfoBox styles ([#4996](https://github.com/opentrons/opentrons/issues/4996)) ([845b465](https://github.com/opentrons/opentrons/commit/845b465)), closes [#4989](https://github.com/opentrons/opentrons/issues/4989)
* **protocol-designer:** Update temperature modules disengage text ([#5159](https://github.com/opentrons/opentrons/issues/5159)) ([bc9d503](https://github.com/opentrons/opentrons/commit/bc9d503)), closes [#5111](https://github.com/opentrons/opentrons/issues/5111)
* **robot-server:** cannot import log control ([#5207](https://github.com/opentrons/opentrons/issues/5207)) ([74191db](https://github.com/opentrons/opentrons/commit/74191db))
* **robot-server:** fix failure in fw_version reading in health endpoint. ([#5185](https://github.com/opentrons/opentrons/issues/5185)) ([1944fe6](https://github.com/opentrons/opentrons/commit/1944fe6))
* **robot-server:** fix typing_extensions bug introduced in json response work ([#5281](https://github.com/opentrons/opentrons/issues/5281)) ([dd3a915](https://github.com/opentrons/opentrons/commit/dd3a915)), closes [#5275](https://github.com/opentrons/opentrons/issues/5275)
* **shared-data:** fix typo in v4 protocol schema ([#4997](https://github.com/opentrons/opentrons/issues/4997)) ([2483b00](https://github.com/opentrons/opentrons/commit/2483b00))


### Features

* **api:** Add API calibration check session ([#5197](https://github.com/opentrons/opentrons/issues/5197)) ([6fa9346](https://github.com/opentrons/opentrons/commit/6fa9346))
* **api:** add start set temperature to api ([#5179](https://github.com/opentrons/opentrons/issues/5179)) ([cdf0c8a](https://github.com/opentrons/opentrons/commit/cdf0c8a)), closes [#5176](https://github.com/opentrons/opentrons/issues/5176)
* **api:** add v4 JSON executor ([#5221](https://github.com/opentrons/opentrons/issues/5221)) ([e81cb56](https://github.com/opentrons/opentrons/commit/e81cb56))
* **api:** add wifi disconnect capability ([#4957](https://github.com/opentrons/opentrons/issues/4957)) ([67155a8](https://github.com/opentrons/opentrons/commit/67155a8))
* **api:** create a centralized hw execution manager ([#5138](https://github.com/opentrons/opentrons/issues/5138)) ([af10af2](https://github.com/opentrons/opentrons/commit/af10af2)), closes [#4871](https://github.com/opentrons/opentrons/issues/4871)
* **api:** Define existing endpoints using FastAPI/Pydantic ([#4962](https://github.com/opentrons/opentrons/issues/4962)) ([6ec838f](https://github.com/opentrons/opentrons/commit/6ec838f)), closes [#4917](https://github.com/opentrons/opentrons/issues/4917)
* **api:** invert management of hw control thread ([#5078](https://github.com/opentrons/opentrons/issues/5078)) ([b8f543a](https://github.com/opentrons/opentrons/commit/b8f543a)), closes [#4870](https://github.com/opentrons/opentrons/issues/4870)
* **api:** robot server replaces api ([#5139](https://github.com/opentrons/opentrons/issues/5139)) ([ab7905d](https://github.com/opentrons/opentrons/commit/ab7905d)), closes [#5049](https://github.com/opentrons/opentrons/issues/5049)
* **api:** robot-server sub project created  ([#5130](https://github.com/opentrons/opentrons/issues/5130)) ([9671575](https://github.com/opentrons/opentrons/commit/9671575)), closes [#5011](https://github.com/opentrons/opentrons/issues/5011) [#5012](https://github.com/opentrons/opentrons/issues/5012)
* **api:** support gen2 modules ([#5039](https://github.com/opentrons/opentrons/issues/5039)) ([fa7a320](https://github.com/opentrons/opentrons/commit/fa7a320)), closes [#4960](https://github.com/opentrons/opentrons/issues/4960)
* **api:** updated images for all modules ([#5210](https://github.com/opentrons/opentrons/issues/5210)) ([7e80a5b](https://github.com/opentrons/opentrons/commit/7e80a5b)), closes [#4224](https://github.com/opentrons/opentrons/issues/4224)
* **api:** use instrument max achievable height in plan_moves ([#5193](https://github.com/opentrons/opentrons/issues/5193)) ([65425da](https://github.com/opentrons/opentrons/commit/65425da)), closes [#5156](https://github.com/opentrons/opentrons/issues/5156)
* **app:** add Wi-Fi disconnect to app ([#5296](https://github.com/opentrons/opentrons/issues/5296)) ([f6620ee](https://github.com/opentrons/opentrons/commit/f6620ee))
* **app:** enable gen2 multi pipettes ([#5297](https://github.com/opentrons/opentrons/issues/5297)) ([707f0ab](https://github.com/opentrons/opentrons/commit/707f0ab)), closes [#4698](https://github.com/opentrons/opentrons/issues/4698)
* **app:** report PAPI version during protocol analytics events ([#5053](https://github.com/opentrons/opentrons/issues/5053)) ([493a2ea](https://github.com/opentrons/opentrons/commit/493a2ea)), closes [#4971](https://github.com/opentrons/opentrons/issues/4971)
* **app, components:** Support gen2 modules ([#5177](https://github.com/opentrons/opentrons/issues/5177)) ([3a938ff](https://github.com/opentrons/opentrons/commit/3a938ff)), closes [#4960](https://github.com/opentrons/opentrons/issues/4960)
* **js:** update Formik to v2 ([#5190](https://github.com/opentrons/opentrons/issues/5190)) ([b15d360](https://github.com/opentrons/opentrons/commit/b15d360))
* **labware-library:** Support more pipettes in custom labware test protocol ([#5084](https://github.com/opentrons/opentrons/issues/5084)), and use opentrons_96_tiprack_20ul instead of 10ul ([19dce65](https://github.com/opentrons/opentrons/commit/19dce65))
* **protocol-designer:** add border to module tag when hovering over step ([#5161](https://github.com/opentrons/opentrons/issues/5161)) ([b04ee69](https://github.com/opentrons/opentrons/commit/b04ee69)), closes [#5110](https://github.com/opentrons/opentrons/issues/5110)
* **protocol-designer:** add modal to add a pause after set temp ([#5182](https://github.com/opentrons/opentrons/issues/5182)) ([dbae680](https://github.com/opentrons/opentrons/commit/dbae680)), closes [#5117](https://github.com/opentrons/opentrons/issues/5117)
* **protocol-designer:** Add module prefix to labware ([#5205](https://github.com/opentrons/opentrons/issues/5205)) ([1f979dd](https://github.com/opentrons/opentrons/commit/1f979dd)), closes [#5119](https://github.com/opentrons/opentrons/issues/5119)
* **protocol-designer:** Add V4 export warning modal ([#5092](https://github.com/opentrons/opentrons/issues/5092)) ([e63577b](https://github.com/opentrons/opentrons/commit/e63577b)), closes [#4934](https://github.com/opentrons/opentrons/issues/4934)
* **protocol-designer:** allow custom labware on modules ([#5175](https://github.com/opentrons/opentrons/issues/5175)) ([1c4e1b5](https://github.com/opentrons/opentrons/commit/1c4e1b5)), closes [#4910](https://github.com/opentrons/opentrons/issues/4910)
* **protocol-designer:** allow modules to be placed on compatble labware ([#4972](https://github.com/opentrons/opentrons/issues/4972)) ([5abd33f](https://github.com/opentrons/opentrons/commit/5abd33f)), closes [#4726](https://github.com/opentrons/opentrons/issues/4726)
* **protocol-designer:** allow selection of gen 2 modules and use formik ([#5265](https://github.com/opentrons/opentrons/issues/5265)) ([71b59ce](https://github.com/opentrons/opentrons/commit/71b59ce)), closes [#5150](https://github.com/opentrons/opentrons/issues/5150)
* **protocol-designer:** allow setting initial settings w env vars ([#5268](https://github.com/opentrons/opentrons/issues/5268)) ([ba52ae4](https://github.com/opentrons/opentrons/commit/ba52ae4))
* **protocol-designer:** allow user to bypass typeform modal ([#5169](https://github.com/opentrons/opentrons/issues/5169)) ([e7ecaf6](https://github.com/opentrons/opentrons/commit/e7ecaf6)), closes [#5126](https://github.com/opentrons/opentrons/issues/5126)
* **protocol-designer:** clear out engageHeight ([#5254](https://github.com/opentrons/opentrons/issues/5254)) ([2417071](https://github.com/opentrons/opentrons/commit/2417071)), closes [#5225](https://github.com/opentrons/opentrons/issues/5225)
* **protocol-designer:** create modal component to show announcements ([#5091](https://github.com/opentrons/opentrons/issues/5091)) ([225c12a](https://github.com/opentrons/opentrons/commit/225c12a)), closes [#4995](https://github.com/opentrons/opentrons/issues/4995)
* **protocol-designer:** disambiguate module model vs type ([#5029](https://github.com/opentrons/opentrons/issues/5029)) ([a1f4740](https://github.com/opentrons/opentrons/commit/a1f4740)), closes [#4897](https://github.com/opentrons/opentrons/issues/4897)
* **protocol-designer:** remove warnings and display correct version for gen 2 modules ([#5224](https://github.com/opentrons/opentrons/issues/5224)) ([a24a544](https://github.com/opentrons/opentrons/commit/a24a544)), closes [#5152](https://github.com/opentrons/opentrons/issues/5152)
* **protocol-designer:** reset time fields in pause step ([#4950](https://github.com/opentrons/opentrons/issues/4950)) ([4297a54](https://github.com/opentrons/opentrons/commit/4297a54)), closes [#4949](https://github.com/opentrons/opentrons/issues/4949)
* **protocol-designer:** save v3/v4 files correctly ([#5100](https://github.com/opentrons/opentrons/issues/5100)) ([53e8ddf](https://github.com/opentrons/opentrons/commit/53e8ddf)), closes [#4919](https://github.com/opentrons/opentrons/issues/4919)
* **protocol-designer:** unify "button row" styles ([#5056](https://github.com/opentrons/opentrons/issues/5056)) ([06c74d9](https://github.com/opentrons/opentrons/commit/06c74d9))
* **protocol-designer:** use different ranges for gen1 vs gen2 engageHeight ([#5262](https://github.com/opentrons/opentrons/issues/5262)) ([434ca61](https://github.com/opentrons/opentrons/commit/434ca61)), closes [#5230](https://github.com/opentrons/opentrons/issues/5230)
* **robot_server:** add missing endpoints to robot_server from api ([#5167](https://github.com/opentrons/opentrons/issues/5167)) ([a0b0e50](https://github.com/opentrons/opentrons/commit/a0b0e50))
* **robot-server:** add formatted json responses and error handling ([#5208](https://github.com/opentrons/opentrons/issues/5208)) ([25e9298](https://github.com/opentrons/opentrons/commit/25e9298))
* **scripts:** python_build_utils supports upcoming api split  ([#5113](https://github.com/opentrons/opentrons/issues/5113)) ([be46e64](https://github.com/opentrons/opentrons/commit/be46e64))
* **shared-data:** correct existing labware defs engageHeight ([#5261](https://github.com/opentrons/opentrons/issues/5261)) ([767054d](https://github.com/opentrons/opentrons/commit/767054d)), closes [#5226](https://github.com/opentrons/opentrons/issues/5226)
* include all vscode configs in gitignore ([#5222](https://github.com/opentrons/opentrons/issues/5222)) ([30a4e97](https://github.com/opentrons/opentrons/commit/30a4e97))





## [3.16.1](https://github.com/opentrons/opentrons/compare/v3.16.0...v3.16.1) (2020-02-25)

### Bug Fixes

* **api:** always clean up in script entries on error ([#5064](https://github.com/opentrons/opentrons/issues/5064)) ([e98fdd1](https://github.com/opentrons/opentrons/commit/e98fdd1)), closes [#5061](https://github.com/opentrons/opentrons/issues/5061)
* **api:** correctly set api level in session sim ([#5063](https://github.com/opentrons/opentrons/issues/5063)) ([9f4cb1d](https://github.com/opentrons/opentrons/commit/9f4cb1d)), closes [#5060](https://github.com/opentrons/opentrons/issues/5060)
* **api:** do not check used tips after pickup ([#5062](https://github.com/opentrons/opentrons/issues/5062)) ([5c155d9](https://github.com/opentrons/opentrons/commit/5c155d9)), closes [#5059](https://github.com/opentrons/opentrons/issues/5059)





# [3.16.0](https://github.com/opentrons/opentrons/compare/v3.15.2...v3.16.0) (2020-02-19)

### Bug Fixes

* **api:** make probe failures raise the actual error ([#5015](https://github.com/opentrons/opentrons/issues/5015)) ([bc74517](https://github.com/opentrons/opentrons/commit/bc74517)), closes [#4980](https://github.com/opentrons/opentrons/issues/4980)
* **api:** swallow hard-halt-related errors and hold lock in session.stop() ([#4980](https://github.com/opentrons/opentrons/issues/4980)) ([c42d4dc](https://github.com/opentrons/opentrons/commit/c42d4dc)), closes [#4979](https://github.com/opentrons/opentrons/issues/4979)
* **api:** Add back in useProtocolApi2 feature flag ([#4665](https://github.com/opentrons/opentrons/issues/4665)) ([5c3fae3](https://github.com/opentrons/opentrons/commit/5c3fae3))
* **api:** amend temperature module old bootloader check ([#4942](https://github.com/opentrons/opentrons/issues/4942)) ([dbc90cb](https://github.com/opentrons/opentrons/commit/dbc90cb))
* **api:** apiv2: allow multi to access all 384 wells in transfer ([#4678](https://github.com/opentrons/opentrons/issues/4678)) ([975915a](https://github.com/opentrons/opentrons/commit/975915a)), closes [#4669](https://github.com/opentrons/opentrons/issues/4669)
* **api:** bug in MalformedProtocolError.__str__ ([28a0eca](https://github.com/opentrons/opentrons/commit/28a0eca))
* **api:** Clarify intended use of "Use older pipette calibrations" flag ([#4677](https://github.com/opentrons/opentrons/issues/4677)) ([0f2d7e3](https://github.com/opentrons/opentrons/commit/0f2d7e3))
* **api:** detect old bootloaders, fix tc enter bootloader, remove ununused paths ([#4935](https://github.com/opentrons/opentrons/issues/4935)) ([cfa5374](https://github.com/opentrons/opentrons/commit/cfa5374)), closes [#4575](https://github.com/opentrons/opentrons/issues/4575)
* **api:** do not pick up returned tips ([#4681](https://github.com/opentrons/opentrons/issues/4681)) ([5d358f2](https://github.com/opentrons/opentrons/commit/5d358f2)), closes [#4668](https://github.com/opentrons/opentrons/issues/4668)
* **api:** Ensure position is fully updated after a home ([#4915](https://github.com/opentrons/opentrons/issues/4915)) ([00b8d5b](https://github.com/opentrons/opentrons/commit/00b8d5b))
* **api:** Fix simulate file from python shell ([#4660](https://github.com/opentrons/opentrons/issues/4660)) ([7fc6bbe](https://github.com/opentrons/opentrons/commit/7fc6bbe))
* **api:** more specific errors for bad json protocols ([#4967](https://github.com/opentrons/opentrons/issues/4967)) ([885a6f8](https://github.com/opentrons/opentrons/commit/885a6f8)), closes [#4735](https://github.com/opentrons/opentrons/issues/4735) [#4515](https://github.com/opentrons/opentrons/issues/4515)
* **api:** properly clean up threads in opentrons_simulate, _execute ([#4694](https://github.com/opentrons/opentrons/issues/4694)) ([31bd02d](https://github.com/opentrons/opentrons/commit/31bd02d))
* **api:** restore plunger current before move to bottom after drop tip ([#4831](https://github.com/opentrons/opentrons/issues/4831)) ([d07efcb](https://github.com/opentrons/opentrons/commit/d07efcb))
* **api:** set default move timeout to 12000 instead of 60 ([#4768](https://github.com/opentrons/opentrons/issues/4768)) ([6e28b2b](https://github.com/opentrons/opentrons/commit/6e28b2b)), closes [#4755](https://github.com/opentrons/opentrons/issues/4755)
* **api:** smoothie driver: Limit high currents to moving axes ([#4729](https://github.com/opentrons/opentrons/issues/4729)) ([7e728ea](https://github.com/opentrons/opentrons/commit/7e728ea)), closes [#4714](https://github.com/opentrons/opentrons/issues/4714)
* **api:** split out tc deactivation at driver level ([#4624](https://github.com/opentrons/opentrons/issues/4624)) ([ae15a7f](https://github.com/opentrons/opentrons/commit/ae15a7f))
* **api:** typo in Session.turn_off_rail_lights ([#4948](https://github.com/opentrons/opentrons/issues/4948)) ([44bf050](https://github.com/opentrons/opentrons/commit/44bf050))
* **api:** Use specified port in tools ([#4812](https://github.com/opentrons/opentrons/issues/4812)) ([5351183](https://github.com/opentrons/opentrons/commit/5351183))
* **api:** Utilize return tip height from pipette configs ([#4828](https://github.com/opentrons/opentrons/issues/4828)) ([b388c4e](https://github.com/opentrons/opentrons/commit/b388c4e))
* **app:** add spinner to "Save" button in Pipette Settings ([#4685](https://github.com/opentrons/opentrons/issues/4685)) ([b8a9aac](https://github.com/opentrons/opentrons/commit/b8a9aac)), closes [#4583](https://github.com/opentrons/opentrons/issues/4583)
* **app:** clear lw calibration state if top level home is called ([#4703](https://github.com/opentrons/opentrons/issues/4703)) ([8fe7120](https://github.com/opentrons/opentrons/commit/8fe7120))
* **app:** home all axes after lw calibration to allow deck access ([#4687](https://github.com/opentrons/opentrons/issues/4687)) ([6e0ad61](https://github.com/opentrons/opentrons/commit/6e0ad61)), closes [#4034](https://github.com/opentrons/opentrons/issues/4034)
* **protocol-designer:** fix warnings not displaying during timeline creation process ([#4840](https://github.com/opentrons/opentrons/issues/4840)) ([111f36b](https://github.com/opentrons/opentrons/commit/111f36b)), closes [#4829](https://github.com/opentrons/opentrons/issues/4829)
* **protocol-designer:** Update magnetic module recommended labware ([#4827](https://github.com/opentrons/opentrons/issues/4827)) ([42ec004](https://github.com/opentrons/opentrons/commit/42ec004)), closes [#4825](https://github.com/opentrons/opentrons/issues/4825)
* **protocol-designer:** Update maskToNumber to allow for negatives and 0 ([#4709](https://github.com/opentrons/opentrons/issues/4709)) ([79c7818](https://github.com/opentrons/opentrons/commit/79c7818)), closes [#4305](https://github.com/opentrons/opentrons/issues/4305)
* **protocol-designer:** when adding new module only update mag steps … ([#4839](https://github.com/opentrons/opentrons/issues/4839)) ([ea014fc](https://github.com/opentrons/opentrons/commit/ea014fc)), closes [#4823](https://github.com/opentrons/opentrons/issues/4823) [#4823](https://github.com/opentrons/opentrons/issues/4823)


### Features

* **api:** Add an OpenAPI spec for the HTTP API ([#4691](https://github.com/opentrons/opentrons/issues/4691)) ([cb195a5](https://github.com/opentrons/opentrons/commit/cb195a5)), closes [#4635](https://github.com/opentrons/opentrons/issues/4635)
* **api:** add module def schema v2 and v2 defs ([#4805](https://github.com/opentrons/opentrons/issues/4805)) ([4018254](https://github.com/opentrons/opentrons/commit/4018254)), closes [#4222](https://github.com/opentrons/opentrons/issues/4222)
* **api:** add p10m v1.6 ([#4722](https://github.com/opentrons/opentrons/issues/4722)) ([c25c887](https://github.com/opentrons/opentrons/commit/c25c887))
* **api:** add perform module fw update endpoint ([#4889](https://github.com/opentrons/opentrons/issues/4889)) ([5354eff](https://github.com/opentrons/opentrons/commit/5354eff)), closes [#4576](https://github.com/opentrons/opentrons/issues/4576)
* **api:** apiv2: add height_from_base arg to MagneticModuleContext.engage() ([#4707](https://github.com/opentrons/opentrons/issues/4707)) ([ffaee78](https://github.com/opentrons/opentrons/commit/ffaee78)), closes [#4213](https://github.com/opentrons/opentrons/issues/4213)
* **api:** change attach pipette positions to match leveling blocks ([#4888](https://github.com/opentrons/opentrons/issues/4888)) ([b10fe2e](https://github.com/opentrons/opentrons/commit/b10fe2e)), closes [#4679](https://github.com/opentrons/opentrons/issues/4679)
* **api:** make modules aware of available fw updates in file system ([#4856](https://github.com/opentrons/opentrons/issues/4856)) ([4ede522](https://github.com/opentrons/opentrons/commit/4ede522)), closes [#4575](https://github.com/opentrons/opentrons/issues/4575)
* **app:** allow custom labware dir to be opened and reset to default ([#4918](https://github.com/opentrons/opentrons/issues/4918)) ([03c438a](https://github.com/opentrons/opentrons/commit/03c438a)), closes [#4878](https://github.com/opentrons/opentrons/issues/4878) [#4879](https://github.com/opentrons/opentrons/issues/4879)
* **app:** enable module firmware update button when update available ([#4923](https://github.com/opentrons/opentrons/issues/4923)) ([1edc587](https://github.com/opentrons/opentrons/commit/1edc587)), closes [#4575](https://github.com/opentrons/opentrons/issues/4575)
* **components:** Add mini slot map to shared components ([#4890](https://github.com/opentrons/opentrons/issues/4890)) ([8b2904c](https://github.com/opentrons/opentrons/commit/8b2904c))
* **labware-library:** add decks 1 and 7 to labwareTestProtocol before labware test ([#4647](https://github.com/opentrons/opentrons/issues/4647)) ([f1e560a](https://github.com/opentrons/opentrons/commit/f1e560a))
* **protocol-designer:** Add awaitTemperature substep items ([#4945](https://github.com/opentrons/opentrons/issues/4945)) ([d576961](https://github.com/opentrons/opentrons/commit/d576961)), closes [#4863](https://github.com/opentrons/opentrons/issues/4863)
* **protocol-designer:** Add clarity around engage height ([#4921](https://github.com/opentrons/opentrons/issues/4921)) ([8f84e34](https://github.com/opentrons/opentrons/commit/8f84e34)), closes [#4727](https://github.com/opentrons/opentrons/issues/4727)
* **protocol-designer:** add commands for temperature step ([#4770](https://github.com/opentrons/opentrons/issues/4770)) ([6aff0e8](https://github.com/opentrons/opentrons/commit/6aff0e8))
* **protocol-designer:** add field and form level validation for pause temperature ([#4944](https://github.com/opentrons/opentrons/issues/4944)) ([ec6c1dd](https://github.com/opentrons/opentrons/commit/ec6c1dd)), closes [#4937](https://github.com/opentrons/opentrons/issues/4937)
* **protocol-designer:** add labware hover highlighting to modules ([#4843](https://github.com/opentrons/opentrons/issues/4843)) ([dfe9bda](https://github.com/opentrons/opentrons/commit/dfe9bda)), closes [#4696](https://github.com/opentrons/opentrons/issues/4696)
* **protocol-designer:** Add missing labware hint to magnet step ([#4592](https://github.com/opentrons/opentrons/issues/4592)) ([a947a14](https://github.com/opentrons/opentrons/commit/a947a14)), closes [#4303](https://github.com/opentrons/opentrons/issues/4303)
* **protocol-designer:** Add module missing labware hint to temperature step ([#4644](https://github.com/opentrons/opentrons/issues/4644)) ([f142e1c](https://github.com/opentrons/opentrons/commit/f142e1c)), closes [#4643](https://github.com/opentrons/opentrons/issues/4643)
* **protocol-designer:** Add module slot placement guidance ([#4916](https://github.com/opentrons/opentrons/issues/4916)) ([ae06796](https://github.com/opentrons/opentrons/commit/ae06796)), closes [#4815](https://github.com/opentrons/opentrons/issues/4815)
* **protocol-designer:** add temperature step form validation ([#4593](https://github.com/opentrons/opentrons/issues/4593)) ([f869c4c](https://github.com/opentrons/opentrons/commit/f869c4c)), closes [#4592](https://github.com/opentrons/opentrons/issues/4592)
* **protocol-designer:** allow temperature deck to be updated ([#4865](https://github.com/opentrons/opentrons/issues/4865)) ([c392d68](https://github.com/opentrons/opentrons/commit/c392d68)), closes [#4693](https://github.com/opentrons/opentrons/issues/4693)
* **protocol-designer:** Auto-select module in set temperature form ([#4661](https://github.com/opentrons/opentrons/issues/4661)) ([ce9d4ce](https://github.com/opentrons/opentrons/commit/ce9d4ce)), closes [#4642](https://github.com/opentrons/opentrons/issues/4642)
* **protocol-designer:** Autoselect !previous magnet action ([#4662](https://github.com/opentrons/opentrons/issues/4662)) ([d4375dd](https://github.com/opentrons/opentrons/commit/d4375dd)), closes [#4449](https://github.com/opentrons/opentrons/issues/4449)
* **protocol-designer:** change volume label to volume per well ([#4645](https://github.com/opentrons/opentrons/issues/4645)) ([f808a59](https://github.com/opentrons/opentrons/commit/f808a59)), closes [#4015](https://github.com/opentrons/opentrons/issues/4015)
* **protocol-designer:** Conditionally disabled pause until temp ([#4885](https://github.com/opentrons/opentrons/issues/4885)) ([d83646d](https://github.com/opentrons/opentrons/commit/d83646d)), closes [#4867](https://github.com/opentrons/opentrons/issues/4867)
* **protocol-designer:** Hide incompatible labware ([#4753](https://github.com/opentrons/opentrons/issues/4753)) ([9d55c56](https://github.com/opentrons/opentrons/commit/9d55c56)), closes [#4728](https://github.com/opentrons/opentrons/issues/4728)
* **protocol-designer:** Hide thermocycler functionality behind flag ([#4704](https://github.com/opentrons/opentrons/issues/4704)) ([053d9f0](https://github.com/opentrons/opentrons/commit/053d9f0)), closes [#4695](https://github.com/opentrons/opentrons/issues/4695)
* **protocol-designer:** hook up wait for temp in PD ([#4926](https://github.com/opentrons/opentrons/issues/4926)) ([710cffa](https://github.com/opentrons/opentrons/commit/710cffa)), closes [#4732](https://github.com/opentrons/opentrons/issues/4732)
* **protocol-designer:** hookup magnet step ([#4628](https://github.com/opentrons/opentrons/issues/4628)) ([33177a1](https://github.com/opentrons/opentrons/commit/33177a1)), closes [#4450](https://github.com/opentrons/opentrons/issues/4450)
* **protocol-designer:** Make moduleId field required for temperature step ([#4716](https://github.com/opentrons/opentrons/issues/4716)) ([d25b9d4](https://github.com/opentrons/opentrons/commit/d25b9d4))
* **protocol-designer:** Pause until temperature reached ([#4745](https://github.com/opentrons/opentrons/issues/4745)) ([fbbcac1](https://github.com/opentrons/opentrons/commit/fbbcac1)), closes [#4306](https://github.com/opentrons/opentrons/issues/4306)
* **protocol-designer:** Populate engageHeight field with previous values ([#4794](https://github.com/opentrons/opentrons/issues/4794)) ([b68b52d](https://github.com/opentrons/opentrons/commit/b68b52d)), closes [#4764](https://github.com/opentrons/opentrons/issues/4764)
* **protocol-designer:** render substep section in timeline for set temperature step ([#4932](https://github.com/opentrons/opentrons/issues/4932)) ([69938be](https://github.com/opentrons/opentrons/commit/69938be)), closes [#4862](https://github.com/opentrons/opentrons/issues/4862)
* **protocol-designer:** show magnetic module status in substeps and on deck ([#4724](https://github.com/opentrons/opentrons/issues/4724)) ([8b71b4a](https://github.com/opentrons/opentrons/commit/8b71b4a)), closes [#4304](https://github.com/opentrons/opentrons/issues/4304)
* **protocol-designer:** use immer in step generation ([#4769](https://github.com/opentrons/opentrons/issues/4769)) ([7915393](https://github.com/opentrons/opentrons/commit/7915393)), closes [#4697](https://github.com/opentrons/opentrons/issues/4697)
* **shared-data:** add 20uL filter tiprack ([#4532](https://github.com/opentrons/opentrons/issues/4532)) ([423da87](https://github.com/opentrons/opentrons/commit/423da87))
* **shared-data:** add new v4 JSON protocol schema ([#4846](https://github.com/opentrons/opentrons/issues/4846)) ([bd49812](https://github.com/opentrons/opentrons/commit/bd49812)), closes [#4836](https://github.com/opentrons/opentrons/issues/4836) [#4897](https://github.com/opentrons/opentrons/issues/4897)


### Performance Improvements

* **protocol-designer:** improve timeline generation performance ([#4701](https://github.com/opentrons/opentrons/issues/4701)) ([ee63163](https://github.com/opentrons/opentrons/commit/ee63163))


### Reverts

* **protocol-designer:** Revert change default exports to named exports ([#4938](https://github.com/opentrons/opentrons/issues/4938)) ([49d81c9](https://github.com/opentrons/opentrons/commit/49d81c9))





## [3.15.2](https://github.com/opentrons/opentrons/compare/v3.15.1...v3.15.2) (2019-12-17)


### Bug Fixes

* **api:** fix cancelling during the pre-protocol home ([#4627](https://github.com/opentrons/opentrons/issues/4627)) ([94852cf](https://github.com/opentrons/opentrons/commit/94852cf))
* **api:** allow labeling and versioning for module labware ([#4605](https://github.com/opentrons/opentrons/issues/4605)) ([d4d66a3](https://github.com/opentrons/opentrons/commit/d4d66a3))
* **api:** allow labels on old magdeck containers in v1 ([#4608](https://github.com/opentrons/opentrons/issues/4608)) ([37ab7b8](https://github.com/opentrons/opentrons/commit/37ab7b8)), closes [#2310](https://github.com/opentrons/opentrons/issues/2310)
* **api:** apiv1: move instrument in Z-axis prior to touch tip in XY ([#4585](https://github.com/opentrons/opentrons/issues/4585)) ([c946d5b](https://github.com/opentrons/opentrons/commit/c946d5b))
* **api:** do not allow robot.connect() in rpc protocols ([#4589](https://github.com/opentrons/opentrons/issues/4589)) ([929baea](https://github.com/opentrons/opentrons/commit/929baea)), closes [#4252](https://github.com/opentrons/opentrons/issues/4252)
* **api:** fix homing timeouts ([#4554](https://github.com/opentrons/opentrons/issues/4554)) ([31ab73b](https://github.com/opentrons/opentrons/commit/31ab73b))
* **api:** fix temp connect to attached modules during lw calibration ([#4614](https://github.com/opentrons/opentrons/issues/4614)) ([e2848f8](https://github.com/opentrons/opentrons/commit/e2848f8)), closes [#4613](https://github.com/opentrons/opentrons/issues/4613)
* **api:** limit air_gap in transfer to <max volume ([#4588](https://github.com/opentrons/opentrons/issues/4588)) ([d7a3b70](https://github.com/opentrons/opentrons/commit/d7a3b70)), closes [#364](https://github.com/opentrons/opentrons/issues/364)
* **api:** make sure the robot is connected before querying instrs ([#4611](https://github.com/opentrons/opentrons/issues/4611)) ([286f1ce](https://github.com/opentrons/opentrons/commit/286f1ce)), closes [#4590](https://github.com/opentrons/opentrons/issues/4590)
* **api:** remove unnecessary tip return ([#4566](https://github.com/opentrons/opentrons/issues/4566)) ([94df11e](https://github.com/opentrons/opentrons/commit/94df11e))
* **api:** special case pause at end of protocol ([#4603](https://github.com/opentrons/opentrons/issues/4603)) ([0080d7b](https://github.com/opentrons/opentrons/commit/0080d7b)), closes [#3238](https://github.com/opentrons/opentrons/issues/3238)
* **api:** specify v_offset in v1 transfer touch_tip ([#4602](https://github.com/opentrons/opentrons/issues/4602)) ([5605c37](https://github.com/opentrons/opentrons/commit/5605c37)), closes [#3703](https://github.com/opentrons/opentrons/issues/3703)
* **api:** update settings reset copy to avoid confusion ([#4572](https://github.com/opentrons/opentrons/issues/4572)) ([0cf9132](https://github.com/opentrons/opentrons/commit/0cf9132)), closes [#4568](https://github.com/opentrons/opentrons/issues/4568)
* **app:** disable tip probe for unused pipettes ([#4584](https://github.com/opentrons/opentrons/issues/4584)) ([9388391](https://github.com/opentrons/opentrons/commit/9388391)), closes [#4570](https://github.com/opentrons/opentrons/issues/4570)
* **app:** naïve loading state for tc open lid during lw cal ([#4616](https://github.com/opentrons/opentrons/issues/4616)) ([c4a4cdf](https://github.com/opentrons/opentrons/commit/c4a4cdf))
* **labware:** "retire" eppendorf tiprack definitions ([#4526](https://github.com/opentrons/opentrons/issues/4526)) ([ddc2800](https://github.com/opentrons/opentrons/commit/ddc2800)), closes [#4518](https://github.com/opentrons/opentrons/issues/4518)
* **protocol-designer:** filters out non trash labware for blowout options ([#4559](https://github.com/opentrons/opentrons/issues/4559)) ([aaf189d](https://github.com/opentrons/opentrons/commit/aaf189d)), closes [#4348](https://github.com/opentrons/opentrons/issues/4348) [#4348](https://github.com/opentrons/opentrons/issues/4348)
* **shared-data:** require well(s) in labware schema ([#4621](https://github.com/opentrons/opentrons/issues/4621)) ([4dcbff5](https://github.com/opentrons/opentrons/commit/4dcbff5)), closes [#4506](https://github.com/opentrons/opentrons/issues/4506)


### Features

* **api:** Handle extra labware in script entrypoints ([#4574](https://github.com/opentrons/opentrons/issues/4574)) ([8926340](https://github.com/opentrons/opentrons/commit/8926340))
* **api:** Restart jupyter with an api push ([#4581](https://github.com/opentrons/opentrons/issues/4581)) ([aa3cea3](https://github.com/opentrons/opentrons/commit/aa3cea3))
* **app:** add link to docs in resources card ([#4606](https://github.com/opentrons/opentrons/issues/4606)) ([21ec9ff](https://github.com/opentrons/opentrons/commit/21ec9ff))
* **labware-library:** change test protocol to api v2 ([#4571](https://github.com/opentrons/opentrons/issues/4571)) ([bd631d4](https://github.com/opentrons/opentrons/commit/bd631d4))
* **protocol-designer:** Add set temperature form ([#4533](https://github.com/opentrons/opentrons/issues/4533)) ([255e910](https://github.com/opentrons/opentrons/commit/255e910)), closes [#4307](https://github.com/opentrons/opentrons/issues/4307)
* **protocol-designer:** reorganize step-generation ([#4531](https://github.com/opentrons/opentrons/issues/4531)) ([125f06f](https://github.com/opentrons/opentrons/commit/125f06f)), closes [#4301](https://github.com/opentrons/opentrons/issues/4301)
* **protocol-designer:** update recommended labware article link ([#4552](https://github.com/opentrons/opentrons/issues/4552)) ([08a2d26](https://github.com/opentrons/opentrons/commit/08a2d26)), closes [#4324](https://github.com/opentrons/opentrons/issues/4324)





## [3.15.1](https://github.com/opentrons/opentrons/compare/v3.15.0...v3.15.1) (2019-12-09)

### Bug Fixes

* **api:** shadow the magdeck height in v1 ([#4561](https://github.com/opentrons/opentrons/issues/4561)) ([d7b4351](https://github.com/opentrons/opentrons/commit/d7b4351))
* **api:** Allow Location types for multichannels in transfer ([#4555](https://github.com/opentrons/opentrons/issues/4555)) ([6449401](https://github.com/opentrons/opentrons/commit/6449401))
* **api:** always do equivalent v1 factory resets ([#4556](https://github.com/opentrons/opentrons/issues/4556)) ([87abf31](https://github.com/opentrons/opentrons/commit/87abf31))





# [3.15.0](https://github.com/opentrons/opentrons/compare/v3.14.1...v3.15.0) (2019-12-05)


### Features

* **app:** add simple aggregate event tracking for custom labware ([#4544](https://github.com/opentrons/opentrons/issues/4544)) ([b4fd536](https://github.com/opentrons/opentrons/commit/b4fd536)), closes [#4537](https://github.com/opentrons/opentrons/issues/4537)
* **app:** put bundle upload + exec under ff ([#4541](https://github.com/opentrons/opentrons/issues/4541)) ([9023d95](https://github.com/opentrons/opentrons/commit/9023d95))
* **app:** enable custom labware management in the app ([#4525](https://github.com/opentrons/opentrons/issues/4525)) ([e1c9958](https://github.com/opentrons/opentrons/commit/e1c9958))
* **api:** add extra labware in session ([#4490](https://github.com/opentrons/opentrons/issues/4490)) ([27666db](https://github.com/opentrons/opentrons/commit/27666db))
* **api:** add http endpoint for robot settings dump ([#4344](https://github.com/opentrons/opentrons/issues/4344)) ([bb91107](https://github.com/opentrons/opentrons/commit/bb91107))
* **api:** Add locks on direct data access for mag and temp module ([#4501](https://github.com/opentrons/opentrons/issues/4501)) ([17a27c7](https://github.com/opentrons/opentrons/commit/17a27c7))
* **api:** add the maximum supported protocol api version ([#4363](https://github.com/opentrons/opentrons/issues/4363)) ([086723d](https://github.com/opentrons/opentrons/commit/086723d))
* **api:** add volume parameter to thermocycler temperature commands ([#4500](https://github.com/opentrons/opentrons/issues/4500)) ([ad3d77f](https://github.com/opentrons/opentrons/commit/ad3d77f)), closes [#4264](https://github.com/opentrons/opentrons/issues/4264)
* **api:** apiv2: backcompat: implement LegacyWell position methods ([#4448](https://github.com/opentrons/opentrons/issues/4448)) ([222cf37](https://github.com/opentrons/opentrons/commit/222cf37))
* **api:** apiv2: implement instruments backcompat ([#4458](https://github.com/opentrons/opentrons/issues/4458)) ([ffb2942](https://github.com/opentrons/opentrons/commit/ffb2942)), closes [#3540](https://github.com/opentrons/opentrons/issues/3540)
* **api:** apiv2: Limit protocols to max supported version ([#4365](https://github.com/opentrons/opentrons/issues/4365)) ([8decf1a](https://github.com/opentrons/opentrons/commit/8decf1a)), closes [#4342](https://github.com/opentrons/opentrons/issues/4342)
* **api:** apiv2: v1-backcompat: implement module backcompat ([#4438](https://github.com/opentrons/opentrons/issues/4438)) ([2a42591](https://github.com/opentrons/opentrons/commit/2a42591)), closes [#3655](https://github.com/opentrons/opentrons/issues/3655)
* **api:** check papi version on method call ([#4399](https://github.com/opentrons/opentrons/issues/4399)) ([493029c](https://github.com/opentrons/opentrons/commit/493029c)), closes [#4343](https://github.com/opentrons/opentrons/issues/4343)
* **api:** enable v2 internals by default ([#4474](https://github.com/opentrons/opentrons/issues/4474)) ([e25bb55](https://github.com/opentrons/opentrons/commit/e25bb55))
* **api:** Migrate DB Labware into V2 Format ([#4256](https://github.com/opentrons/opentrons/issues/4256)) ([d0c3f4a](https://github.com/opentrons/opentrons/commit/d0c3f4a))
* **api:** register module instances on os events ([#4441](https://github.com/opentrons/opentrons/issues/4441)) ([89afd64](https://github.com/opentrons/opentrons/commit/89afd64)), closes [#3580](https://github.com/opentrons/opentrons/issues/3580)
* **api:** surface protocol apiv1 backcompat in apiv2 ([#4473](https://github.com/opentrons/opentrons/issues/4473)) ([831e963](https://github.com/opentrons/opentrons/commit/831e963))
* **api:** warn tc-lid/gantry collision in simulation ([#4394](https://github.com/opentrons/opentrons/issues/4394)) ([b22a3b3](https://github.com/opentrons/opentrons/commit/b22a3b3)), closes [#4044](https://github.com/opentrons/opentrons/issues/4044)
* **api,shared-data:** support p20/300/1k single v2.1 ([#4392](https://github.com/opentrons/opentrons/issues/4392)) ([e743d2b](https://github.com/opentrons/opentrons/commit/e743d2b)), closes [#4389](https://github.com/opentrons/opentrons/issues/4389)
* **app:** Display robot and protocol api versions ([#4502](https://github.com/opentrons/opentrons/issues/4502)) ([00f333e](https://github.com/opentrons/opentrons/commit/00f333e)), closes [#4362](https://github.com/opentrons/opentrons/issues/4362)
* **app:** parse subnest out of CIDR-notation IP address ([#4372](https://github.com/opentrons/opentrons/issues/4372)) ([ac74c12](https://github.com/opentrons/opentrons/commit/ac74c12)), closes [#4075](https://github.com/opentrons/opentrons/issues/4075)
* **app,api:** allow rich version specification for python protocols ([#4358](https://github.com/opentrons/opentrons/issues/4358)) ([b0adef5](https://github.com/opentrons/opentrons/commit/b0adef5)), closes [#4338](https://github.com/opentrons/opentrons/issues/4338)
* **protocol-designer:** add compatibility info to LabwarePreview ([#4393](https://github.com/opentrons/opentrons/issues/4393)) ([df9f41d](https://github.com/opentrons/opentrons/commit/df9f41d)), closes [#4135](https://github.com/opentrons/opentrons/issues/4135)
* **protocol-designer:** Add edit modules modal ([#4320](https://github.com/opentrons/opentrons/issues/4320)) ([bb71ae8](https://github.com/opentrons/opentrons/commit/bb71ae8))
* **protocol-designer:** Add magnet step form field validation ([#4469](https://github.com/opentrons/opentrons/issues/4469)) ([07d7905](https://github.com/opentrons/opentrons/commit/07d7905)), closes [#4300](https://github.com/opentrons/opentrons/issues/4300)
* **protocol-designer:** Add magnet step UI ([#4455](https://github.com/opentrons/opentrons/issues/4455)) ([963288b](https://github.com/opentrons/opentrons/commit/963288b))
* **protocol-designer:** Add module placement warning and validation ([#4425](https://github.com/opentrons/opentrons/issues/4425)) ([9034128](https://github.com/opentrons/opentrons/commit/9034128)), closes [#4137](https://github.com/opentrons/opentrons/issues/4137)
* **protocol-designer:** add module slot visualization ([#4355](https://github.com/opentrons/opentrons/issues/4355)) ([187fae0](https://github.com/opentrons/opentrons/commit/187fae0)), closes [#4310](https://github.com/opentrons/opentrons/issues/4310)
* **protocol-designer:** add warning when using expt features ([#4447](https://github.com/opentrons/opentrons/issues/4447)) ([15fcbd7](https://github.com/opentrons/opentrons/commit/15fcbd7)), closes [#4129](https://github.com/opentrons/opentrons/issues/4129)
* **protocol-designer:** blocking hint on adding custom labware to modal ([#4383](https://github.com/opentrons/opentrons/issues/4383)) ([f04d67e](https://github.com/opentrons/opentrons/commit/f04d67e)), closes [#4329](https://github.com/opentrons/opentrons/issues/4329)
* **protocol-designer:** Disable module step creation when module missing ([#4468](https://github.com/opentrons/opentrons/issues/4468)) ([f2e1a9e](https://github.com/opentrons/opentrons/commit/f2e1a9e)), closes [#4456](https://github.com/opentrons/opentrons/issues/4456)
* **protocol-designer:** Enable adding and editing modules in file page ([#4385](https://github.com/opentrons/opentrons/issues/4385)) ([6d975fd](https://github.com/opentrons/opentrons/commit/6d975fd)), closes [#4317](https://github.com/opentrons/opentrons/issues/4317)
* **protocol-designer:** Enable slot selection for modules when FF enabled ([#4347](https://github.com/opentrons/opentrons/issues/4347)) ([31fa641](https://github.com/opentrons/opentrons/commit/31fa641)), closes [#4133](https://github.com/opentrons/opentrons/issues/4133)
* **protocol-designer:** enforce labware<>module compat ([#4427](https://github.com/opentrons/opentrons/issues/4427)) ([4d42156](https://github.com/opentrons/opentrons/commit/4d42156)), closes [#4136](https://github.com/opentrons/opentrons/issues/4136)
* **protocol-designer:** expose GEN2 pipettes in pipette select ([#4351](https://github.com/opentrons/opentrons/issues/4351)) ([6195a2d](https://github.com/opentrons/opentrons/commit/6195a2d)), closes [#4295](https://github.com/opentrons/opentrons/issues/4295)
* **protocol-designer:** fix labware duplication bug ([#4429](https://github.com/opentrons/opentrons/issues/4429)) ([a0b321a](https://github.com/opentrons/opentrons/commit/a0b321a)), closes [#4407](https://github.com/opentrons/opentrons/issues/4407)
* **protocol-designer:** hook up module creation in NewFileModal ([#4319](https://github.com/opentrons/opentrons/issues/4319)) ([c2dba36](https://github.com/opentrons/opentrons/commit/c2dba36))
* **protocol-designer:** ignore labware<>module collision error in rogue mode ([#4437](https://github.com/opentrons/opentrons/issues/4437)) ([99526ae](https://github.com/opentrons/opentrons/commit/99526ae)), closes [#4130](https://github.com/opentrons/opentrons/issues/4130)
* **protocol-designer:** labware<>module incompat DnD behavior ([#4409](https://github.com/opentrons/opentrons/issues/4409)) ([e7f0334](https://github.com/opentrons/opentrons/commit/e7f0334)), closes [#4136](https://github.com/opentrons/opentrons/issues/4136)
* **protocol-designer:** move deck setup guidance to hint modal ([#4463](https://github.com/opentrons/opentrons/issues/4463)) ([ae4e7be](https://github.com/opentrons/opentrons/commit/ae4e7be)), closes [#4328](https://github.com/opentrons/opentrons/issues/4328)
* **protocol-designer:** Render crash warning for modules with Gen1 multi pipettes ([#4410](https://github.com/opentrons/opentrons/issues/4410)) ([9981193](https://github.com/opentrons/opentrons/commit/9981193)), closes [#4373](https://github.com/opentrons/opentrons/issues/4373)
* **protocol-designer:** render modules on deck ([#4309](https://github.com/opentrons/opentrons/issues/4309)) ([20514f0](https://github.com/opentrons/opentrons/commit/20514f0))
* **protocol-designer:** save/load protocols with modules in prepro PD ([#4419](https://github.com/opentrons/opentrons/issues/4419)) ([2b98da2](https://github.com/opentrons/opentrons/commit/2b98da2))
* **protocol-designer:** show module<>pipette collision error ([#4436](https://github.com/opentrons/opentrons/issues/4436)) ([21cbca1](https://github.com/opentrons/opentrons/commit/21cbca1)), closes [#4130](https://github.com/opentrons/opentrons/issues/4130)
* **protocol-designer:** show special-case warning for north/south ([#4361](https://github.com/opentrons/opentrons/issues/4361)) ([86912e8](https://github.com/opentrons/opentrons/commit/86912e8)), closes [#4332](https://github.com/opentrons/opentrons/issues/4332)
* **protocol-designer:** updates to LabwareSelectionModal ([#4325](https://github.com/opentrons/opentrons/issues/4325)) ([04d8fea](https://github.com/opentrons/opentrons/commit/04d8fea)), closes [#4323](https://github.com/opentrons/opentrons/issues/4323)
* **protocol-designer:** Wire up modules card with actual data ([#4354](https://github.com/opentrons/opentrons/issues/4354)) ([33c5952](https://github.com/opentrons/opentrons/commit/33c5952))
* **protocol-library-kludge:** support v2 labware ([#4507](https://github.com/opentrons/opentrons/issues/4507)) ([8117289](https://github.com/opentrons/opentrons/commit/8117289)), closes [#4505](https://github.com/opentrons/opentrons/issues/4505)



### Bug Fixes

* **api:** ensure load name is attached to RPC "containers" ([#4530](https://github.com/opentrons/opentrons/issues/4530)) ([4580aa4](https://github.com/opentrons/opentrons/commit/4580aa4))
* **api:** Fix critical points and gantry config backup in http deck cal ([#4527](https://github.com/opentrons/opentrons/issues/4527)) ([cfefab4](https://github.com/opentrons/opentrons/commit/cfefab4))
* **api:** present loaded but unused pipettes and modules to rpc ([#4538](https://github.com/opentrons/opentrons/issues/4538)) ([fe27ef7](https://github.com/opentrons/opentrons/commit/fe27ef7))
* **api:** prevent liquid handling without a tip ([#4528](https://github.com/opentrons/opentrons/issues/4528)) ([e1724ab](https://github.com/opentrons/opentrons/commit/e1724ab)), closes [#4219](https://github.com/opentrons/opentrons/issues/4219)
* **app:** consolidate nav state to disable calibrate link on file info page ([#4514](https://github.com/opentrons/opentrons/issues/4514)) ([842f15c](https://github.com/opentrons/opentrons/commit/842f15c))
* **shared-data:** increase GEN2 pipette plunger & drop tip current ([#4523](https://github.com/opentrons/opentrons/issues/4523)) ([e6909b9](https://github.com/opentrons/opentrons/commit/e6909b9))
* **api:** clear running module tasks on cancel ([#4464](https://github.com/opentrons/opentrons/issues/4464)) ([5135da9](https://github.com/opentrons/opentrons/commit/5135da9))
* **api:** connect context to real thermocycler during calibration ([#4454](https://github.com/opentrons/opentrons/issues/4454)) ([1d40fd6](https://github.com/opentrons/opentrons/commit/1d40fd6))
* **api:** fix bad adv settings crash ([#4489](https://github.com/opentrons/opentrons/issues/4489)) ([34fb8e7](https://github.com/opentrons/opentrons/commit/34fb8e7))
* **api:** fix calibration issues in backcompat ([#4480](https://github.com/opentrons/opentrons/issues/4480)) ([7153be3](https://github.com/opentrons/opentrons/commit/7153be3))
* **api:** flag move to tc with in-between lid as unsafe ([#4488](https://github.com/opentrons/opentrons/issues/4488)) ([1741088](https://github.com/opentrons/opentrons/commit/1741088))
* **api:** Suppress error log during check for pipettes ([#4374](https://github.com/opentrons/opentrons/issues/4374)) ([b68caac](https://github.com/opentrons/opentrons/commit/b68caac)), closes [#4096](https://github.com/opentrons/opentrons/issues/4096)
* **api:** tools: fix `write_pipette_memory` on host ([#4434](https://github.com/opentrons/opentrons/issues/4434)) ([f3eef16](https://github.com/opentrons/opentrons/commit/f3eef16))
* **api:** wrap modules hc instance in async adapter on load ([#4492](https://github.com/opentrons/opentrons/issues/4492)) ([99d3a47](https://github.com/opentrons/opentrons/commit/99d3a47))
* **api,shared-data:** fix gen2 multi positioning ([#4412](https://github.com/opentrons/opentrons/issues/4412)) ([54be7f9](https://github.com/opentrons/opentrons/commit/54be7f9))
* **APIV2:** Make tipracks always calibrate from top ([#4418](https://github.com/opentrons/opentrons/issues/4418)) ([bf2cf8c](https://github.com/opentrons/opentrons/commit/bf2cf8c))
* **app:** add handling for legacy(location,well,labware) in rpc ([#4478](https://github.com/opentrons/opentrons/issues/4478)) ([4528c7a](https://github.com/opentrons/opentrons/commit/4528c7a))
* **app:** Call correct create method depending on protocol ([#4509](https://github.com/opentrons/opentrons/issues/4509)) ([a3ec421](https://github.com/opentrons/opentrons/commit/a3ec421)), closes [#4202](https://github.com/opentrons/opentrons/issues/4202)
* **app:** display robot ip not robot ip subnet base ([#4411](https://github.com/opentrons/opentrons/issues/4411)) ([57cdfee](https://github.com/opentrons/opentrons/commit/57cdfee)), closes [#4372](https://github.com/opentrons/opentrons/issues/4372)
* **app:** prevent user from proceeding if uploaded protocol has no steps ([#4381](https://github.com/opentrons/opentrons/issues/4381)) ([a8344e9](https://github.com/opentrons/opentrons/commit/a8344e9)), closes [#3121](https://github.com/opentrons/opentrons/issues/3121)
* **app-shell:** improve context menu and log handling ([#4472](https://github.com/opentrons/opentrons/issues/4472)) ([de15135](https://github.com/opentrons/opentrons/commit/de15135)), closes [#4293](https://github.com/opentrons/opentrons/issues/4293)
* **app,api:** display session error messages in SessionAlert ([#4378](https://github.com/opentrons/opentrons/issues/4378)) ([19d3e00](https://github.com/opentrons/opentrons/commit/19d3e00)), closes [#4367](https://github.com/opentrons/opentrons/issues/4367)
* **docs:** v2/writing: 'left' = 'right', use pipette name ([662279c](https://github.com/opentrons/opentrons/commit/662279c))
* **protocol-designer:** fix bug in manualIntervention step ([#4350](https://github.com/opentrons/opentrons/issues/4350)) ([2648052](https://github.com/opentrons/opentrons/commit/2648052)), closes [#4334](https://github.com/opentrons/opentrons/issues/4334)
* **protocol-designer:** fix labware incompat drag warning ([#4428](https://github.com/opentrons/opentrons/issues/4428)) ([467c2e4](https://github.com/opentrons/opentrons/commit/467c2e4))



### Performance Improvements

* **api:** use math.isclose in hotpaths ([#4510](https://github.com/opentrons/opentrons/issues/4510)) ([fb6aef8](https://github.com/opentrons/opentrons/commit/fb6aef8)), closes [#4482](https://github.com/opentrons/opentrons/issues/4482) [#4482](https://github.com/opentrons/opentrons/issues/4482)





## [3.14.1](https://github.com/opentrons/opentrons/compare/v3.14.1-alpha.2...v3.14.1) (2019-11-11)

**Note:** Version bump only for package opentrons





# [3.14.0](https://github.com/opentrons/opentrons/compare/v3.13.2...v3.14.0) (2019-10-31)


### Bug Fixes

* **api:** apiv2: initialize simulator runflag ([#4330](https://github.com/opentrons/opentrons/issues/4330)) ([9405695](https://github.com/opentrons/opentrons/commit/9405695))
* **api:** Modify list check to return first item of source and dest ([#4331](https://github.com/opentrons/opentrons/issues/4331)) ([4802beb](https://github.com/opentrons/opentrons/commit/4802beb))
* **api:** update all pose tree state when calibrating labware ([#4322](https://github.com/opentrons/opentrons/issues/4322)) ([24841ab](https://github.com/opentrons/opentrons/commit/24841ab)), closes [#4288](https://github.com/opentrons/opentrons/issues/4288)
* **api:** Allow Location types in advanced liquid handling functions ([#4276](https://github.com/opentrons/opentrons/issues/4276)) ([8f015b8](https://github.com/opentrons/opentrons/commit/8f015b8))
* **api:** always touch tip before blow out ([#4265](https://github.com/opentrons/opentrons/issues/4265)) ([1e54098](https://github.com/opentrons/opentrons/commit/1e54098))
* **api:** api1: consider model offset in cli deck cal tip pickup ([#4253](https://github.com/opentrons/opentrons/issues/4253)) ([e1963ae](https://github.com/opentrons/opentrons/commit/e1963ae)), closes [#4250](https://github.com/opentrons/opentrons/issues/4250)
* **api:** apiv1: touch tip before blowing out during transfers ([#4231](https://github.com/opentrons/opentrons/issues/4231)) ([294aa8f](https://github.com/opentrons/opentrons/commit/294aa8f)), closes [#419](https://github.com/opentrons/opentrons/issues/419)
* **api:** apiv2: correctly set smoothie speed ([#4263](https://github.com/opentrons/opentrons/issues/4263)) ([3e6d26d](https://github.com/opentrons/opentrons/commit/3e6d26d))
* **api:** apiv2: fix air gap in complex commands ([#4259](https://github.com/opentrons/opentrons/issues/4259)) ([e4ba931](https://github.com/opentrons/opentrons/commit/e4ba931))
* **api:** correctly handle mix optional arguments ([#4237](https://github.com/opentrons/opentrons/issues/4237)) ([e5fa621](https://github.com/opentrons/opentrons/commit/e5fa621))
* **api:** Do not throw warning if run flag is set ([#4294](https://github.com/opentrons/opentrons/issues/4294)) ([150c784](https://github.com/opentrons/opentrons/commit/150c784))
* **api:** Use proper currents for plunger home ([#4167](https://github.com/opentrons/opentrons/issues/4167)) ([b17eaff](https://github.com/opentrons/opentrons/commit/b17eaff)), closes [#3572](https://github.com/opentrons/opentrons/issues/3572)
* **api,shared-data,labware-creator:** do not touch tip on troughs ([#4271](https://github.com/opentrons/opentrons/issues/4271)) ([d7e76cd](https://github.com/opentrons/opentrons/commit/d7e76cd)), closes [#4258](https://github.com/opentrons/opentrons/issues/4258)
* **labware-creator:** fix radio group touched on change in Mac FF ([#4210](https://github.com/opentrons/opentrons/issues/4210)) ([8c89022](https://github.com/opentrons/opentrons/commit/8c89022)), closes [#4209](https://github.com/opentrons/opentrons/issues/4209)
* **labware-library:** Remove global CSS that's breaking filter link styling ([#4239](https://github.com/opentrons/opentrons/issues/4239)) ([11bdec4](https://github.com/opentrons/opentrons/commit/11bdec4))
* **protocol-designer:** fix copy & link for custom labware ([#4232](https://github.com/opentrons/opentrons/issues/4232)) ([1490f65](https://github.com/opentrons/opentrons/commit/1490f65))
* **shared-data:** swap X/Y spacing for 24-well nest tuberacks ([#4240](https://github.com/opentrons/opentrons/issues/4240)) ([34330ed](https://github.com/opentrons/opentrons/commit/34330ed))


### Features

* **api:** Allow backwards compatibility with gen2 pipettes in apiv2 ([#4326](https://github.com/opentrons/opentrons/issues/4326)) ([4609172](https://github.com/opentrons/opentrons/commit/4609172))
* **api:** reflect original instrument name via rpc ([#4312](https://github.com/opentrons/opentrons/issues/4312)) ([8bf0c85](https://github.com/opentrons/opentrons/commit/8bf0c85))
* **app:** allow inexact cross-generational pipette compatibility ([#4311](https://github.com/opentrons/opentrons/issues/4311)) ([95dae6a](https://github.com/opentrons/opentrons/commit/95dae6a)), closes [#3598](https://github.com/opentrons/opentrons/issues/3598)
* **app:** allow p1000 gen2 to fallback to specced p1000 gen1 ([#4316](https://github.com/opentrons/opentrons/issues/4316)) ([0e33f65](https://github.com/opentrons/opentrons/commit/0e33f65)), closes [#3598](https://github.com/opentrons/opentrons/issues/3598)
* **shared-data:** add "GEN1" to gen 1 pipette display names ([#4313](https://github.com/opentrons/opentrons/issues/4313)) ([cbdc814](https://github.com/opentrons/opentrons/commit/cbdc814))
* **api:** add ability to update TC firmware from robot ([#4277](https://github.com/Opentrons/opentrons/pull/4277))
* **api:** Add bundle creation to opentrons_simulate ([#4125](https://github.com/opentrons/opentrons/issues/4125)) ([b1d9d66](https://github.com/opentrons/opentrons/commit/b1d9d66))
* **api:** apiv2: add max speed control ([#4187](https://github.com/opentrons/opentrons/issues/4187)) ([ed48382](https://github.com/opentrons/opentrons/commit/ed48382))
* **api:** apiv2: conditionally enable backcompat ([#4234](https://github.com/opentrons/opentrons/issues/4234)) ([806af2c](https://github.com/opentrons/opentrons/commit/806af2c))
* **api:** apiv2: implement robot methods backcompat ([#4201](https://github.com/opentrons/opentrons/issues/4201)) ([685599f](https://github.com/opentrons/opentrons/commit/685599f)), closes [#3539](https://github.com/opentrons/opentrons/issues/3539)
* **api:** deprecate api support for JSON v1/2 ([#4155](https://github.com/opentrons/opentrons/issues/4155)) ([61361a8](https://github.com/opentrons/opentrons/commit/61361a8)), closes [#4128](https://github.com/opentrons/opentrons/issues/4128)
* **api:** implement deck item spanning first pass ([#4160](https://github.com/opentrons/opentrons/issues/4160)) ([1b621a4](https://github.com/opentrons/opentrons/commit/1b621a4)), closes [#3107](https://github.com/opentrons/opentrons/issues/3107)
* **api:** Specify if a restart is required after changing some ffs ([#4233](https://github.com/opentrons/opentrons/issues/4233)) ([9452ffa](https://github.com/opentrons/opentrons/commit/9452ffa))
* **api:** v1: Add version specification to labware.load ([#4218](https://github.com/opentrons/opentrons/issues/4218)) ([37060ce](https://github.com/opentrons/opentrons/commit/37060ce)), closes [#4216](https://github.com/opentrons/opentrons/issues/4216)
* **app:** add robot restart alert for FF changes that require restart ([#4285](https://github.com/opentrons/opentrons/issues/4285)) ([96408a1](https://github.com/opentrons/opentrons/commit/96408a1))
* **app:** Enable GEN2 pipettes ([#4297](https://github.com/opentrons/opentrons/issues/4297)) ([f9d2c3b](https://github.com/opentrons/opentrons/commit/f9d2c3b)), closes [#3601](https://github.com/opentrons/opentrons/issues/3601)
* **app:** improve modules on run tab, enable module temp control for tc and td ([#4172](https://github.com/opentrons/opentrons/issues/4172)) ([c11de69](https://github.com/opentrons/opentrons/commit/c11de69)), closes [#4021](https://github.com/opentrons/opentrons/issues/4021)
* **app:** restrict calibrate and run on incompatible pipettes ([#4185](https://github.com/opentrons/opentrons/issues/4185)) ([02fcd4c](https://github.com/opentrons/opentrons/commit/02fcd4c))
* **labware-creator:** add analytics events skeleton ([#4168](https://github.com/opentrons/opentrons/issues/4168)) ([3593171](https://github.com/opentrons/opentrons/commit/3593171))
* **labware-creator:** Guide user to labware test ([#4153](https://github.com/opentrons/opentrons/issues/4153)) ([4bc00c4](https://github.com/opentrons/opentrons/commit/4bc00c4)), closes [#4118](https://github.com/opentrons/opentrons/issues/4118)
* **labware-library:** Add link for LC to LL sidebar ([#4154](https://github.com/opentrons/opentrons/issues/4154)) ([4117e8e](https://github.com/opentrons/opentrons/commit/4117e8e)), closes [#4147](https://github.com/opentrons/opentrons/issues/4147)
* **labware-library:** add P20 tip rack image to library ([#4280](https://github.com/opentrons/opentrons/issues/4280)) ([63032fb](https://github.com/opentrons/opentrons/commit/63032fb))
* **labware-library:** hook up LC analytics and opt-in ([#4177](https://github.com/opentrons/opentrons/issues/4177)) ([bad03e1](https://github.com/opentrons/opentrons/commit/bad03e1)), closes [#4115](https://github.com/opentrons/opentrons/issues/4115) [#4116](https://github.com/opentrons/opentrons/issues/4116) [#4117](https://github.com/opentrons/opentrons/issues/4117)
* **protocol-designer:** add new actions for module interactions ([#4275](https://github.com/opentrons/opentrons/issues/4275)) ([5e9fa80](https://github.com/opentrons/opentrons/commit/5e9fa80))
* **protocol-designer:** add reducers for module placement ([#4287](https://github.com/opentrons/opentrons/issues/4287)) ([7973d2a](https://github.com/opentrons/opentrons/commit/7973d2a))
* **protocol-designer:** Add unrestricted module placement FF ([#4289](https://github.com/opentrons/opentrons/issues/4289)) ([4c59d4d](https://github.com/opentrons/opentrons/commit/4c59d4d)), closes [#4134](https://github.com/opentrons/opentrons/issues/4134)
* **protocol-designer:** promote custom labware upload to full feature ([#4207](https://github.com/opentrons/opentrons/issues/4207)) ([c19634e](https://github.com/opentrons/opentrons/commit/c19634e))
* **shared-data:** add NEST labware ([#4156](https://github.com/opentrons/opentrons/issues/4156)) ([0d2491d](https://github.com/opentrons/opentrons/commit/0d2491d))
* **update-server:** add clear all keys endpoint link local ([#4182](https://github.com/opentrons/opentrons/issues/4182)) ([5b04918](https://github.com/opentrons/opentrons/commit/5b04918))





## [3.13.2](https://github.com/Opentrons/opentrons/compare/v3.13.1...v3.13.2) (2019-10-10)


### Bug Fixes

* **app:** fix broken back-compat for pre-3.13.x robots ([#4203](https://github.com/Opentrons/opentrons/issues/4203)) ([9243a8d](https://github.com/Opentrons/opentrons/commit/9243a8d)), closes [#4202](https://github.com/Opentrons/opentrons/issues/4202)





## [3.13.1](https://github.com/opentrons/opentrons/compare/v3.13.0...v3.13.1) (2019-10-09)


### Bug Fixes

* **api:** change trash definitions to avoid y head crash ([#4188](https://github.com/opentrons/opentrons/issues/4188)) ([68b6201](https://github.com/opentrons/opentrons/commit/68b6201))





# [3.13.0](https://github.com/opentrons/opentrons/compare/v3.12.0...v3.13.0) (2019-10-02)


### Bug Fixes

* **api:** Only load labware for modules from bundles ([#4162](https://github.com/opentrons/opentrons/issues/4162)) ([f3eb988](https://github.com/opentrons/opentrons/commit/f3eb988))
* **api:** Put camera images in tempdirs ([#4163](https://github.com/opentrons/opentrons/issues/4163)) ([1411da8](https://github.com/opentrons/opentrons/commit/1411da8)), closes [#4122](https://github.com/opentrons/opentrons/issues/4122)
* **api:** Do not run out of memory when dumping large logs ([#4157](https://github.com/opentrons/opentrons/issues/4157)) ([56354f2](https://github.com/opentrons/opentrons/commit/56354f2))
* **api:** Fix sim and exec entrypoints for bundled protocols ([#4149](https://github.com/opentrons/opentrons/issues/4149)) ([7163924](https://github.com/opentrons/opentrons/commit/7163924))
* **api:** reflect protocol text over rpc ([#4152](https://github.com/opentrons/opentrons/issues/4152)) ([dae2de5](https://github.com/opentrons/opentrons/commit/dae2de5))
* **app:** fix zip mimetype bug ([#4150](https://github.com/opentrons/opentrons/issues/4150)) ([9f4c357](https://github.com/opentrons/opentrons/commit/9f4c357))
* **api:** apiv2: allow pipette name or model in cache_instruments ([#4063](https://github.com/opentrons/opentrons/issues/4063)) ([f29ab14](https://github.com/opentrons/opentrons/commit/f29ab14)), closes [#4062](https://github.com/opentrons/opentrons/issues/4062)
* **api:** apiv2: allow transfer with uneven sources and targets  ([#4107](https://github.com/opentrons/opentrons/issues/4107)) ([036eca1](https://github.com/opentrons/opentrons/commit/036eca1))
* **api:** apiv2: pass correct locations for mix in TransferPlan ([#4076](https://github.com/opentrons/opentrons/issues/4076)) ([067098d](https://github.com/opentrons/opentrons/commit/067098d))
* **api:** apiv2: Separate tip overlap per pipette ([#4106](https://github.com/opentrons/opentrons/issues/4106)) ([1bac2a9](https://github.com/opentrons/opentrons/commit/1bac2a9)), closes [#4103](https://github.com/opentrons/opentrons/issues/4103)
* **api:** cache location before pick up tip during labware calibration ([#4033](https://github.com/opentrons/opentrons/issues/4033)) ([8dc8bb9](https://github.com/opentrons/opentrons/commit/8dc8bb9))
* **api:** dont parse the smoothie response to udpate_pipette_config ([#4112](https://github.com/opentrons/opentrons/issues/4112)) ([109cdcc](https://github.com/opentrons/opentrons/commit/109cdcc))
* **api:** Expand infer_version_from_metadata to catch more ([#4094](https://github.com/opentrons/opentrons/issues/4094)) ([1f7ad77](https://github.com/opentrons/opentrons/commit/1f7ad77)), closes [#3949](https://github.com/opentrons/opentrons/issues/3949)
* **api:** fix format string in module slot assertion ([#4039](https://github.com/opentrons/opentrons/issues/4039)) ([2a88233](https://github.com/opentrons/opentrons/commit/2a88233))
* **api:** Fix miscellaneous bugs in deck CLI ([#4119](https://github.com/opentrons/opentrons/issues/4119)) ([7e7196a](https://github.com/opentrons/opentrons/commit/7e7196a))
* **api:** Fix usage of return tip height v1 ([#4040](https://github.com/opentrons/opentrons/issues/4040)) ([3f4ace6](https://github.com/opentrons/opentrons/commit/3f4ace6))
* **api:** Force the permanent mac address for wifi connections ([#4121](https://github.com/opentrons/opentrons/issues/4121)) ([7cfa929](https://github.com/opentrons/opentrons/commit/7cfa929))
* **app:** Disable run start button if missing modules ([#3994](https://github.com/opentrons/opentrons/issues/3994)) ([5c75152](https://github.com/opentrons/opentrons/commit/5c75152)), closes [#2676](https://github.com/opentrons/opentrons/issues/2676)
* **app:** ensure gantry not blocking pcr seal placement ([#4071](https://github.com/opentrons/opentrons/issues/4071)) ([01d6858](https://github.com/opentrons/opentrons/commit/01d6858)), closes [#4034](https://github.com/opentrons/opentrons/issues/4034)
* **app,labware-library:** Upgrade to react-router 5 and fix imports ([#4084](https://github.com/opentrons/opentrons/issues/4084)) ([5595f8d](https://github.com/opentrons/opentrons/commit/5595f8d))
* **protocol-designer:** fix tip position bug with zero ([#4079](https://github.com/opentrons/opentrons/issues/4079)) ([be82a73](https://github.com/opentrons/opentrons/commit/be82a73)), closes [#4057](https://github.com/opentrons/opentrons/issues/4057)
* **protocol-designer:** show form error state in StepItems ([#4080](https://github.com/opentrons/opentrons/issues/4080)) ([2aa1556](https://github.com/opentrons/opentrons/commit/2aa1556)), closes [#3678](https://github.com/opentrons/opentrons/issues/3678)


### Features

* **api:** apiv1: load magdeck engage height from labware definitions ([#4042](https://github.com/opentrons/opentrons/issues/4042)) ([f232659](https://github.com/opentrons/opentrons/commit/f232659)), closes [#3832](https://github.com/opentrons/opentrons/issues/3832)
* **api:** apiv2: improve accessors for loaded lw/mods/instrs ([#4068](https://github.com/opentrons/opentrons/issues/4068)) ([fc289dd](https://github.com/opentrons/opentrons/commit/fc289dd))
* **api:** Explicit cmdline and jupyter entrypoints ([#4032](https://github.com/opentrons/opentrons/issues/4032)) ([b534096](https://github.com/opentrons/opentrons/commit/b534096))
* **api:** replace format with quirks for rectangular well behavior ([#4027](https://github.com/opentrons/opentrons/issues/4027)) ([42deac2](https://github.com/opentrons/opentrons/commit/42deac2)), closes [#3894](https://github.com/opentrons/opentrons/issues/3894)
* **api:** support experimental bundle execution ([#4099](https://github.com/opentrons/opentrons/issues/4099)) ([1c503ed](https://github.com/opentrons/opentrons/commit/1c503ed))
* **components, app:** add custom pipette select with category support ([#3996](https://github.com/opentrons/opentrons/issues/3996)) ([47f0713](https://github.com/opentrons/opentrons/commit/47f0713))
* **labware-library:** add Labware Creator ([#4031](https://github.com/opentrons/opentrons/issues/4031)) ([0a4aa7c](https://github.com/opentrons/opentrons/commit/0a4aa7c))
* **protocol-designer:** avoid use of labware "format" ([#4070](https://github.com/opentrons/opentrons/issues/4070)) ([f8603a6](https://github.com/opentrons/opentrons/commit/f8603a6)), closes [#3894](https://github.com/opentrons/opentrons/issues/3894)
* **protocol-designer:** disallow standard labware def upload ([#4077](https://github.com/opentrons/opentrons/issues/4077)) ([5670823](https://github.com/opentrons/opentrons/commit/5670823)), closes [#4009](https://github.com/opentrons/opentrons/issues/4009)
* **app:** show spinner while robot logs are downloading ([#4158](https://github.com/opentrons/opentrons/issues/4158)) ([cd50c42](https://github.com/opentrons/opentrons/commit/cd50c42))




# [3.12.0](https://github.com/Opentrons/opentrons/compare/v3.11.4...v3.12.0) (2019-09-13)

### Bug Fixes

* **api:** check instrument name or type, allow gen2's ([#3933](https://github.com/Opentrons/opentrons/issues/3933)) ([6c0c49b](https://github.com/Opentrons/opentrons/commit/6c0c49b))
* **api:** fix overeager homing during smoothie errors ([#3979](https://github.com/Opentrons/opentrons/issues/3979)) ([1cc86f3](https://github.com/Opentrons/opentrons/commit/1cc86f3))
* **api:** fix tip probing not fully self-centering ([#4001](https://github.com/Opentrons/opentrons/issues/4001)) ([6d42fc3](https://github.com/Opentrons/opentrons/commit/6d42fc3)), closes [#3983](https://github.com/Opentrons/opentrons/issues/3983)
* **api:** remove protocol file size limit and ack immediately ([#4006](https://github.com/Opentrons/opentrons/issues/4006)) ([2a82724](https://github.com/Opentrons/opentrons/commit/2a82724)), closes [#3998](https://github.com/Opentrons/opentrons/issues/3998)
* **app:** Add tip rack name to tip probe wizard instructions ([#3940](https://github.com/Opentrons/opentrons/issues/3940)) ([e053008](https://github.com/Opentrons/opentrons/commit/e053008))
* **app:** compensate for differences in app and robot clocks ([#3875](https://github.com/Opentrons/opentrons/issues/3875)) ([a3ee4eb](https://github.com/Opentrons/opentrons/commit/a3ee4eb)), closes [#3872](https://github.com/Opentrons/opentrons/issues/3872)
* **app:** Improve tip probe wizard state and error handling ([#3959](https://github.com/Opentrons/opentrons/issues/3959)) ([b88c73b](https://github.com/Opentrons/opentrons/commit/b88c73b)), closes [#3948](https://github.com/Opentrons/opentrons/issues/3948) [#3944](https://github.com/Opentrons/opentrons/issues/3944) [#3943](https://github.com/Opentrons/opentrons/issues/3943) [#2008](https://github.com/Opentrons/opentrons/issues/2008)
* **app:** make shell remote check lazier to avoid spurious assertions ([#3895](https://github.com/Opentrons/opentrons/issues/3895)) ([7aaad6d](https://github.com/Opentrons/opentrons/commit/7aaad6d))
* **app:** Remove incorrect data removal warning from change pipette ([#3942](https://github.com/Opentrons/opentrons/issues/3942)) ([27b315c](https://github.com/Opentrons/opentrons/commit/27b315c))
* **app-shell:** Update Electron and add macOS app notarization ([#4011](https://github.com/Opentrons/opentrons/issues/4011)) ([246d6db](https://github.com/Opentrons/opentrons/commit/246d6db)), closes [#3997](https://github.com/Opentrons/opentrons/issues/3997) [#2567](https://github.com/Opentrons/opentrons/issues/2567)
* **docs:** Fix OT 1 API link and PDF link ([#3993](https://github.com/Opentrons/opentrons/issues/3993)) ([921e2cb](https://github.com/Opentrons/opentrons/commit/921e2cb))
* **labware-library:** Fix incorrect tree hydration with query params ([f9ba169](https://github.com/Opentrons/opentrons/commit/f9ba169))
* **shared-data:** fix tipOvelap value for P20 tiprack ([#3990](https://github.com/Opentrons/opentrons/issues/3990)) ([9982ceb](https://github.com/Opentrons/opentrons/commit/9982ceb))
* **update-server:** Fix hash in SSH key upload response message ([#3947](https://github.com/Opentrons/opentrons/issues/3947)) ([b070205](https://github.com/Opentrons/opentrons/commit/b070205))


### Features

* **api:** Allow starting tip selection for pipettes ([#3935](https://github.com/Opentrons/opentrons/issues/3935)) ([e383034](https://github.com/Opentrons/opentrons/commit/e383034))
* **app:** display custom labware on deckmap ([#3891](https://github.com/Opentrons/opentrons/issues/3891)) ([f3ee4b3](https://github.com/Opentrons/opentrons/commit/f3ee4b3)), closes [#3826](https://github.com/Opentrons/opentrons/issues/3826)
* **protocol-designer:** add copy with custom labware button ([#3991](https://github.com/Opentrons/opentrons/issues/3991)) ([edb5d75](https://github.com/Opentrons/opentrons/commit/edb5d75)), closes [#3924](https://github.com/Opentrons/opentrons/issues/3924)
* **protocol-designer:** allow user to upload custom labware ([#3863](https://github.com/Opentrons/opentrons/issues/3863)) ([2dfe404](https://github.com/Opentrons/opentrons/commit/2dfe404))
* **protocol-designer:** output minified json ([#3999](https://github.com/Opentrons/opentrons/issues/3999)) ([44d9a5b](https://github.com/Opentrons/opentrons/commit/44d9a5b)), closes [#3998](https://github.com/Opentrons/opentrons/issues/3998)
* **protocol-designer:** put custom labware upload under feature flag ([#3923](https://github.com/Opentrons/opentrons/issues/3923)) ([a61dfc2](https://github.com/Opentrons/opentrons/commit/a61dfc2))
* **shared-data:** add 24-well NEST tube racks ([#3916](https://github.com/Opentrons/opentrons/issues/3916)) ([eaa30dc](https://github.com/Opentrons/opentrons/commit/eaa30dc))
* **shared-data:** add NEST 96 PCR well plate 100 uL ([#3827](https://github.com/Opentrons/opentrons/issues/3827)) ([2a9a986](https://github.com/Opentrons/opentrons/commit/2a9a986))
* **shared-data:** add NEST 96 wellplate 200 uL Flat ([#3862](https://github.com/Opentrons/opentrons/issues/3862)) ([39835e9](https://github.com/Opentrons/opentrons/commit/39835e9))
* **shared-data:** add NEST conical tuberacks ([#3906](https://github.com/Opentrons/opentrons/issues/3906)) ([a39c3e7](https://github.com/Opentrons/opentrons/commit/a39c3e7))





## [3.11.4](https://github.com/opentrons/opentrons/compare/v3.11.3...v3.11.4) (2019-08-29)

**Note:** Version bump only for package opentrons





## [3.11.3](https://github.com/opentrons/opentrons/compare/v3.11.2...v3.11.3) (2019-08-28)


### Bug Fixes

* **api:** do not swallow smoothie errors with certain patterns ([#3955](https://github.com/opentrons/opentrons/issues/3955)) ([5c95c59](https://github.com/opentrons/opentrons/commit/5c95c59))
* **api:** Restore the name, desc of tip probe reset in v1 ([#3952](https://github.com/opentrons/opentrons/issues/3952)) ([27a4e95](https://github.com/opentrons/opentrons/commit/27a4e95)), closes [#3950](https://github.com/opentrons/opentrons/issues/3950)





## [3.11.2](https://github.com/Opentrons/opentrons/compare/v3.11.1...v3.11.2) (2019-08-21)


### Bug Fixes

* **app:** Fix regression breaking trash removal modal before tip probe ([f0d1da3](https://github.com/Opentrons/opentrons/commit/f0d1da3))





## [3.11.1](https://github.com/Opentrons/opentrons/compare/v3.11.0...v3.11.1) (2019-08-21)


### Bug Fixes

* **app:** Fix paths to BR premigration wheels on Windows ([0ff8638](https://github.com/Opentrons/opentrons/commit/0ff8638))





# [3.11.0](https://github.com/opentrons/opentrons/compare/v3.10.3...v3.11.0) (2019-08-21)

### Bug Fixes

* **shared-data:** fix "strict" arg for labware creation ([#3874](https://github.com/opentrons/opentrons/issues/3874)) ([bd604e2](https://github.com/opentrons/opentrons/commit/bd604e2))
* **api:** apiv1: fix transfer volume ([#3792](https://github.com/opentrons/opentrons/issues/3792)) ([e3099af](https://github.com/opentrons/opentrons/commit/e3099af))
* **api:** apiv2: fix mix, blowout in advanced steps ([#3799](https://github.com/opentrons/opentrons/issues/3799)) ([48fc442](https://github.com/opentrons/opentrons/commit/48fc442)), closes [#3719](https://github.com/opentrons/opentrons/issues/3719)
* **api:** apiv2: fix overaspiration after blowout ([#3801](https://github.com/opentrons/opentrons/issues/3801)) ([61e82c3](https://github.com/opentrons/opentrons/commit/61e82c3)), closes [#3797](https://github.com/opentrons/opentrons/issues/3797)
* **api:** Do not publish commands for RPC pause/resume in APIv1 ([#3850](https://github.com/opentrons/opentrons/issues/3850)) ([72952ba](https://github.com/opentrons/opentrons/commit/72952ba))
* **api:** duplicate mix with blowout during transfer ([#3810](https://github.com/opentrons/opentrons/issues/3810)) ([9a70c36](https://github.com/opentrons/opentrons/commit/9a70c36)), closes [#2607](https://github.com/opentrons/opentrons/issues/2607)
* **api:** force nmcli to actively check for connectivity ([#3811](https://github.com/opentrons/opentrons/issues/3811)) ([c200de3](https://github.com/opentrons/opentrons/commit/c200de3)), closes [#3768](https://github.com/opentrons/opentrons/issues/3768)
* **app:** eagerly fetch modules and instruments on robot connect ([#3854](https://github.com/opentrons/opentrons/issues/3854)) ([88f5aec](https://github.com/opentrons/opentrons/commit/88f5aec)), closes [#3844](https://github.com/opentrons/opentrons/issues/3844)
* **app:** Remove Electron RPC remote objects from Redux state ([#3820](https://github.com/opentrons/opentrons/issues/3820)) ([d5f3fe3](https://github.com/opentrons/opentrons/commit/d5f3fe3))
* **protocol-designer:** update typeform version ([#3794](https://github.com/opentrons/opentrons/issues/3794)) ([46c6503](https://github.com/opentrons/opentrons/commit/46c6503))


### Features

* **app:** Add robot logging opt-out alert ([#3869](https://github.com/opentrons/opentrons/issues/3869)) ([9ab6938](https://github.com/opentrons/opentrons/commit/9ab6938))
* **api:** Add a log aggregation optout ([#3868](https://github.com/opentrons/opentrons/issues/3868)) ([ccb0b94](https://github.com/opentrons/opentrons/commit/ccb0b94)), closes [#3866](https://github.com/opentrons/opentrons/issues/3866)
* **api:** apiv2: prevent over-aspiration with filter tips ([#3781](https://github.com/opentrons/opentrons/issues/3781)) ([4cc3023](https://github.com/opentrons/opentrons/commit/4cc3023))
* **api:** cycle temperatures, pause, cancel, and resume to TC control ([#3839](https://github.com/opentrons/opentrons/issues/3839)) ([6841419](https://github.com/opentrons/opentrons/commit/6841419)), closes [#3581](https://github.com/opentrons/opentrons/issues/3581)
* **api:** move gantry to safe spot while TC lid moves ([#3807](https://github.com/opentrons/opentrons/issues/3807)) ([752295c](https://github.com/opentrons/opentrons/commit/752295c))
* **api:** prevent over-aspiration with filter tips in v1  ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([487927a](https://github.com/opentrons/opentrons/commit/487927a))
* **app:** add control of modules to run cards ([#3841](https://github.com/opentrons/opentrons/issues/3841)) ([9b34f9f](https://github.com/opentrons/opentrons/commit/9b34f9f))
* **app:** display TC on Deck Map ([#3786](https://github.com/opentrons/opentrons/issues/3786)) ([272a6ad](https://github.com/opentrons/opentrons/commit/272a6ad)), closes [#3553](https://github.com/opentrons/opentrons/issues/3553) [#3064](https://github.com/opentrons/opentrons/issues/3064)
* **app:** Enable buildroot updates by default ([#3861](https://github.com/opentrons/opentrons/issues/3861)) ([bf68ad9](https://github.com/opentrons/opentrons/commit/bf68ad9)), closes [#3822](https://github.com/opentrons/opentrons/issues/3822)
* **app:** prompt to open TC lid before labware calibration ([#3853](https://github.com/opentrons/opentrons/issues/3853)) ([2b7efbc](https://github.com/opentrons/opentrons/commit/2b7efbc)), closes [#3066](https://github.com/opentrons/opentrons/issues/3066)
* **app, api:** Key calibration by parent-type/labware-type combo ([#3800](https://github.com/opentrons/opentrons/issues/3800)) ([ba0df67](https://github.com/opentrons/opentrons/commit/ba0df67)), closes [#3775](https://github.com/opentrons/opentrons/issues/3775)
* **docs:** Add transfers page for API v2 ([#3857](https://github.com/opentrons/opentrons/issues/3857)) ([08a7d4c](https://github.com/opentrons/opentrons/commit/08a7d4c))
* **labware-library:** support static rendering of labware library ([#3791](https://github.com/opentrons/opentrons/issues/3791)) ([793b624](https://github.com/opentrons/opentrons/commit/793b624))
* **protocol-designer:** bump typeform/embed to v0.12.1 ([#3865](https://github.com/opentrons/opentrons/issues/3865)) ([617d5ad](https://github.com/opentrons/opentrons/commit/617d5ad))
* **protocol-designer:** warn user when exporting w/o steps ([#3864](https://github.com/opentrons/opentrons/issues/3864)) ([1a129ec](https://github.com/opentrons/opentrons/commit/1a129ec)), closes [#3060](https://github.com/opentrons/opentrons/issues/3060)





<a name="3.10.3"></a>
## [3.10.3](https://github.com/opentrons/opentrons/compare/v3.10.2...v3.10.3) (2019-07-26)

### Bug Fixes

* **api:** revert: "feat(api): prevent over-aspiration with filter tips in v1 ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([bd0808d](https://github.com/Opentrons/opentrons/commit/bd0808d726b7b17c35fa0116638b28f143d140e0))




<a name="3.10.2"></a>
## [3.10.2](https://github.com/opentrons/opentrons/compare/v3.10.0...v3.10.2) (2019-07-25)


### Bug Fixes

* **api:** Allow gen2 reference in protocol without pipette attached ([#3760](https://github.com/opentrons/opentrons/issues/3760)) ([e6c0b48](https://github.com/opentrons/opentrons/commit/e6c0b48))
* **api:** apiv1: handle partial db schema changes ([#3783](https://github.com/opentrons/opentrons/issues/3783)) ([5d52cd7](https://github.com/opentrons/opentrons/commit/5d52cd7))
* **api:** Save the difference between offsets in labwarev2 cal ([#3782](https://github.com/Opentrons/opentrons/commit/35a095aa5d74e02a183c71ddf58ad7ee97360a6a))
* **api:** apiv2: Correctly handle flow rates and plunger speeds ([#3739](https://github.com/opentrons/opentrons/issues/3739)) ([01c0fcb](https://github.com/opentrons/opentrons/commit/01c0fcb)), closes [#3737](https://github.com/opentrons/opentrons/issues/3737) [#3270](https://github.com/opentrons/opentrons/issues/3270)
* **api:** apiv2: Display locs for drop/pickup from implicit locs ([#3774](https://github.com/opentrons/opentrons/issues/3774)) ([cf7710f](https://github.com/opentrons/opentrons/commit/cf7710f)), closes [#3364](https://github.com/opentrons/opentrons/issues/3364)
* **api:** apiv2: fix protocol cancel ([#3725](https://github.com/opentrons/opentrons/issues/3725)) ([b2b8c46](https://github.com/opentrons/opentrons/commit/b2b8c46))
* **api:** apiv2: simulator should find pipettes by name versus model ([#3779](https://github.com/opentrons/opentrons/issues/3779)) ([a0fd72b](https://github.com/opentrons/opentrons/commit/a0fd72b))
* **api:** fix blow out logic ([#3764](https://github.com/opentrons/opentrons/issues/3764)) ([fb99bf0](https://github.com/opentrons/opentrons/commit/fb99bf0))
* **api:** Modify delay and motors which are disengaged ([#3770](https://github.com/opentrons/opentrons/issues/3770)) ([1eb760c](https://github.com/opentrons/opentrons/commit/1eb760c))
* **api:** Remove model name check for non-gen2 pipettes ([#3761](https://github.com/opentrons/opentrons/issues/3761)) ([263b536](https://github.com/opentrons/opentrons/commit/263b536))
* **api:** Use pip config presses by default ([#3778](https://github.com/opentrons/opentrons/issues/3778)) ([8fce1a9](https://github.com/opentrons/opentrons/commit/8fce1a9))
* **factory_scripts:** Remove old func name and refactor IP look-up ([#3763](https://github.com/opentrons/opentrons/issues/3763)) ([2847cad](https://github.com/opentrons/opentrons/commit/2847cad))
* **protocol-designer:** update various styles to match designs ([#3714](https://github.com/opentrons/opentrons/issues/3714)) ([ad0562c](https://github.com/opentrons/opentrons/commit/ad0562c)), closes [#2122](https://github.com/opentrons/opentrons/issues/2122)


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/opentrons/opentrons/issues/3733)
* **api:** prevent over-aspiration with filter tips in v1  ([#3692](https://github.com/opentrons/opentrons/issues/3692)) ([487927a](https://github.com/opentrons/opentrons/commit/487927a))
* **app:** add GEN2 images to change pipette ([#3734](https://github.com/opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/opentrons/opentrons/issues/3630)
* **protocol-designer:** update migration modal copy ([#3709](https://github.com/opentrons/opentrons/issues/3709)) ([e3d1ffa](https://github.com/opentrons/opentrons/commit/e3d1ffa)), closes [#3696](https://github.com/opentrons/opentrons/issues/3696)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/opentrons/opentrons/commit/3b39dea))
* **shared-data:** labwareV2: add filter tip racks ([#3777](https://github.com/opentrons/opentrons/issues/3777)) ([0dd5285](https://github.com/opentrons/opentrons/commit/0dd5285))





<a name="3.10.1"></a>
## [3.10.1](https://github.com/opentrons/opentrons/compare/v3.10.0...v3.10.1) (2019-07-19)


### Bug Fixes

* **api:** apiv2: Correctly handle flow rates and plunger speeds ([#3739](https://github.com/opentrons/opentrons/issues/3739)) ([01c0fcb](https://github.com/opentrons/opentrons/commit/01c0fcb)), closes [#3737](https://github.com/opentrons/opentrons/issues/3737) [#3270](https://github.com/opentrons/opentrons/issues/3270)
* **api:** apiv2: fix protocol cancel ([#3725](https://github.com/opentrons/opentrons/issues/3725)) ([b2b8c46](https://github.com/opentrons/opentrons/commit/b2b8c46))
* **protocol-designer:** update various styles to match designs ([#3714](https://github.com/opentrons/opentrons/issues/3714)) ([ad0562c](https://github.com/opentrons/opentrons/commit/ad0562c)), closes [#2122](https://github.com/opentrons/opentrons/issues/2122)


### Features

* **api:** Make blow out flow rate settable ([#3735](https://github.com/opentrons/opentrons/issues/3735)) ([e12b4fd](https://github.com/opentrons/opentrons/commit/e12b4fd)), closes [#3733](https://github.com/opentrons/opentrons/issues/3733)
* **app:** add GEN2 images to change pipette ([#3734](https://github.com/opentrons/opentrons/issues/3734)) ([1016c16](https://github.com/opentrons/opentrons/commit/1016c16)), closes [#3630](https://github.com/opentrons/opentrons/issues/3630)
* **protocol-designer:** update migration modal copy ([#3709](https://github.com/opentrons/opentrons/issues/3709)) ([e3d1ffa](https://github.com/opentrons/opentrons/commit/e3d1ffa)), closes [#3696](https://github.com/opentrons/opentrons/issues/3696)
* **shared-data:** add displayCategory to pipetteNameSpecs and schema ([#3731](https://github.com/opentrons/opentrons/issues/3731)) ([3b39dea](https://github.com/opentrons/opentrons/commit/3b39dea))





<a name="3.10.0"></a>
# [3.10.0](https://github.com/Opentrons/opentrons/compare/v3.9.0...v3.10.0) (2019-07-15)


### Bug Fixes

* **api:** Account for tip length in deck cal move-to-front ([#3495](https://github.com/Opentrons/opentrons/issues/3495)) ([01dfaa8](https://github.com/Opentrons/opentrons/commit/01dfaa8))
* **api:** Add new biorad def name to engage height list ([#3717](https://github.com/Opentrons/opentrons/issues/3717)) ([9b8ce91](https://github.com/Opentrons/opentrons/commit/9b8ce91))
* **api:** always ensure labware db is up to date ([#3713](https://github.com/Opentrons/opentrons/issues/3713)) ([e0a5cc1](https://github.com/Opentrons/opentrons/commit/e0a5cc1))
* **api:** Correct labwarev2 reservoirs on apiv1 ([#3706](https://github.com/Opentrons/opentrons/issues/3706)) ([397f17e](https://github.com/Opentrons/opentrons/commit/397f17e))
* **api:** do not handle smoothie alarms from halt() ([#3721](https://github.com/Opentrons/opentrons/issues/3721)) ([1e72261](https://github.com/Opentrons/opentrons/commit/1e72261))
* **api:** Fix api v2 deck cal ([#3550](https://github.com/Opentrons/opentrons/issues/3550)) ([953abad](https://github.com/Opentrons/opentrons/commit/953abad))
* **api:** Fix first-boot smoothie updates for apiv2 ([#3519](https://github.com/Opentrons/opentrons/issues/3519)) ([2c0800d](https://github.com/Opentrons/opentrons/commit/2c0800d)), closes [#3501](https://github.com/Opentrons/opentrons/issues/3501)
* **api:** Fix gen2 model offsets ([#3614](https://github.com/Opentrons/opentrons/issues/3614)) ([dd1680a](https://github.com/Opentrons/opentrons/commit/dd1680a))
* **api:** Fix module calibration in API V2 ([#3675](https://github.com/Opentrons/opentrons/issues/3675)) ([d214c5a](https://github.com/Opentrons/opentrons/commit/d214c5a))
* **api:** increase serial response timeout for thermocycler ([#3711](https://github.com/Opentrons/opentrons/issues/3711)) ([4018870](https://github.com/Opentrons/opentrons/commit/4018870))
* **api:** Make BCRobot fw_version sync again ([#3688](https://github.com/Opentrons/opentrons/issues/3688)) ([067fe4c](https://github.com/Opentrons/opentrons/commit/067fe4c))
* **api:** Remove usage of time.clock() ([#3635](https://github.com/Opentrons/opentrons/issues/3635)) ([a9c7237](https://github.com/Opentrons/opentrons/commit/a9c7237))
* **api:** Synchronize access to the smoothie and rpc ([#3528](https://github.com/Opentrons/opentrons/issues/3528)) ([628c6c4](https://github.com/Opentrons/opentrons/commit/628c6c4)), closes [#3527](https://github.com/Opentrons/opentrons/issues/3527)
* **api:** unrestrict thermocycler lid at api level for testing ([#3705](https://github.com/Opentrons/opentrons/issues/3705)) ([f46ad49](https://github.com/Opentrons/opentrons/commit/f46ad49))
* **api:** Use npx shx instead of shx directly ([#3524](https://github.com/Opentrons/opentrons/issues/3524)) ([29b7c91](https://github.com/Opentrons/opentrons/commit/29b7c91))
* **app:** Add reservior calibration instruction support ([#3704](https://github.com/Opentrons/opentrons/issues/3704)) ([1464772](https://github.com/Opentrons/opentrons/commit/1464772))
* **app:** Do not swallow protocol run errors ([#3723](https://github.com/Opentrons/opentrons/issues/3723)) ([73d06d8](https://github.com/Opentrons/opentrons/commit/73d06d8)), closes [#1828](https://github.com/Opentrons/opentrons/issues/1828)
* **app:** Stop long labware names overflowing calibration screens ([#3715](https://github.com/Opentrons/opentrons/issues/3715)) ([22fd8ad](https://github.com/Opentrons/opentrons/commit/22fd8ad))
* **app-shell:** Add missing existence check to FF object ([#3638](https://github.com/Opentrons/opentrons/issues/3638)) ([3e784c4](https://github.com/Opentrons/opentrons/commit/3e784c4))
* **app-shell:** Clean up main window and DC on app quit ([#3622](https://github.com/Opentrons/opentrons/issues/3622)) ([d4a5c3e](https://github.com/Opentrons/opentrons/commit/d4a5c3e)), closes [#3482](https://github.com/Opentrons/opentrons/issues/3482)
* **app,pd:** Truncate long labware names ([#3644](https://github.com/Opentrons/opentrons/issues/3644)) ([abe4bc7](https://github.com/Opentrons/opentrons/commit/abe4bc7)), closes [#3617](https://github.com/Opentrons/opentrons/issues/3617) [#2444](https://github.com/Opentrons/opentrons/issues/2444)
* **components:** add remove scroll override prop to Modal ([#3671](https://github.com/Opentrons/opentrons/issues/3671)) ([2abaea2](https://github.com/Opentrons/opentrons/commit/2abaea2))
* **components:** fix console error with invalid transform ([#3624](https://github.com/Opentrons/opentrons/issues/3624)) ([47dcbb7](https://github.com/Opentrons/opentrons/commit/47dcbb7))
* **flow:** declare node_modules and shared-data defs as untyped ([#3577](https://github.com/Opentrons/opentrons/issues/3577)) ([befded9](https://github.com/Opentrons/opentrons/commit/befded9))
* **labware:** Fix generator well y calculation, update docs/schema ([#3697](https://github.com/Opentrons/opentrons/issues/3697)) ([31a2963](https://github.com/Opentrons/opentrons/commit/31a2963)), closes [#3602](https://github.com/Opentrons/opentrons/issues/3602)
* **protocol-designer:** add "fixed-trash" labware type to v1->v2 shim ([#3512](https://github.com/Opentrons/opentrons/issues/3512)) ([03f0716](https://github.com/Opentrons/opentrons/commit/03f0716))
* **protocol-designer:** darken "drag to new slot" text ([#3660](https://github.com/Opentrons/opentrons/issues/3660)) ([c31a816](https://github.com/Opentrons/opentrons/commit/c31a816)), closes [#3649](https://github.com/Opentrons/opentrons/issues/3649)
* **protocol-designer:** fix bug with pipette field change ([#3585](https://github.com/Opentrons/opentrons/issues/3585)) ([851edf4](https://github.com/Opentrons/opentrons/commit/851edf4))
* **protocol-designer:** fix bug with protocol title ([#3640](https://github.com/Opentrons/opentrons/issues/3640)) ([ed6c2a7](https://github.com/Opentrons/opentrons/commit/ed6c2a7)), closes [#3639](https://github.com/Opentrons/opentrons/issues/3639)
* **protocol-designer:** fix bug with timeline idx out of range ([#3621](https://github.com/Opentrons/opentrons/issues/3621)) ([eca6181](https://github.com/Opentrons/opentrons/commit/eca6181)), closes [#3603](https://github.com/Opentrons/opentrons/issues/3603)
* **protocol-designer:** fix labware nickname µL capitalization ([#3673](https://github.com/Opentrons/opentrons/issues/3673)) ([8b596fb](https://github.com/Opentrons/opentrons/commit/8b596fb))
* **protocol-designer:** inner mix in move liquid predictable tip height ([#3418](https://github.com/Opentrons/opentrons/issues/3418)) ([95feefc](https://github.com/Opentrons/opentrons/commit/95feefc)), closes [#3414](https://github.com/Opentrons/opentrons/issues/3414)
* **protocol-designer:** keep edit nickname to one line ([#3659](https://github.com/Opentrons/opentrons/issues/3659)) ([158c270](https://github.com/Opentrons/opentrons/commit/158c270)), closes [#3648](https://github.com/Opentrons/opentrons/issues/3648)
* **protocol-designer:** left-align labware text in labware selection modal ([#3658](https://github.com/Opentrons/opentrons/issues/3658)) ([aaa7803](https://github.com/Opentrons/opentrons/commit/aaa7803)), closes [#3647](https://github.com/Opentrons/opentrons/issues/3647)
* **protocol-designer:** mend and extend scroll to top, fix reorder crash ([#3681](https://github.com/Opentrons/opentrons/issues/3681)) ([9b4f601](https://github.com/Opentrons/opentrons/commit/9b4f601)), closes [#3679](https://github.com/Opentrons/opentrons/issues/3679)
* **protocol-designer:** redo disambiguation nums for labware ([#3600](https://github.com/Opentrons/opentrons/issues/3600)) ([98bd916](https://github.com/Opentrons/opentrons/commit/98bd916)), closes [#2424](https://github.com/Opentrons/opentrons/issues/2424)
* **shared_data:** Change deep well name, modify tipracks ([#3513](https://github.com/Opentrons/opentrons/issues/3513)) ([9c883d5](https://github.com/Opentrons/opentrons/commit/9c883d5))
* **shared_data:** Fix module path in shared data ([#3556](https://github.com/Opentrons/opentrons/issues/3556)) ([4742458](https://github.com/Opentrons/opentrons/commit/4742458))
* **shared-data:** patch some v2 labware from drawings ([#3623](https://github.com/Opentrons/opentrons/issues/3623)) ([84ecef1](https://github.com/Opentrons/opentrons/commit/84ecef1)), closes [#3618](https://github.com/Opentrons/opentrons/issues/3618)
* **shared-data:** patch v2 opentrons 15 and 50 mL tube racks ([#3712](https://github.com/Opentrons/opentrons/issues/3712)) ([66f1200](https://github.com/Opentrons/opentrons/commit/66f1200))


### Features

* **api:** Add a quirk for return tip height ([#3687](https://github.com/Opentrons/opentrons/issues/3687)) ([3a89b69](https://github.com/Opentrons/opentrons/commit/3a89b69))
* **api:** Add Gen2 multichannel pipette api support ([#3691](https://github.com/Opentrons/opentrons/issues/3691)) ([d1ae1ed](https://github.com/Opentrons/opentrons/commit/d1ae1ed))
* **api:** Add hardware control socket server ([#3633](https://github.com/Opentrons/opentrons/issues/3633)) ([6cac0b5](https://github.com/Opentrons/opentrons/commit/6cac0b5)), closes [#3544](https://github.com/Opentrons/opentrons/issues/3544)
* **api:** add missing TC stuff for science testing ([#3348](https://github.com/Opentrons/opentrons/issues/3348)) ([0640c7a](https://github.com/Opentrons/opentrons/commit/0640c7a))
* **api:** Add P50Sv1.5 ([#3689](https://github.com/Opentrons/opentrons/issues/3689)) ([6b42e6c](https://github.com/Opentrons/opentrons/commit/6b42e6c)), closes [#3680](https://github.com/Opentrons/opentrons/issues/3680)
* **api:** Add speed settings to apiv2 ([#3708](https://github.com/Opentrons/opentrons/issues/3708)) ([45ec246](https://github.com/Opentrons/opentrons/commit/45ec246))
* **api:** Always remove v2 calibration ([#3701](https://github.com/Opentrons/opentrons/issues/3701)) ([dea5d40](https://github.com/Opentrons/opentrons/commit/dea5d40)), closes [#3700](https://github.com/Opentrons/opentrons/issues/3700)
* **api:** default to labware version 1, not latest ([#3667](https://github.com/Opentrons/opentrons/issues/3667)) ([53b48ba](https://github.com/Opentrons/opentrons/commit/53b48ba)), closes [#3664](https://github.com/Opentrons/opentrons/issues/3664)
* **api:** do not use labware otId ([#3515](https://github.com/Opentrons/opentrons/issues/3515)) ([744075f](https://github.com/Opentrons/opentrons/commit/744075f))
* **api:** reference calibration data via hash of labware def ([#3498](https://github.com/Opentrons/opentrons/issues/3498)) ([0475586](https://github.com/Opentrons/opentrons/commit/0475586)), closes [#3493](https://github.com/Opentrons/opentrons/issues/3493)
* **api:** save labware under namespace/load_name/version ([#3487](https://github.com/Opentrons/opentrons/issues/3487)) ([400d6e6](https://github.com/Opentrons/opentrons/commit/400d6e6)), closes [#3474](https://github.com/Opentrons/opentrons/issues/3474)
* **app:** add support for v2 labware ([#3590](https://github.com/Opentrons/opentrons/issues/3590)) ([0b74937](https://github.com/Opentrons/opentrons/commit/0b74937)), closes [#3451](https://github.com/Opentrons/opentrons/issues/3451)
* **app:** Get protocolDisplayData based on protocol schema ([#3531](https://github.com/Opentrons/opentrons/issues/3531)) ([ec69d84](https://github.com/Opentrons/opentrons/commit/ec69d84)), closes [#3494](https://github.com/Opentrons/opentrons/issues/3494)
* **components:** Make design changes to RWS ([#3608](https://github.com/Opentrons/opentrons/issues/3608)) ([d3dd2c6](https://github.com/Opentrons/opentrons/commit/d3dd2c6))
* **labware:** update labware mapping ([#3636](https://github.com/Opentrons/opentrons/issues/3636)) ([a1e6005](https://github.com/Opentrons/opentrons/commit/a1e6005)), closes [#3605](https://github.com/Opentrons/opentrons/issues/3605)
* **labware:** zero out cornerOffsetFromSlot from all current v2 labware defs ([#3642](https://github.com/Opentrons/opentrons/issues/3642)) ([9b91298](https://github.com/Opentrons/opentrons/commit/9b91298))
* **labware-library:** show only the single latest version of a def ([#3552](https://github.com/Opentrons/opentrons/issues/3552)) ([f901a30](https://github.com/Opentrons/opentrons/commit/f901a30)), closes [#3551](https://github.com/Opentrons/opentrons/issues/3551)
* **protocol-designer:** add 'view measurements' link ([#3665](https://github.com/Opentrons/opentrons/issues/3665)) ([406b27d](https://github.com/Opentrons/opentrons/commit/406b27d)), closes [#3657](https://github.com/Opentrons/opentrons/issues/3657)
* **protocol-designer:** load v3 protocols ([#3591](https://github.com/Opentrons/opentrons/issues/3591)) ([8a10ec6](https://github.com/Opentrons/opentrons/commit/8a10ec6)), closes [#3336](https://github.com/Opentrons/opentrons/issues/3336)
* **protocol-designer:** migrate PD files to 3.0.0 ([#3606](https://github.com/Opentrons/opentrons/issues/3606)) ([10363ca](https://github.com/Opentrons/opentrons/commit/10363ca)), closes [#3337](https://github.com/Opentrons/opentrons/issues/3337)
* **protocol-designer:** save v3 protocols ([#3588](https://github.com/Opentrons/opentrons/issues/3588)) ([40f3a9e](https://github.com/Opentrons/opentrons/commit/40f3a9e)), closes [#3336](https://github.com/Opentrons/opentrons/issues/3336) [#3414](https://github.com/Opentrons/opentrons/issues/3414)
* **protocol-designer:** show only latest version of labware in LabwareSelectionModal ([467b04d](https://github.com/Opentrons/opentrons/commit/467b04d)), closes [#3525](https://github.com/Opentrons/opentrons/issues/3525)
* **protocol-designer:** style deck to designs, fix move labware ([#3523](https://github.com/Opentrons/opentrons/issues/3523)) ([bd7fb24](https://github.com/Opentrons/opentrons/commit/bd7fb24))
* **protocol-designer:** use labware def URIs ([#3526](https://github.com/Opentrons/opentrons/issues/3526)) ([6077eb8](https://github.com/Opentrons/opentrons/commit/6077eb8)), closes [#3455](https://github.com/Opentrons/opentrons/issues/3455)
* **protocol-designer:** use RobotWorkSpace for deck map ([#3479](https://github.com/Opentrons/opentrons/issues/3479)) ([9aa4eb6](https://github.com/Opentrons/opentrons/commit/9aa4eb6)), closes [#3327](https://github.com/Opentrons/opentrons/issues/3327)
* **protocol-designer:** use RWS for deck setup with highlight and dnd ([#3517](https://github.com/Opentrons/opentrons/issues/3517)) ([7f45124](https://github.com/Opentrons/opentrons/commit/7f45124))
* **protocol-designer:** warn on migrating to 3.0.0 ([#3632](https://github.com/Opentrons/opentrons/issues/3632)) ([01884d0](https://github.com/Opentrons/opentrons/commit/01884d0))
* **shared-data:** add 1-well troughs and 96-well deep well plate ([#3570](https://github.com/Opentrons/opentrons/issues/3570)) ([f495ea1](https://github.com/Opentrons/opentrons/commit/f495ea1))
* **shared-data:** Add Corning 96 flat labware def ([#3625](https://github.com/Opentrons/opentrons/issues/3625)) ([af9e561](https://github.com/Opentrons/opentrons/commit/af9e561)), closes [#3619](https://github.com/Opentrons/opentrons/issues/3619)
* **shared-data:** display specific v2 labware as "retired" ([#3627](https://github.com/Opentrons/opentrons/issues/3627)) ([3fb5812](https://github.com/Opentrons/opentrons/commit/3fb5812))
* **shared-data:** make flow def for json protocol v3 ([#3571](https://github.com/Opentrons/opentrons/issues/3571)) ([9144193](https://github.com/Opentrons/opentrons/commit/9144193))
* **shared-data:** remove otId from all v2 labware and dependencies ([#3549](https://github.com/Opentrons/opentrons/issues/3549)) ([1766cb1](https://github.com/Opentrons/opentrons/commit/1766cb1)), closes [#3471](https://github.com/Opentrons/opentrons/issues/3471)
* **update-server:** Default buildroot migration to available ([#3514](https://github.com/Opentrons/opentrons/issues/3514)) ([d3cae93](https://github.com/Opentrons/opentrons/commit/d3cae93))





<a name="3.9.0"></a>
# [3.9.0](https://github.com/opentrons/opentrons/compare/v3.8.3...v3.9.0) (2019-05-29)


### Bug Fixes

* **api:** Add separate key for new steps per mm shape ([#3499](https://github.com/opentrons/opentrons/issues/3499)) ([50bb2a9](https://github.com/opentrons/opentrons/commit/50bb2a9))
* **api:** Don't talk about apiv2 if you can't find a labware ([#3435](https://github.com/opentrons/opentrons/issues/3435)) ([d31f1a5](https://github.com/opentrons/opentrons/commit/d31f1a5))
* **api:** Fix default transfer tip behavior ([#3486](https://github.com/opentrons/opentrons/issues/3486)) ([4534e6f](https://github.com/opentrons/opentrons/commit/4534e6f))
* **api:** Handle smoothie update better ([#3437](https://github.com/opentrons/opentrons/issues/3437)) ([d2569d8](https://github.com/opentrons/opentrons/commit/d2569d8))
* **app:** Allow valid pipette+ model names for display images ([#3413](https://github.com/opentrons/opentrons/issues/3413)) ([1f77a08](https://github.com/opentrons/opentrons/commit/1f77a08))
* **app:** Re-enable change pipette and pipette settings ([#3475](https://github.com/opentrons/opentrons/issues/3475)) ([2419110](https://github.com/opentrons/opentrons/commit/2419110))
* **app:** Verify attached/protocol pipettes ([#3458](https://github.com/opentrons/opentrons/issues/3458)) ([20988b8](https://github.com/opentrons/opentrons/commit/20988b8))
* **protocol-designer:** cast offsetFromBottomMm values to number ([#3387](https://github.com/opentrons/opentrons/issues/3387)) ([893f83a](https://github.com/opentrons/opentrons/commit/893f83a))
* **protocol-designer:** update document title to reflect project status ([#3390](https://github.com/opentrons/opentrons/issues/3390)) ([9ea495d](https://github.com/opentrons/opentrons/commit/9ea495d))


### Features

* **api:** Add backwards compatibility to old pipette constructors ([#3438](https://github.com/opentrons/opentrons/issues/3438)) ([25cf5fe](https://github.com/opentrons/opentrons/commit/25cf5fe))
* **api:** Add G Code for pipette config in driver ([#3388](https://github.com/opentrons/opentrons/issues/3388)) ([77fffa6](https://github.com/opentrons/opentrons/commit/77fffa6))
* **api:** add pipette plus constructors ([#3407](https://github.com/opentrons/opentrons/issues/3407)) ([f4feee9](https://github.com/opentrons/opentrons/commit/f4feee9))
* **api:** Add pipette v2.0 config ([#3394](https://github.com/opentrons/opentrons/issues/3394)) ([f7739b9](https://github.com/opentrons/opentrons/commit/f7739b9))
* **api:** Add pipette+ to write_pipette_memory ([#3405](https://github.com/opentrons/opentrons/issues/3405)) ([1b35ed1](https://github.com/opentrons/opentrons/commit/1b35ed1))
* **api:** Allow loading labware v2 definitions directly into apiv1 ([#3466](https://github.com/opentrons/opentrons/issues/3466)) ([a3201fb](https://github.com/opentrons/opentrons/commit/a3201fb))
* **api:** apiv2: allow returning tips to the tip tracker ([#3470](https://github.com/opentrons/opentrons/issues/3470)) ([0c73aa1](https://github.com/opentrons/opentrons/commit/0c73aa1))
* **api:** buildroot: allow separate setting of upstream log level ([#3436](https://github.com/opentrons/opentrons/issues/3436)) ([ebc41a4](https://github.com/opentrons/opentrons/commit/ebc41a4)), closes [#3422](https://github.com/opentrons/opentrons/issues/3422)
* **api:** Detect and change behavior for buildroot system ([#3367](https://github.com/opentrons/opentrons/issues/3367)) ([a439f5b](https://github.com/opentrons/opentrons/commit/a439f5b))
* **api:** Enable Double Drop Quirk ([#3485](https://github.com/opentrons/opentrons/issues/3485)) ([e864150](https://github.com/opentrons/opentrons/commit/e864150))
* **api:** Make pipette quirks configurable ([#3463](https://github.com/opentrons/opentrons/issues/3463)) ([3513794](https://github.com/opentrons/opentrons/commit/3513794))
* **api:** support running v3 protocols in APIv1 ([#3468](https://github.com/opentrons/opentrons/issues/3468)) ([0ff1ab6](https://github.com/opentrons/opentrons/commit/0ff1ab6)), closes [#3449](https://github.com/opentrons/opentrons/issues/3449)
* **app:** Enable pipette quirks in pipette config ([#3488](https://github.com/opentrons/opentrons/issues/3488)) ([b17f568](https://github.com/opentrons/opentrons/commit/b17f568))
* **components:** dynamic props for Labware component ([#3408](https://github.com/opentrons/opentrons/issues/3408)) ([ab83662](https://github.com/opentrons/opentrons/commit/ab83662)), closes [#3328](https://github.com/opentrons/opentrons/issues/3328)
* **protocol-designer:** make "labware views" use new v2 labware components ([#3448](https://github.com/opentrons/opentrons/issues/3448)) ([ec6598b](https://github.com/opentrons/opentrons/commit/ec6598b))
* **protocol-designer:** v2 labware selection from definitions ([#3439](https://github.com/opentrons/opentrons/issues/3439)) ([0ae7129](https://github.com/opentrons/opentrons/commit/0ae7129)), closes [#3335](https://github.com/opentrons/opentrons/issues/3335) [#3291](https://github.com/opentrons/opentrons/issues/3291) [#3290](https://github.com/opentrons/opentrons/issues/3290)
* **repo:** change v2 labware len/width fields ([#3410](https://github.com/opentrons/opentrons/issues/3410)) ([0ef0bd5](https://github.com/opentrons/opentrons/commit/0ef0bd5))
* **shared-data:** add layers to deck schema and definitions ([#3385](https://github.com/opentrons/opentrons/issues/3385)) ([d84cc35](https://github.com/opentrons/opentrons/commit/d84cc35)), closes [#3325](https://github.com/opentrons/opentrons/issues/3325)
* **shared-data:** add version, schemaVersion, and namespace keys to v2 labware ([#3469](https://github.com/opentrons/opentrons/issues/3469)) ([da03025](https://github.com/opentrons/opentrons/commit/da03025)), closes [#3454](https://github.com/opentrons/opentrons/issues/3454)
* **shared-data:** deck component from physical data ([#3415](https://github.com/opentrons/opentrons/issues/3415)) ([ddf9e78](https://github.com/opentrons/opentrons/commit/ddf9e78)), closes [#3326](https://github.com/opentrons/opentrons/issues/3326)
* **update-server:** buildroot: use sd-notify and better hostname ([#3416](https://github.com/opentrons/opentrons/issues/3416)) ([e38944c](https://github.com/opentrons/opentrons/commit/e38944c))


<a name="3.8.3"></a>
## [3.8.3](https://github.com/opentrons/opentrons/compare/v3.8.2...v3.8.3) (2019-04-30)


### Features

* **api:** Add new 10ul tiprack ([#3393](https://github.com/opentrons/opentrons/issues/3393)) ([a7c15cc](https://github.com/opentrons/opentrons/commit/a7c15cc))

<a name="3.8.2"></a>
## [3.8.2](https://github.com/opentrons/opentrons/compare/v3.8.1...v3.8.2) (2019-04-23)


### Bug Fixes

* **api:** Correctly specify jsonschema in setup.py install_requires ([#3377](https://github.com/opentrons/opentrons/issues/3377)) ([a79d7ab](https://github.com/opentrons/opentrons/commit/a79d7ab))
* **api:** Do not sleep in simulated delays ([#3347](https://github.com/opentrons/opentrons/issues/3347)) ([e12e200](https://github.com/opentrons/opentrons/commit/e12e200)), closes [#3346](https://github.com/opentrons/opentrons/issues/3346)
* **api:** Remove module load regression in V2 ([#3288](https://github.com/opentrons/opentrons/issues/3288)) ([7fe143a](https://github.com/opentrons/opentrons/commit/7fe143a))
* **app:** Clear deck cal request states on wizard exit ([#3378](https://github.com/opentrons/opentrons/issues/3378)) ([408b8aa](https://github.com/opentrons/opentrons/commit/408b8aa))
* **app:** Disable manual ip double submit on enter keypress ([#3376](https://github.com/opentrons/opentrons/issues/3376)) ([81291ca](https://github.com/opentrons/opentrons/commit/81291ca))
* **app:** render correct image for vial and tube racks ([#3298](https://github.com/opentrons/opentrons/issues/3298)) ([b9e1ebb](https://github.com/opentrons/opentrons/commit/b9e1ebb)), closes [#3294](https://github.com/opentrons/opentrons/issues/3294)
* **labware-library:** Take cornerOffsetFromSlot into account with render ([#3297](https://github.com/opentrons/opentrons/issues/3297)) ([04a1ab8](https://github.com/opentrons/opentrons/commit/04a1ab8))
* **protocol-designer:** fix trough over-aspirate bug ([#3280](https://github.com/opentrons/opentrons/issues/3280)) ([c0b0333](https://github.com/opentrons/opentrons/commit/c0b0333))
* **shared-data:** fix v2 labware definition ([#3289](https://github.com/opentrons/opentrons/issues/3289)) ([e652fb7](https://github.com/opentrons/opentrons/commit/e652fb7)), closes [#3271](https://github.com/opentrons/opentrons/issues/3271)
* **update-server:** Create ~/.ssh/authorized_keys if needed ([#3351](https://github.com/opentrons/opentrons/issues/3351)) ([c2836bb](https://github.com/opentrons/opentrons/commit/c2836bb))
* **update-server:** Fix some issues with br update, test, fast flow ([#3352](https://github.com/opentrons/opentrons/issues/3352)) ([6e4d2f6](https://github.com/opentrons/opentrons/commit/6e4d2f6))


### Features

* **api:** Add Geometry Logic For Thermocycler Configurations ([#3266](https://github.com/opentrons/opentrons/issues/3266)) ([4d8e463](https://github.com/opentrons/opentrons/commit/4d8e463))
* **api:** add P10M 1.5 config data ([#3365](https://github.com/opentrons/opentrons/issues/3365)) ([1332f63](https://github.com/opentrons/opentrons/commit/1332f63))
* **api:** define & execute v3 json protocols ([#3312](https://github.com/opentrons/opentrons/issues/3312)) ([988407d](https://github.com/opentrons/opentrons/commit/988407d)), closes [#3110](https://github.com/opentrons/opentrons/issues/3110)
* **api:** publish pause and delay commands in python and JSON ([#3310](https://github.com/opentrons/opentrons/issues/3310)) ([5656d65](https://github.com/opentrons/opentrons/commit/5656d65)), closes [#3308](https://github.com/opentrons/opentrons/issues/3308)
* **api:** Set P10M1.5 pick up increment to 3mm ([#3374](https://github.com/opentrons/opentrons/issues/3374)) ([f5b63d0](https://github.com/opentrons/opentrons/commit/f5b63d0))
* **api:** validate JSON protocols before executing ([#3318](https://github.com/opentrons/opentrons/issues/3318)) ([9c15f7d](https://github.com/opentrons/opentrons/commit/9c15f7d)), closes [#3250](https://github.com/opentrons/opentrons/issues/3250)
* **api:** wire up TC deactivate, and add module cmd exec endpoint ([#3264](https://github.com/opentrons/opentrons/issues/3264)) ([483122a](https://github.com/opentrons/opentrons/commit/483122a)), closes [#2981](https://github.com/opentrons/opentrons/issues/2981)
* **app:** Enable adding manual robot IP addresses in app settings ([#3284](https://github.com/opentrons/opentrons/issues/3284)) ([c34fcfa](https://github.com/opentrons/opentrons/commit/c34fcfa)), closes [#2741](https://github.com/opentrons/opentrons/issues/2741)
* **components:** use transparent gray for button hover ([#3281](https://github.com/opentrons/opentrons/issues/3281)) ([b724151](https://github.com/opentrons/opentrons/commit/b724151))
* **protocol-designer:** show tooltips on disabled fields in Transfer form ([#3286](https://github.com/opentrons/opentrons/issues/3286)) ([a9cc612](https://github.com/opentrons/opentrons/commit/a9cc612)), closes [#3259](https://github.com/opentrons/opentrons/issues/3259)
* **shared-data:** update P300M 1.5 pick up current to 0.9 A ([#3355](https://github.com/opentrons/opentrons/issues/3355)) ([a2d9024](https://github.com/opentrons/opentrons/commit/a2d9024))
* **update-server:** add buildroot migration ([#3321](https://github.com/opentrons/opentrons/issues/3321)) ([76d6b28](https://github.com/opentrons/opentrons/commit/76d6b28)), closes [#2880](https://github.com/opentrons/opentrons/issues/2880) [#2881](https://github.com/opentrons/opentrons/issues/2881)
* **update-server:** Add SSH public key management for buildroot ([#3339](https://github.com/opentrons/opentrons/issues/3339)) ([ef02433](https://github.com/opentrons/opentrons/commit/ef02433)), closes [#3320](https://github.com/opentrons/opentrons/issues/3320)
* **update-server:** Set buildroot hostname ([#3356](https://github.com/opentrons/opentrons/issues/3356)) ([1addcf7](https://github.com/opentrons/opentrons/commit/1addcf7))


### Performance Improvements

* **protocol-designer:** avoid selector recomputation in step forms ([#3292](https://github.com/opentrons/opentrons/issues/3292)) ([41c40c5](https://github.com/opentrons/opentrons/commit/41c40c5))
* **protocol-designer:** fix selectors used by allSubsteps ([#3287](https://github.com/opentrons/opentrons/issues/3287)) ([54dfa53](https://github.com/opentrons/opentrons/commit/54dfa53))





<a name="3.8.1"></a>
## [3.8.1](https://github.com/opentrons/opentrons/compare/v3.8.0...v3.8.1) (2019-03-29)


### Bug Fixes

* **api:** Correctly migrate probe center settings ([#3246](https://github.com/opentrons/opentrons/issues/3246)) ([84d3b00](https://github.com/opentrons/opentrons/commit/84d3b00))
* **api:** simulate needs to set loglevel ([#3268](https://github.com/opentrons/opentrons/issues/3268)) ([37c00fb](https://github.com/opentrons/opentrons/commit/37c00fb))
* **api,shared-data:** Lowercase labware names and camelCase categories ([#3234](https://github.com/opentrons/opentrons/issues/3234)) ([55e332e](https://github.com/opentrons/opentrons/commit/55e332e)), closes [#3231](https://github.com/opentrons/opentrons/issues/3231)
* **app:** Fix modules not populating the modules card ([#3278](https://github.com/opentrons/opentrons/issues/3278)) ([1fd936d](https://github.com/opentrons/opentrons/commit/1fd936d))
* **components:** Revert addition of "sideEffects": false ([#3236](https://github.com/opentrons/opentrons/issues/3236)) ([4616504](https://github.com/opentrons/opentrons/commit/4616504))
* **protocol-designer:** do not create labware ids if can't create labware ([#3255](https://github.com/opentrons/opentrons/issues/3255)) ([916a10c](https://github.com/opentrons/opentrons/commit/916a10c)), closes [#3254](https://github.com/opentrons/opentrons/issues/3254)
* **shared-data:** Ensure all volumes are µL; remove displayLengthUnits ([#3262](https://github.com/opentrons/opentrons/issues/3262)) ([031f2b9](https://github.com/opentrons/opentrons/commit/031f2b9)), closes [#3240](https://github.com/opentrons/opentrons/issues/3240)
* **shared-data:** fix case of 'brand' text ([#3258](https://github.com/opentrons/opentrons/issues/3258)) ([3dbe35a](https://github.com/opentrons/opentrons/commit/3dbe35a))


### Features

* **api:** Add more pick up tip config elements to pipette config ([#3237](https://github.com/opentrons/opentrons/issues/3237)) ([f69da42](https://github.com/opentrons/opentrons/commit/f69da42))
* **api:** Add support for (p300m,p50m,p10s,p1000s)v1.5 ([#3265](https://github.com/opentrons/opentrons/issues/3265)) ([9dfc127](https://github.com/opentrons/opentrons/commit/9dfc127))
* **api:** Add support for p300s v1.5 ([#3276](https://github.com/opentrons/opentrons/issues/3276)) ([e4ca4ff](https://github.com/opentrons/opentrons/commit/e4ca4ff))
* **api:** add z margin override ([#3235](https://github.com/opentrons/opentrons/issues/3235)) ([341385c](https://github.com/opentrons/opentrons/commit/341385c))
* **api:** allow robot to discover thermocycler and return live data ([#3239](https://github.com/opentrons/opentrons/issues/3239)) ([34af269](https://github.com/opentrons/opentrons/commit/34af269)), closes [#2958](https://github.com/opentrons/opentrons/issues/2958)
* **api:** move-to-slot JSON protocol command ([#3242](https://github.com/opentrons/opentrons/issues/3242)) ([cef5123](https://github.com/opentrons/opentrons/commit/cef5123))
* **api:** Print out the runlog in the simulate script ([#3251](https://github.com/opentrons/opentrons/issues/3251)) ([73d755f](https://github.com/opentrons/opentrons/commit/73d755f))
* **protocol-designer:** assorted form tweaks ([#3260](https://github.com/opentrons/opentrons/issues/3260)) ([a14fca9](https://github.com/opentrons/opentrons/commit/a14fca9))
* **protocol-designer:** update mix form design ([#3247](https://github.com/opentrons/opentrons/issues/3247)) ([57ee363](https://github.com/opentrons/opentrons/commit/57ee363)), closes [#3141](https://github.com/opentrons/opentrons/issues/3141)
* **protocol-designer:** update pause form design ([#3257](https://github.com/opentrons/opentrons/issues/3257)) ([9bf5cad](https://github.com/opentrons/opentrons/commit/9bf5cad)), closes [#3142](https://github.com/opentrons/opentrons/issues/3142) [#3255](https://github.com/opentrons/opentrons/issues/3255)
* **protocol-designer:** update transfer form design ([#3221](https://github.com/opentrons/opentrons/issues/3221)) ([775ec4b](https://github.com/opentrons/opentrons/commit/775ec4b))
* **protocol-designer:** use file-saver to save protocols ([#3263](https://github.com/opentrons/opentrons/issues/3263)) ([56d4788](https://github.com/opentrons/opentrons/commit/56d4788))
* **protocol-designer:** warning/error redesign ([#3270](https://github.com/opentrons/opentrons/issues/3270)) ([51a6cc3](https://github.com/opentrons/opentrons/commit/51a6cc3))





<a name="3.8.0"></a>
# [3.8.0](https://github.com/opentrons/opentrons/compare/v3.7.0...v3.8.0) (2019-03-19)


### Bug Fixes

* **api:** Access wells in calibration so 1-well containers are ok ([#3187](https://github.com/opentrons/opentrons/issues/3187)) ([05ad4b1](https://github.com/opentrons/opentrons/commit/05ad4b1))
* **api:** force update tempdeck target temp cache ([#3223](https://github.com/opentrons/opentrons/issues/3223)) ([175461b](https://github.com/opentrons/opentrons/commit/175461b)), closes [#3218](https://github.com/opentrons/opentrons/issues/3218)
* **api:** cache modules in singleton for apiV1 protocols ([#3219](https://github.com/opentrons/opentrons/issues/3219)) ([058319f](https://github.com/opentrons/opentrons/commit/058319f)), closes [#3205](https://github.com/opentrons/opentrons/issues/3205)
* **api:** Clear globals in simulate script thing ([#3156](https://github.com/opentrons/opentrons/issues/3156)) ([58ddfb6](https://github.com/opentrons/opentrons/commit/58ddfb6))
* **api:** cli deck cal pipette control and tests ([#3222](https://github.com/opentrons/opentrons/issues/3222)) ([0e95e08](https://github.com/opentrons/opentrons/commit/0e95e08))
* **api:** Fix mistakenly-changed pick up current for p10s1.4 ([#3155](https://github.com/opentrons/opentrons/issues/3155)) ([7474752](https://github.com/opentrons/opentrons/commit/7474752))
* **api:** Fix the mount calibration pipette control ([#3228](https://github.com/opentrons/opentrons/issues/3228)) ([962b0a7](https://github.com/opentrons/opentrons/commit/962b0a7))
* **api:** Manually publish to broker in param-mangling commands ([#3159](https://github.com/opentrons/opentrons/issues/3159)) ([17e86bf](https://github.com/opentrons/opentrons/commit/17e86bf)), closes [#3105](https://github.com/opentrons/opentrons/issues/3105)
* **docs:** Catch some last api v4 references ([#3224](https://github.com/opentrons/opentrons/issues/3224)) ([f1940c6](https://github.com/opentrons/opentrons/commit/f1940c6))
* **docs:** Fix broken support link in docs ([#3230](https://github.com/opentrons/opentrons/issues/3230)) ([95663fe](https://github.com/opentrons/opentrons/commit/95663fe))
* **docs:** Fix typo and clarify intro in docs, deploy on edge ([#3154](https://github.com/opentrons/opentrons/issues/3154)) ([0e2c994](https://github.com/opentrons/opentrons/commit/0e2c994))
* **protocol-designer:** fix drop tip offset bug ([#3126](https://github.com/opentrons/opentrons/issues/3126)) ([6db63f4](https://github.com/opentrons/opentrons/commit/6db63f4)), closes [#3122](https://github.com/opentrons/opentrons/issues/3122) [#3123](https://github.com/opentrons/opentrons/issues/3123)
* **protocol-designer:** fix mistake with load file error reporting ([#3190](https://github.com/opentrons/opentrons/issues/3190)) ([3f648ad](https://github.com/opentrons/opentrons/commit/3f648ad)), closes [#3172](https://github.com/opentrons/opentrons/issues/3172)
* **protocol-designer:** fix mix disabled fields ([#3192](https://github.com/opentrons/opentrons/issues/3192)) ([51846d5](https://github.com/opentrons/opentrons/commit/51846d5)), closes [#3049](https://github.com/opentrons/opentrons/issues/3049)
* **protocol-designer:** fix move liquid tooltip; remove old unused tooltips ([#3147](https://github.com/opentrons/opentrons/issues/3147)) ([c1cc891](https://github.com/opentrons/opentrons/commit/c1cc891))
* **protocol-designer:** update disposal volume knowledge base link ([#3132](https://github.com/opentrons/opentrons/issues/3132)) ([1431cbd](https://github.com/opentrons/opentrons/commit/1431cbd)), closes [#3130](https://github.com/opentrons/opentrons/issues/3130)
* **shared-data:** fix y axis svg value for fixed trash ([#3151](https://github.com/opentrons/opentrons/issues/3151)) ([248f3ec](https://github.com/opentrons/opentrons/commit/248f3ec))


### Features

* **api:** Add interruptable poller to Thermocycler driver & API with lid open/close ([#3118](https://github.com/opentrons/opentrons/issues/3118)) ([b04add2](https://github.com/opentrons/opentrons/commit/b04add2))
* **api:** add pipette config endpoint ([#3128](https://github.com/opentrons/opentrons/issues/3128)) ([b6b958b](https://github.com/opentrons/opentrons/commit/b6b958b))
* **api:** Add set_temperature command to API and driver ([#3152](https://github.com/opentrons/opentrons/issues/3152)) ([bde3b1c](https://github.com/opentrons/opentrons/commit/bde3b1c)), closes [#2979](https://github.com/opentrons/opentrons/issues/2979)
* **api:** add udev rule for thermocycler board, include rule file in makefile ([#3203](https://github.com/opentrons/opentrons/issues/3203)) ([d47fee0](https://github.com/opentrons/opentrons/commit/d47fee0)), closes [#3144](https://github.com/opentrons/opentrons/issues/3144)
* **app:** Enable pipette config modal and form ([#3202](https://github.com/opentrons/opentrons/issues/3202)) ([49c1fe9](https://github.com/opentrons/opentrons/commit/49c1fe9)), closes [#3112](https://github.com/opentrons/opentrons/issues/3112)
* **protocol-designer:** add 404 redirect page ([#3193](https://github.com/opentrons/opentrons/issues/3193)) ([10658b8](https://github.com/opentrons/opentrons/commit/10658b8)), closes [#3167](https://github.com/opentrons/opentrons/issues/3167)
* **protocol-designer:** add change tip and reasons for disabled path ([#3139](https://github.com/opentrons/opentrons/issues/3139)) ([6c3f0f0](https://github.com/opentrons/opentrons/commit/6c3f0f0)), closes [#3137](https://github.com/opentrons/opentrons/issues/3137)
* **protocol-designer:** add emailListName param to confirmEmail call ([#3174](https://github.com/opentrons/opentrons/issues/3174)) ([af40d4b](https://github.com/opentrons/opentrons/commit/af40d4b)), closes [#3166](https://github.com/opentrons/opentrons/issues/3166)
* **protocol-designer:** add favicon ([#3176](https://github.com/opentrons/opentrons/issues/3176)) ([0410731](https://github.com/opentrons/opentrons/commit/0410731)), closes [#3171](https://github.com/opentrons/opentrons/issues/3171)
* **protocol-designer:** auto-select well of single well labware ([#3157](https://github.com/opentrons/opentrons/issues/3157)) ([8424c15](https://github.com/opentrons/opentrons/commit/8424c15)), closes [#3146](https://github.com/opentrons/opentrons/issues/3146)
* **protocol-designer:** expose current version in settings page ([#3135](https://github.com/opentrons/opentrons/issues/3135)) ([ce30ab6](https://github.com/opentrons/opentrons/commit/ce30ab6)), closes [#3114](https://github.com/opentrons/opentrons/issues/3114)
* **protocol-designer:** gate entry by user identity ([#3153](https://github.com/opentrons/opentrons/issues/3153)) ([1a257b2](https://github.com/opentrons/opentrons/commit/1a257b2)), closes [#3149](https://github.com/opentrons/opentrons/issues/3149) [#3150](https://github.com/opentrons/opentrons/issues/3150)
* **protocol-designer:** hash favicon ([#3184](https://github.com/opentrons/opentrons/issues/3184)) ([153c596](https://github.com/opentrons/opentrons/commit/153c596))
* **protocol-designer:** hide GateModal in dev by default ([#3210](https://github.com/opentrons/opentrons/issues/3210)) ([3b01ee8](https://github.com/opentrons/opentrons/commit/3b01ee8)), closes [#3189](https://github.com/opentrons/opentrons/issues/3189)
* **protocol-designer:** pd version metadata in code and analytics  ([#3178](https://github.com/opentrons/opentrons/issues/3178)) ([9319198](https://github.com/opentrons/opentrons/commit/9319198))
* **protocol-designer:** point to staging or prod resources accordingly ([#3181](https://github.com/opentrons/opentrons/issues/3181)) ([8a2befc](https://github.com/opentrons/opentrons/commit/8a2befc)), closes [#3180](https://github.com/opentrons/opentrons/issues/3180)
* **protocol-designer:** show info modal when file has been migrated ([#3148](https://github.com/opentrons/opentrons/issues/3148)) ([1150068](https://github.com/opentrons/opentrons/commit/1150068)), closes [#3057](https://github.com/opentrons/opentrons/issues/3057)
* **protocol-designer:** update title and add beta tag ([#3131](https://github.com/opentrons/opentrons/issues/3131)) ([09322d7](https://github.com/opentrons/opentrons/commit/09322d7)), closes [#3127](https://github.com/opentrons/opentrons/issues/3127)





<a name="3.7.0"></a>
# [3.7.0](https://github.com/Opentrons/opentrons/compare/v3.6.5...v3.7.0) (2019-02-19)


### Bug Fixes

* **api:** Add gpio.set_button_light() to QC tools scripts, so they work with 3.6 changes ([#2890](https://github.com/Opentrons/opentrons/issues/2890)) ([aca6931](https://github.com/Opentrons/opentrons/commit/aca6931))
* **api:** api2: Do not do a "safety move" when homing the plunger ([#2965](https://github.com/Opentrons/opentrons/issues/2965)) ([28edc68](https://github.com/Opentrons/opentrons/commit/28edc68))
* **api:** Avoid resource contention on smoothie serial during boot ([#3035](https://github.com/Opentrons/opentrons/issues/3035)) ([3f9a4e3](https://github.com/Opentrons/opentrons/commit/3f9a4e3))
* **api:** Correctly format acceleration from settings as dict ([#2964](https://github.com/Opentrons/opentrons/issues/2964)) ([45a49e0](https://github.com/Opentrons/opentrons/commit/45a49e0))
* **api:** Flush and sync config file writes immediately ([#2899](https://github.com/Opentrons/opentrons/issues/2899)) ([3905e72](https://github.com/Opentrons/opentrons/commit/3905e72))
* **api:** use twine directly for pypi deploys ([ad98402](https://github.com/Opentrons/opentrons/commit/ad98402))
* **components:** do not convert humanized labware type decimal to space ([#3031](https://github.com/Opentrons/opentrons/issues/3031)) ([c9aba2f](https://github.com/Opentrons/opentrons/commit/c9aba2f)), closes [#2766](https://github.com/Opentrons/opentrons/issues/2766)
* **components:** remove padding from empty AlertItems ([#2891](https://github.com/Opentrons/opentrons/issues/2891)) ([7fcd6fb](https://github.com/Opentrons/opentrons/commit/7fcd6fb))
* **docs:** Fix broken support article link ([#2850](https://github.com/Opentrons/opentrons/issues/2850)) ([819ba16](https://github.com/Opentrons/opentrons/commit/819ba16))
* **protocol-designer:** fix bug where 'default-values' shape did not conform to JSON schema ([#3032](https://github.com/Opentrons/opentrons/issues/3032)) ([6c86496](https://github.com/Opentrons/opentrons/commit/6c86496))
* **protocol-designer:** fix bug where auto-populated fields aren't pristine ([#2884](https://github.com/Opentrons/opentrons/issues/2884)) ([e2d2160](https://github.com/Opentrons/opentrons/commit/e2d2160)), closes [#2883](https://github.com/Opentrons/opentrons/issues/2883)
* **protocol-designer:** fix dropdown font-size for pipettes and tips ([#2991](https://github.com/Opentrons/opentrons/issues/2991)) ([77ba111](https://github.com/Opentrons/opentrons/commit/77ba111))
* **protocol-designer:** fix inner mix inside moveLiquid form ([#3050](https://github.com/Opentrons/opentrons/issues/3050)) ([886bd68](https://github.com/Opentrons/opentrons/commit/886bd68)), closes [#3048](https://github.com/Opentrons/opentrons/issues/3048)
* **protocol-designer:** fix liquid placement modal overlay height ([#2819](https://github.com/Opentrons/opentrons/issues/2819)) ([318ffa3](https://github.com/Opentrons/opentrons/commit/318ffa3)), closes [#2203](https://github.com/Opentrons/opentrons/issues/2203)
* **protocol-designer:** fix well order modal height; remove unused .labware_field class ([#3024](https://github.com/Opentrons/opentrons/issues/3024)) ([c4a5f88](https://github.com/Opentrons/opentrons/commit/c4a5f88))
* **protocol-designer:** make rename labware set correct key ([#2927](https://github.com/Opentrons/opentrons/issues/2927)) ([a72822f](https://github.com/Opentrons/opentrons/commit/a72822f)), closes [#2923](https://github.com/Opentrons/opentrons/issues/2923)
* **protocol-designer:** migrate old and new step names and descriptions ([#2888](https://github.com/Opentrons/opentrons/issues/2888)) ([16c1887](https://github.com/Opentrons/opentrons/commit/16c1887))
* **protocol-designer:** resolve bug where PD failed to save correct labware slots ([#2967](https://github.com/Opentrons/opentrons/issues/2967)) ([1179d04](https://github.com/Opentrons/opentrons/commit/1179d04))
* **protocol-designer:** restrict move labware to manual intervention step ([#2897](https://github.com/Opentrons/opentrons/issues/2897)) ([1fdbcac](https://github.com/Opentrons/opentrons/commit/1fdbcac))
* **protocol-designer:** revert changes to source_well / dest_well constants ([#2931](https://github.com/Opentrons/opentrons/issues/2931)) ([bb630f2](https://github.com/Opentrons/opentrons/commit/bb630f2))
* **shared-data:** add tests to ensure filename matches name/loadName ([#2849](https://github.com/Opentrons/opentrons/issues/2849)) ([e821079](https://github.com/Opentrons/opentrons/commit/e821079))
* **shared-data:** fix irregular labware generator ([#2855](https://github.com/Opentrons/opentrons/issues/2855)) ([f405c8e](https://github.com/Opentrons/opentrons/commit/f405c8e))


### Features

* **api:** Add ability to use papi2 in protocol ([#2803](https://github.com/Opentrons/opentrons/issues/2803)) ([6bbb83c](https://github.com/Opentrons/opentrons/commit/6bbb83c))
* **api:** Add calibrate labware and tip probe with new protocol API ([#2846](https://github.com/Opentrons/opentrons/issues/2846)) ([3264cff](https://github.com/Opentrons/opentrons/commit/3264cff)), closes [#2719](https://github.com/Opentrons/opentrons/issues/2719)
* **api:** Add json protocol execution to new protocol API ([#2854](https://github.com/Opentrons/opentrons/issues/2854)) ([48bbcb1](https://github.com/Opentrons/opentrons/commit/48bbcb1)), closes [#2248](https://github.com/Opentrons/opentrons/issues/2248)
* **api:** Add set_temperature command to Thermocycler ([#3017](https://github.com/Opentrons/opentrons/issues/3017)) ([e78238d](https://github.com/Opentrons/opentrons/commit/e78238d)), closes [#2960](https://github.com/Opentrons/opentrons/issues/2960)
* **api:** Add skeleton of Thermocycler API class ([#3015](https://github.com/Opentrons/opentrons/issues/3015)) ([b42f318](https://github.com/Opentrons/opentrons/commit/b42f318)), closes [#2992](https://github.com/Opentrons/opentrons/issues/2992)
* **api:** add thermocycler driver connect/disconnect methods ([#2996](https://github.com/Opentrons/opentrons/issues/2996)) ([6d3e41e](https://github.com/Opentrons/opentrons/commit/6d3e41e)), closes [#2984](https://github.com/Opentrons/opentrons/issues/2984)
* **api:** Allow advanced settings to be null (unset) ([#3029](https://github.com/Opentrons/opentrons/issues/3029)) ([256d736](https://github.com/Opentrons/opentrons/commit/256d736)), closes [#3026](https://github.com/Opentrons/opentrons/issues/3026)
* **api:** api2: Move multichannel center for certain labwares ([#2900](https://github.com/Opentrons/opentrons/issues/2900)) ([dfb60a5](https://github.com/Opentrons/opentrons/commit/dfb60a5)), closes [#2892](https://github.com/Opentrons/opentrons/issues/2892)
* **api:** decrease plunger acceleration and add drop tip speed to config ([#2904](https://github.com/Opentrons/opentrons/issues/2904)) ([dc64b0d](https://github.com/Opentrons/opentrons/commit/dc64b0d))
* **api:** Limit config settings to single directory ([#3000](https://github.com/Opentrons/opentrons/issues/3000)) ([a52e6f0](https://github.com/Opentrons/opentrons/commit/a52e6f0)), closes [#2970](https://github.com/Opentrons/opentrons/issues/2970) [#2969](https://github.com/Opentrons/opentrons/issues/2969)
* **api:** Load and save per-pipette-id config overrides ([#3018](https://github.com/Opentrons/opentrons/issues/3018)) ([9459010](https://github.com/Opentrons/opentrons/commit/9459010)), closes [#2936](https://github.com/Opentrons/opentrons/issues/2936)
* **api:** pipette config plunger position ([#2999](https://github.com/Opentrons/opentrons/issues/2999)) ([cbd559a](https://github.com/Opentrons/opentrons/commit/cbd559a))
* **api:** top-level simulate script and entrypoint ([#3005](https://github.com/Opentrons/opentrons/issues/3005)) ([5969748](https://github.com/Opentrons/opentrons/commit/5969748)), closes [#2971](https://github.com/Opentrons/opentrons/issues/2971)
* **app:** Add robot pipettes, versions, FFs to mixpanel and intercom ([#3059](https://github.com/Opentrons/opentrons/issues/3059)) ([de4a15f](https://github.com/Opentrons/opentrons/commit/de4a15f)), closes [#3009](https://github.com/Opentrons/opentrons/issues/3009) [#3010](https://github.com/Opentrons/opentrons/issues/3010)
* **app:** Configure analytics to send Python and JSON protocol info ([#2946](https://github.com/Opentrons/opentrons/issues/2946)) ([22f419d](https://github.com/Opentrons/opentrons/commit/22f419d)), closes [#2615](https://github.com/Opentrons/opentrons/issues/2615) [#2618](https://github.com/Opentrons/opentrons/issues/2618)
* **app:** Enable new app update modal ([#3044](https://github.com/Opentrons/opentrons/issues/3044)) ([d36071e](https://github.com/Opentrons/opentrons/commit/d36071e))
* **app:** Replace P10 update warning with one for all pipettes ([#3043](https://github.com/Opentrons/opentrons/issues/3043)) ([9bd3eb2](https://github.com/Opentrons/opentrons/commit/9bd3eb2)), closes [#3011](https://github.com/Opentrons/opentrons/issues/3011)
* **protocol-designer:** add animated path field tooltips ([#3004](https://github.com/Opentrons/opentrons/issues/3004)) ([3dec97a](https://github.com/Opentrons/opentrons/commit/3dec97a)), closes [#2914](https://github.com/Opentrons/opentrons/issues/2914)
* **protocol-designer:** add perSource/perDest changeTip options to transfer.js ([#2913](https://github.com/Opentrons/opentrons/issues/2913)) ([0224a8f](https://github.com/Opentrons/opentrons/commit/0224a8f))
* **protocol-designer:** avoid aspirate/dispense below pipette min volume ([#2804](https://github.com/Opentrons/opentrons/issues/2804)) ([2430e09](https://github.com/Opentrons/opentrons/commit/2430e09)), closes [#1603](https://github.com/Opentrons/opentrons/issues/1603)
* **protocol-designer:** build up the ui for new step form ([#2949](https://github.com/Opentrons/opentrons/issues/2949)) ([7c3b553](https://github.com/Opentrons/opentrons/commit/7c3b553))
* **protocol-designer:** change pipette<>labware incompatible copy ([#2989](https://github.com/Opentrons/opentrons/issues/2989)) ([71669b0](https://github.com/Opentrons/opentrons/commit/71669b0)), closes [#2674](https://github.com/Opentrons/opentrons/issues/2674)
* **protocol-designer:** disabled distribute's fallback to transfer ([#2998](https://github.com/Opentrons/opentrons/issues/2998)) ([784c587](https://github.com/Opentrons/opentrons/commit/784c587)), closes [#2921](https://github.com/Opentrons/opentrons/issues/2921)
* **protocol-designer:** drag and drop to move labware, duplicate ([#2857](https://github.com/Opentrons/opentrons/issues/2857)) ([44e449a](https://github.com/Opentrons/opentrons/commit/44e449a))
* **protocol-designer:** hook up flexible step to handleFormChange and gen commands! ([#2985](https://github.com/Opentrons/opentrons/issues/2985)) ([2cad201](https://github.com/Opentrons/opentrons/commit/2cad201))
* **protocol-designer:** implement form-level field disabling in new form ([#2978](https://github.com/Opentrons/opentrons/issues/2978)) ([ae72b9f](https://github.com/Opentrons/opentrons/commit/ae72b9f))
* **protocol-designer:** implement handleFormChangeMoveLiquid ([#2947](https://github.com/Opentrons/opentrons/issues/2947)) ([c32d700](https://github.com/Opentrons/opentrons/commit/c32d700))
* **protocol-designer:** implement moveLiquidFormToArgs ([#2908](https://github.com/Opentrons/opentrons/issues/2908)) ([147f1cd](https://github.com/Opentrons/opentrons/commit/147f1cd)), closes [#2906](https://github.com/Opentrons/opentrons/issues/2906)
* **protocol-designer:** improve ux behavior of disposal volume ([#3021](https://github.com/Opentrons/opentrons/issues/3021)) ([e2b3c48](https://github.com/Opentrons/opentrons/commit/e2b3c48))
* **protocol-designer:** migration of mix form and migration tests ([#3034](https://github.com/Opentrons/opentrons/issues/3034)) ([e18ac3e](https://github.com/Opentrons/opentrons/commit/e18ac3e))
* **protocol-designer:** migration version and tcd to flexible steps ([#3002](https://github.com/Opentrons/opentrons/issues/3002)) ([316643b](https://github.com/Opentrons/opentrons/commit/316643b)), closes [#2917](https://github.com/Opentrons/opentrons/issues/2917)
* **protocol-designer:** new placeholder form for moveLiquid stepType ([#2928](https://github.com/Opentrons/opentrons/issues/2928)) ([fc133ae](https://github.com/Opentrons/opentrons/commit/fc133ae))
* **protocol-designer:** polish up new transfer form layout and styling ([#2983](https://github.com/Opentrons/opentrons/issues/2983)) ([b00166b](https://github.com/Opentrons/opentrons/commit/b00166b))
* **protocol-designer:** separate field processing from casting ([#2993](https://github.com/Opentrons/opentrons/issues/2993)) ([e1d5aca](https://github.com/Opentrons/opentrons/commit/e1d5aca))
* **protocol-designer:** use SelectField for change tip ([#3001](https://github.com/Opentrons/opentrons/issues/3001)) ([b477f34](https://github.com/Opentrons/opentrons/commit/b477f34)), closes [#2915](https://github.com/Opentrons/opentrons/issues/2915)


### Performance Improvements

* **api:** New aspiration functions for all pipettes ([#3014](https://github.com/Opentrons/opentrons/issues/3014)) ([ae850ce](https://github.com/Opentrons/opentrons/commit/ae850ce)), closes [#3012](https://github.com/Opentrons/opentrons/issues/3012)
* **protocol-designer:** optimize substep components to render less often ([#3007](https://github.com/Opentrons/opentrons/issues/3007)) ([5b2ed7d](https://github.com/Opentrons/opentrons/commit/5b2ed7d))





<a name="3.6.5"></a>
## [3.6.5](https://github.com/opentrons/opentrons/compare/v3.6.4...v3.6.5) (2018-12-18)


### Bug Fixes

* **api:** Fix extract metadata ([#2833](https://github.com/opentrons/opentrons/issues/2833)) ([0930915](https://github.com/opentrons/opentrons/commit/0930915))
* **api:** Remove the intermingled old aspirate function from p10s ([#2839](https://github.com/opentrons/opentrons/issues/2839)) ([696184c](https://github.com/opentrons/opentrons/commit/696184c))
* **protocol-designer:** ensure pipettes are removed from step forms when nuked ([#2813](https://github.com/opentrons/opentrons/issues/2813)) ([46fee8b](https://github.com/opentrons/opentrons/commit/46fee8b))


### Features

* **protocol-designer:** display timeline and form alerts in same fashion ([#2817](https://github.com/opentrons/opentrons/issues/2817)) ([e27d2ae](https://github.com/opentrons/opentrons/commit/e27d2ae)), closes [#1990](https://github.com/opentrons/opentrons/issues/1990)





<a name="3.6.4"></a>
## [3.6.4](https://github.com/opentrons/opentrons/compare/v3.6.3...v3.6.4) (2018-12-17)


### Bug Fixes

* **protocol-designer:** fix bug with null distribute step ([#2826](https://github.com/opentrons/opentrons/issues/2826)) ([3eecb29](https://github.com/opentrons/opentrons/commit/3eecb29))


### Features

* **api:** Adds optional arg to QC scripts to specify UART port ([#2825](https://github.com/opentrons/opentrons/issues/2825)) ([5d622ad](https://github.com/opentrons/opentrons/commit/5d622ad))


### Performance Improvements

* **api:** Update P1000S aspirate function ([#2830](https://github.com/opentrons/opentrons/issues/2830)) ([ca65283](https://github.com/opentrons/opentrons/commit/ca65283))





<a name="3.6.3"></a>
## [3.6.3](https://github.com/Opentrons/opentrons/compare/v3.6.2...v3.6.3) (2018-12-13)


### Bug Fixes

* **api:** raise p300s droptip pose by 1mm to increase QC yield ([#2808](https://github.com/Opentrons/opentrons/issues/2808)) ([40759b2](https://github.com/Opentrons/opentrons/commit/40759b2))


### Features

* **app:** Add opt-in modal for new p10s ([#2816](https://github.com/Opentrons/opentrons/issues/2816)) ([cd69e19](https://github.com/Opentrons/opentrons/commit/cd69e19)), closes [#2793](https://github.com/Opentrons/opentrons/issues/2793)
* **app:** Display Python protocol metadata in the app ([#2805](https://github.com/Opentrons/opentrons/issues/2805)) ([f854953](https://github.com/Opentrons/opentrons/commit/f854953)), closes [#2617](https://github.com/Opentrons/opentrons/issues/2617)
* **app:** Implement clearer robot server upgrade/downgrade information ([#2807](https://github.com/Opentrons/opentrons/issues/2807)) ([d37e3aa](https://github.com/Opentrons/opentrons/commit/d37e3aa)), closes [#2401](https://github.com/Opentrons/opentrons/issues/2401)





<a name="3.6.2"></a>
## [3.6.2](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.2) (2018-12-11)


### Bug Fixes

* **api:** Do not overwrite settings every time we get config files ([#2802](https://github.com/Opentrons/opentrons/issues/2802)) ([c679c5c](https://github.com/Opentrons/opentrons/commit/c679c5c))
* **app:** Show main nav notification dot for updatable connected robot ([#2801](https://github.com/Opentrons/opentrons/issues/2801)) ([6a67c86](https://github.com/Opentrons/opentrons/commit/6a67c86)), closes [#2642](https://github.com/Opentrons/opentrons/issues/2642)
* **protocol-designer:** finish implementing flow rate in PD ([#2782](https://github.com/Opentrons/opentrons/issues/2782)) ([fda0920](https://github.com/Opentrons/opentrons/commit/fda0920)), closes [#2773](https://github.com/Opentrons/opentrons/issues/2773)
* **protocol-designer:** fix bug where new protocol w 1 pipette deleted fixedTrash ([#2797](https://github.com/Opentrons/opentrons/issues/2797)) ([2052f49](https://github.com/Opentrons/opentrons/commit/2052f49))
* **protocol-designer:** fix changeTip once bug in distribute step ([#2784](https://github.com/Opentrons/opentrons/issues/2784)) ([64111f6](https://github.com/Opentrons/opentrons/commit/64111f6)), closes [#2748](https://github.com/Opentrons/opentrons/issues/2748)
* **protocol-designer:** fix distribute aspirate touchtip offset ([#2795](https://github.com/Opentrons/opentrons/issues/2795)) ([c9a4e3f](https://github.com/Opentrons/opentrons/commit/c9a4e3f))
* **protocol-designer:** fix missing disposal volume in new distribute forms ([#2733](https://github.com/Opentrons/opentrons/issues/2733)) ([5657164](https://github.com/Opentrons/opentrons/commit/5657164)), closes [#2705](https://github.com/Opentrons/opentrons/issues/2705)
* **protocol-designer:** fix regression of [#2370](https://github.com/Opentrons/opentrons/issues/2370) ([#2791](https://github.com/Opentrons/opentrons/issues/2791)) ([8a4f470](https://github.com/Opentrons/opentrons/commit/8a4f470))
* **protocol-designer:** fix swap pipettes button dispatch ([#2798](https://github.com/Opentrons/opentrons/issues/2798)) ([68c16c2](https://github.com/Opentrons/opentrons/commit/68c16c2))
* **protocol-designer:** fix when add liquid hint is shown ([#2787](https://github.com/Opentrons/opentrons/issues/2787)) ([eb59fec](https://github.com/Opentrons/opentrons/commit/eb59fec)), closes [#2777](https://github.com/Opentrons/opentrons/issues/2777)


### Features

* **api:** Add metadata to session for Python protocols ([#2799](https://github.com/Opentrons/opentrons/issues/2799)) ([1da19bb](https://github.com/Opentrons/opentrons/commit/1da19bb)), closes [#2616](https://github.com/Opentrons/opentrons/issues/2616)
* **api:** p10 behavior feature flag ([#2794](https://github.com/Opentrons/opentrons/issues/2794)) ([c468b06](https://github.com/Opentrons/opentrons/commit/c468b06)), closes [#2792](https://github.com/Opentrons/opentrons/issues/2792)
* **protocol-designer:** allow user to re-enable dismissed hints ([#2726](https://github.com/Opentrons/opentrons/issues/2726)) ([af52d1e](https://github.com/Opentrons/opentrons/commit/af52d1e)), closes [#2652](https://github.com/Opentrons/opentrons/issues/2652)
* **protocol-designer:** drag and drop step reordering ([#2714](https://github.com/Opentrons/opentrons/issues/2714)) ([13d6fe3](https://github.com/Opentrons/opentrons/commit/13d6fe3)), closes [#2654](https://github.com/Opentrons/opentrons/issues/2654)
* **protocol-designer:** enable sharing tip racks between pipettes ([#2753](https://github.com/Opentrons/opentrons/issues/2753)) ([45db100](https://github.com/Opentrons/opentrons/commit/45db100))
* **protocol-designer:** highlight tips per substep ([#2716](https://github.com/Opentrons/opentrons/issues/2716)) ([eb2c2ce](https://github.com/Opentrons/opentrons/commit/eb2c2ce)), closes [#2537](https://github.com/Opentrons/opentrons/issues/2537)
* **protocol-designer:** new protocol modal defaults and visual updates ([#2739](https://github.com/Opentrons/opentrons/issues/2739)) ([333ad5a](https://github.com/Opentrons/opentrons/commit/333ad5a)), closes [#2721](https://github.com/Opentrons/opentrons/issues/2721)
* **protocol-designer:** place tipracks on protocol creation ([#2750](https://github.com/Opentrons/opentrons/issues/2750)) ([a110a8d](https://github.com/Opentrons/opentrons/commit/a110a8d)), closes [#1327](https://github.com/Opentrons/opentrons/issues/1327)
* **protocol-designer:** remove delay from advanced settings of all step types ([#2731](https://github.com/Opentrons/opentrons/issues/2731)) ([b26abdd](https://github.com/Opentrons/opentrons/commit/b26abdd)), closes [#2579](https://github.com/Opentrons/opentrons/issues/2579)
* **protocol-designer:** remove option of tiprack-1000ul-chem from pd ([#2745](https://github.com/Opentrons/opentrons/issues/2745)) ([3d5f276](https://github.com/Opentrons/opentrons/commit/3d5f276))
* **protocol-designer:** scroll to top of page when step created/selected ([#2785](https://github.com/Opentrons/opentrons/issues/2785)) ([8d91f8a](https://github.com/Opentrons/opentrons/commit/8d91f8a))
* **protocol-designer:** show file created and modified date ([#2754](https://github.com/Opentrons/opentrons/issues/2754)) ([7fe3f0f](https://github.com/Opentrons/opentrons/commit/7fe3f0f)), closes [#1623](https://github.com/Opentrons/opentrons/issues/1623)
* **protocol-designer:** standardize blowout and disposal volume destinations ([#2732](https://github.com/Opentrons/opentrons/issues/2732)) ([586f045](https://github.com/Opentrons/opentrons/commit/586f045)), closes [#1989](https://github.com/Opentrons/opentrons/issues/1989)
* **protocol-designer:** use pipette min vol as default/recommended disposal volume ([#2788](https://github.com/Opentrons/opentrons/issues/2788)) ([2276619](https://github.com/Opentrons/opentrons/commit/2276619)), closes [#2777](https://github.com/Opentrons/opentrons/issues/2777)
* **shared-data:** Add more new labware definitions to shared-data ([#2703](https://github.com/Opentrons/opentrons/issues/2703)) ([9737196](https://github.com/Opentrons/opentrons/commit/9737196))





<a name="3.6.1"></a>
## [3.6.1](https://github.com/Opentrons/opentrons/compare/v3.6.0...v3.6.1) (2018-12-05)


### Bug Fixes

* **api:** Fix bad P10S config causing under-aspirations ([#2774](https://github.com/Opentrons/opentrons/issues/2774)) ([9c5e0a2](https://github.com/Opentrons/opentrons/commit/9c5e0a2))
* **protocol-designer:** fix missing disposal volume in new distribute forms ([#2733](https://github.com/Opentrons/opentrons/issues/2733)) ([5657164](https://github.com/Opentrons/opentrons/commit/5657164)), closes [#2705](https://github.com/Opentrons/opentrons/issues/2705)


### Features

* **protocol-designer:** allow user to re-enable dismissed hints ([#2726](https://github.com/Opentrons/opentrons/issues/2726)) ([af52d1e](https://github.com/Opentrons/opentrons/commit/af52d1e)), closes [#2652](https://github.com/Opentrons/opentrons/issues/2652)
* **protocol-designer:** drag and drop step reordering ([#2714](https://github.com/Opentrons/opentrons/issues/2714)) ([13d6fe3](https://github.com/Opentrons/opentrons/commit/13d6fe3)), closes [#2654](https://github.com/Opentrons/opentrons/issues/2654)
* **protocol-designer:** highlight tips per substep ([#2716](https://github.com/Opentrons/opentrons/issues/2716)) ([eb2c2ce](https://github.com/Opentrons/opentrons/commit/eb2c2ce)), closes [#2537](https://github.com/Opentrons/opentrons/issues/2537)
* **protocol-designer:** new protocol modal defaults and visual updates ([#2739](https://github.com/Opentrons/opentrons/issues/2739)) ([333ad5a](https://github.com/Opentrons/opentrons/commit/333ad5a)), closes [#2721](https://github.com/Opentrons/opentrons/issues/2721)
* **protocol-designer:** place tipracks on protocol creation ([#2750](https://github.com/Opentrons/opentrons/issues/2750)) ([a110a8d](https://github.com/Opentrons/opentrons/commit/a110a8d)), closes [#1327](https://github.com/Opentrons/opentrons/issues/1327)
* **protocol-designer:** remove delay from advanced settings of all step types ([#2731](https://github.com/Opentrons/opentrons/issues/2731)) ([b26abdd](https://github.com/Opentrons/opentrons/commit/b26abdd)), closes [#2579](https://github.com/Opentrons/opentrons/issues/2579)
* **protocol-designer:** remove option of tiprack-1000ul-chem from pd ([#2745](https://github.com/Opentrons/opentrons/issues/2745)) ([3d5f276](https://github.com/Opentrons/opentrons/commit/3d5f276))





<a name="3.6.0"></a>
# [3.6.0](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.1...v3.6.0) (2018-11-29)


### Bug Fixes

* **api:** Fix the flaky tempdeck test ([#2725](https://github.com/Opentrons/opentrons/issues/2725)) ([f721163](https://github.com/Opentrons/opentrons/commit/f721163))
* **shared-data:** fix total-liquid-volume of opentrons-tuberack-50ml ([#2744](https://github.com/Opentrons/opentrons/issues/2744)) ([aef8cc8](https://github.com/Opentrons/opentrons/commit/aef8cc8)), closes [#2743](https://github.com/Opentrons/opentrons/issues/2743)


### Features

* **protocol-designer:** add tooltip to advanced settings icon ([#2727](https://github.com/Opentrons/opentrons/issues/2727)) ([0deb6b7](https://github.com/Opentrons/opentrons/commit/0deb6b7)), closes [#2706](https://github.com/Opentrons/opentrons/issues/2706)
* **protocol-designer:** make multichannel substeps collapsed by default ([#2729](https://github.com/Opentrons/opentrons/issues/2729)) ([b419a72](https://github.com/Opentrons/opentrons/commit/b419a72)), closes [#2678](https://github.com/Opentrons/opentrons/issues/2678)
* **protocol-designer:** remove label from 200ul/300ul tiprack image ([#2722](https://github.com/Opentrons/opentrons/issues/2722)) ([fe5cf6a](https://github.com/Opentrons/opentrons/commit/fe5cf6a)), closes [#2704](https://github.com/Opentrons/opentrons/issues/2704)





<a name="3.6.0-beta.1"></a>
# [3.6.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.6.0-beta.0...v3.6.0-beta.1) (2018-11-27)


### Bug Fixes

* **api:** re-position p1000 droptip/blowout positions ([#2681](https://github.com/Opentrons/opentrons/issues/2681)) ([f0cf01b](https://github.com/Opentrons/opentrons/commit/f0cf01b))
* **protocol-designer:** de-hydrate disposal and blowout labware in st… ([#2669](https://github.com/Opentrons/opentrons/issues/2669)) ([b6246b2](https://github.com/Opentrons/opentrons/commit/b6246b2))
* **protocol-designer:** well selection modal refresh on step change ([#2671](https://github.com/Opentrons/opentrons/issues/2671)) ([941916f](https://github.com/Opentrons/opentrons/commit/941916f))


### Features

* **api:** Add 1.5ml tuberack to old labware definition section ([#2679](https://github.com/Opentrons/opentrons/issues/2679)) ([2739038](https://github.com/Opentrons/opentrons/commit/2739038))
* **api:** Adds pipette models v1.4 to robot config ([#2689](https://github.com/Opentrons/opentrons/issues/2689)) ([fd9c38a](https://github.com/Opentrons/opentrons/commit/fd9c38a))
* **protocol-designer:** allow user to set touch-tip offset ([#2691](https://github.com/Opentrons/opentrons/issues/2691)) ([d5b7d8a](https://github.com/Opentrons/opentrons/commit/d5b7d8a)), closes [#2540](https://github.com/Opentrons/opentrons/issues/2540)
* **protocol-designer:** disambiguate left/right pipette names when they match ([#2698](https://github.com/Opentrons/opentrons/issues/2698)) ([2f43a0e](https://github.com/Opentrons/opentrons/commit/2f43a0e)), closes [#2078](https://github.com/Opentrons/opentrons/issues/2078)
* **protocol-designer:** disconnect well selection modal from hovered step state ([#2662](https://github.com/Opentrons/opentrons/issues/2662)) ([973a8a5](https://github.com/Opentrons/opentrons/commit/973a8a5)), closes [#2558](https://github.com/Opentrons/opentrons/issues/2558)
* **protocol-designer:** liquid placement modal performance boost ([#2661](https://github.com/Opentrons/opentrons/issues/2661)) ([ecc8569](https://github.com/Opentrons/opentrons/commit/ecc8569)), closes [#2557](https://github.com/Opentrons/opentrons/issues/2557)
* **protocol-designer:** make settings tab always active ([#2700](https://github.com/Opentrons/opentrons/issues/2700)) ([036e2ee](https://github.com/Opentrons/opentrons/commit/036e2ee)), closes [#2697](https://github.com/Opentrons/opentrons/issues/2697)
* **protocol-designer:** use tip max vol, not pipette max vol ([#2656](https://github.com/Opentrons/opentrons/issues/2656)) ([418665d](https://github.com/Opentrons/opentrons/commit/418665d)), closes [#2160](https://github.com/Opentrons/opentrons/issues/2160)


### Performance Improvements

* **api:** Decrease plunger motor max speed by 20% ([#2682](https://github.com/Opentrons/opentrons/issues/2682)) ([f8b7ccf](https://github.com/Opentrons/opentrons/commit/f8b7ccf))





<a name="3.6.0-beta.0"></a>
# [3.6.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.5.1...v3.6.0-beta.0) (2018-11-13)


### Bug Fixes

* **api:** Correct well ordering for custom labware ([#2633](https://github.com/Opentrons/opentrons/issues/2633)) ([8e7530c](https://github.com/Opentrons/opentrons/commit/8e7530c)), closes [#2631](https://github.com/Opentrons/opentrons/issues/2631)
* **api:** Fix bug where drop-tip current is not used while actually dropping tip ([#2572](https://github.com/Opentrons/opentrons/issues/2572)) ([d7c7f60](https://github.com/Opentrons/opentrons/commit/d7c7f60))
* **protocol-designer:** add vertical spacing back to form fields ([#2644](https://github.com/Opentrons/opentrons/issues/2644)) ([c7173da](https://github.com/Opentrons/opentrons/commit/c7173da)), closes [#2580](https://github.com/Opentrons/opentrons/issues/2580) [#2597](https://github.com/Opentrons/opentrons/issues/2597)
* **protocol-designer:** fix sidebar for liquid placement modal ([#2649](https://github.com/Opentrons/opentrons/issues/2649)) ([8da2f7d](https://github.com/Opentrons/opentrons/commit/8da2f7d))


### Features

* **api:** Pipette id included in GET /pipettes ([#2564](https://github.com/Opentrons/opentrons/issues/2564)) ([0a171fe](https://github.com/Opentrons/opentrons/commit/0a171fe)), closes [#2148](https://github.com/Opentrons/opentrons/issues/2148)
* **api:** support offset in json protocol touch-tip command ([#2566](https://github.com/Opentrons/opentrons/issues/2566)) ([d54ee84](https://github.com/Opentrons/opentrons/commit/d54ee84))
* **app:** Home pipette after tip probe confirmed ([#2586](https://github.com/Opentrons/opentrons/issues/2586)) ([3119379](https://github.com/Opentrons/opentrons/commit/3119379)), closes [#2544](https://github.com/Opentrons/opentrons/issues/2544)
* **app:** Implement new connectivity card ([#2608](https://github.com/Opentrons/opentrons/issues/2608)) ([a4b26a2](https://github.com/Opentrons/opentrons/commit/a4b26a2)), closes [#2555](https://github.com/Opentrons/opentrons/issues/2555)
* **app:** Track restart status in discovery state for better alerts ([#2639](https://github.com/Opentrons/opentrons/issues/2639)) ([b4ba600](https://github.com/Opentrons/opentrons/commit/b4ba600)), closes [#2516](https://github.com/Opentrons/opentrons/issues/2516)
* **docs:** Add opentrons container defs and images ([#2531](https://github.com/Opentrons/opentrons/issues/2531)) ([0619fb3](https://github.com/Opentrons/opentrons/commit/0619fb3))
* **protocol-designer:** add labware details card ([#2490](https://github.com/Opentrons/opentrons/issues/2490)) ([fb96472](https://github.com/Opentrons/opentrons/commit/fb96472)), closes [#2428](https://github.com/Opentrons/opentrons/issues/2428)
* **protocol-designer:** add more labware options to PD ([#2634](https://github.com/Opentrons/opentrons/issues/2634)) ([7db10ce](https://github.com/Opentrons/opentrons/commit/7db10ce)), closes [#2583](https://github.com/Opentrons/opentrons/issues/2583)
* **protocol-designer:** add well tooltip to liquid placement modal ([#2550](https://github.com/Opentrons/opentrons/issues/2550)) ([7c13891](https://github.com/Opentrons/opentrons/commit/7c13891)), closes [#2486](https://github.com/Opentrons/opentrons/issues/2486)
* **protocol-designer:** allow user to change pipette selection ([#2548](https://github.com/Opentrons/opentrons/issues/2548)) ([bb08aa4](https://github.com/Opentrons/opentrons/commit/bb08aa4)), closes [#2474](https://github.com/Opentrons/opentrons/issues/2474) [#2475](https://github.com/Opentrons/opentrons/issues/2475) [#2477](https://github.com/Opentrons/opentrons/issues/2477) [#2632](https://github.com/Opentrons/opentrons/issues/2632)
* **protocol-designer:** clean up navigation and modal hierarchy ([#2638](https://github.com/Opentrons/opentrons/issues/2638)) ([134558f](https://github.com/Opentrons/opentrons/commit/134558f)), closes [#2198](https://github.com/Opentrons/opentrons/issues/2198)
* **protocol-designer:** collapse all step items on newly loaded file ([#2549](https://github.com/Opentrons/opentrons/issues/2549)) ([46066a2](https://github.com/Opentrons/opentrons/commit/46066a2)), closes [#2541](https://github.com/Opentrons/opentrons/issues/2541)
* **protocol-designer:** edit saved step forms when labware is deleted ([#2653](https://github.com/Opentrons/opentrons/issues/2653)) ([78b99c3](https://github.com/Opentrons/opentrons/commit/78b99c3)), closes [#2361](https://github.com/Opentrons/opentrons/issues/2361)
* **shared-data:** Add generator function for irregular labware ([#2610](https://github.com/Opentrons/opentrons/issues/2610)) ([ad568c1](https://github.com/Opentrons/opentrons/commit/ad568c1)), closes [#2275](https://github.com/Opentrons/opentrons/issues/2275)
* **shared-data:** support unversioned pipettes in JSON protocols ([#2605](https://github.com/Opentrons/opentrons/issues/2605)) ([9e84ff6](https://github.com/Opentrons/opentrons/commit/9e84ff6))





<a name="3.5.1"></a>
# [3.5.1](https://github.com/opentrons/opentrons/compare/v3.5.0...v3.5.1) (2018-10-26)


### Bug Fixes

* **api:** Correct GET /wifi/keys response to match documentation ([#2532](https://github.com/opentrons/opentrons/issues/2532)) ([9e577b2](https://github.com/opentrons/opentrons/commit/9e577b2))
* **app:** Show the correct release notes for robot update ([#2560](https://github.com/Opentrons/opentrons/issues/2560)) ([7b0279c](https://github.com/Opentrons/opentrons/commit/7b0279c))


<a name="3.5.0"></a>
# [3.5.0](https://github.com/opentrons/opentrons/compare/v3.5.0-beta.1...v3.5.0) (2018-10-25)


### Bug Fixes

* **api:** Correct GET /wifi/keys response to match documentation ([#2532](https://github.com/opentrons/opentrons/issues/2532)) ([9e577b2](https://github.com/opentrons/opentrons/commit/9e577b2))
* **api:** Fix height of p1000 tip rack definition ([#2547](https://github.com/opentrons/opentrons/issues/2547)) ([8a92e82](https://github.com/opentrons/opentrons/commit/8a92e82))
* **api:** Make the Makefile have more real prerequisites/targets ([#2510](https://github.com/opentrons/opentrons/issues/2510)) ([1eb207a](https://github.com/opentrons/opentrons/commit/1eb207a))
* **api:** Write .env with absolute path for conf on make install ([#2500](https://github.com/opentrons/opentrons/issues/2500)) ([ec469ed](https://github.com/opentrons/opentrons/commit/ec469ed)), closes [#2495](https://github.com/opentrons/opentrons/issues/2495)
* **protocol-designer:** close liquid placement form when clear wells is clicked ([#2533](https://github.com/opentrons/opentrons/issues/2533)) ([e0727e6](https://github.com/opentrons/opentrons/commit/e0727e6)), closes [#2528](https://github.com/opentrons/opentrons/issues/2528)
* **protocol-designer:** do not add __air__ on blowout ([#2545](https://github.com/opentrons/opentrons/issues/2545)) ([b35cfa9](https://github.com/opentrons/opentrons/commit/b35cfa9)), closes [#2498](https://github.com/opentrons/opentrons/issues/2498)
* **protocol-designer:** fix LiquidPlacementForm onBlur typo ([#2546](https://github.com/opentrons/opentrons/issues/2546)) ([c6a9f38](https://github.com/opentrons/opentrons/commit/c6a9f38))
* **protocol-designer:** fix localization refactor mistakes ([#2499](https://github.com/opentrons/opentrons/issues/2499)) ([4ef34f2](https://github.com/opentrons/opentrons/commit/4ef34f2))
* **repo:** increase flow merge timeout ([#2514](https://github.com/opentrons/opentrons/issues/2514)) ([b1ba303](https://github.com/opentrons/opentrons/commit/b1ba303))
* **shared-data:** Fix corner offset from slot logic; add in container offset to well coordinates ([#2519](https://github.com/opentrons/opentrons/issues/2519)) ([c79684b](https://github.com/opentrons/opentrons/commit/c79684b))


### Features

* **api:** Add ability to save new delta from calibrating labware ([#2503](https://github.com/opentrons/opentrons/issues/2503)) ([a6e3a24](https://github.com/opentrons/opentrons/commit/a6e3a24))
* **api:** Add error checking on generated labware def ([#2476](https://github.com/opentrons/opentrons/issues/2476)) ([242ffe4](https://github.com/opentrons/opentrons/commit/242ffe4))
* **api:** Clear labware calibrations in new labware system ([#2513](https://github.com/opentrons/opentrons/issues/2513)) ([cb3d12e](https://github.com/opentrons/opentrons/commit/cb3d12e)), closes [#2276](https://github.com/opentrons/opentrons/issues/2276)
* **api:** Use deck-absolute coords in hardware_control ([#2502](https://github.com/opentrons/opentrons/issues/2502)) ([36c9f73](https://github.com/opentrons/opentrons/commit/36c9f73)), closes [#2238](https://github.com/opentrons/opentrons/issues/2238)
* **app:** Show all labware of same type as confirmed ([#2525](https://github.com/opentrons/opentrons/issues/2525)) ([ab8fdd9](https://github.com/opentrons/opentrons/commit/ab8fdd9)), closes [#2523](https://github.com/opentrons/opentrons/issues/2523)
* **protocol-designer:** add tooltip for labware name/type on steplist ([#2497](https://github.com/opentrons/opentrons/issues/2497)) ([4890374](https://github.com/opentrons/opentrons/commit/4890374)), closes [#2421](https://github.com/opentrons/opentrons/issues/2421)
* **protocol-designer:** allow user to delete entire liquid groups ([#2524](https://github.com/opentrons/opentrons/issues/2524)) ([dce806b](https://github.com/opentrons/opentrons/commit/dce806b)), closes [#2437](https://github.com/opentrons/opentrons/issues/2437)
* **protocol-designer:** continue to liquids not design page ([#2539](https://github.com/opentrons/opentrons/issues/2539)) ([49da7b1](https://github.com/opentrons/opentrons/commit/49da7b1)), closes [#2534](https://github.com/opentrons/opentrons/issues/2534)
* **protocol-designer:** implement "clear wells" button ([#2528](https://github.com/opentrons/opentrons/issues/2528)) ([145977f](https://github.com/opentrons/opentrons/commit/145977f)), closes [#2430](https://github.com/opentrons/opentrons/issues/2430)
* **protocol-designer:** liquid tooltips on well selection, popper and portal ([#2521](https://github.com/opentrons/opentrons/issues/2521)) ([12d8adb](https://github.com/opentrons/opentrons/commit/12d8adb)), closes [#2487](https://github.com/opentrons/opentrons/issues/2487)
* **protocol-designer:** replace liquid placement form ([#2518](https://github.com/opentrons/opentrons/issues/2518)) ([3a6b06f](https://github.com/opentrons/opentrons/commit/3a6b06f)), closes [#2429](https://github.com/opentrons/opentrons/issues/2429)
* **protocol-designer:** use formik for liquid edit form ([#2512](https://github.com/opentrons/opentrons/issues/2512)) ([3e7456f](https://github.com/opentrons/opentrons/commit/3e7456f)), closes [#2460](https://github.com/opentrons/opentrons/issues/2460)





<a name="3.5.0-beta.1"></a>
# [3.5.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.5.0-beta.0...v3.5.0-beta.1) (2018-10-16)


### Bug Fixes

* **api:** Filter out missing SSIDs from network list ([#2493](https://github.com/Opentrons/opentrons/issues/2493)) ([82584bd](https://github.com/Opentrons/opentrons/commit/82584bd)), closes [#2489](https://github.com/Opentrons/opentrons/issues/2489)
* **api:** Fix docs build failure after move to legacy_api ([#2469](https://github.com/Opentrons/opentrons/issues/2469)) ([cbe686a](https://github.com/Opentrons/opentrons/commit/cbe686a)), closes [#2468](https://github.com/Opentrons/opentrons/issues/2468)
* **app:** Check semver validity of API returned version strings ([#2492](https://github.com/Opentrons/opentrons/issues/2492)) ([d9a48bf](https://github.com/Opentrons/opentrons/commit/d9a48bf))
* **protocol-designer:** unhighlight wells on deselect in well selection modal ([#2491](https://github.com/Opentrons/opentrons/issues/2491)) ([5dfbf25](https://github.com/Opentrons/opentrons/commit/5dfbf25)), closes [#2463](https://github.com/Opentrons/opentrons/issues/2463)
* **repo:** fix gitattributes hex crlf bug ([#2482](https://github.com/Opentrons/opentrons/issues/2482)) ([c01f6c4](https://github.com/Opentrons/opentrons/commit/c01f6c4))


### Features

* **api:** Add /networking/status endpoint to get all interface info ([#2471](https://github.com/Opentrons/opentrons/issues/2471)) ([7555e26](https://github.com/Opentrons/opentrons/commit/7555e26)), closes [#2445](https://github.com/Opentrons/opentrons/issues/2445)
* **api:** Add labware load to protocol API ([#2472](https://github.com/Opentrons/opentrons/issues/2472)) ([bae6ef6](https://github.com/Opentrons/opentrons/commit/bae6ef6)), closes [#2240](https://github.com/Opentrons/opentrons/issues/2240)
* **api:** Add newly formatted labware defs and update labware schema ([#2457](https://github.com/Opentrons/opentrons/issues/2457)) ([690c0f2](https://github.com/Opentrons/opentrons/commit/690c0f2))
* **api:** Store pipette function params as data ([#2466](https://github.com/Opentrons/opentrons/issues/2466)) ([4e557dd](https://github.com/Opentrons/opentrons/commit/4e557dd))
* **app:** Move deck calibration to robot controls ([#2470](https://github.com/Opentrons/opentrons/issues/2470)) ([b6ef29c](https://github.com/Opentrons/opentrons/commit/b6ef29c)), closes [#2377](https://github.com/Opentrons/opentrons/issues/2377)
* **components:** Add wifi connectivity icons ([#2473](https://github.com/Opentrons/opentrons/issues/2473)) ([6baf532](https://github.com/Opentrons/opentrons/commit/6baf532))
* **protocol-designer:** add tooltips on hover of final result wells ([#2479](https://github.com/Opentrons/opentrons/issues/2479)) ([73d2bf3](https://github.com/Opentrons/opentrons/commit/73d2bf3)), closes [#2409](https://github.com/Opentrons/opentrons/issues/2409)
* **protocol-designer:** create view to browse final liquid state ([#2451](https://github.com/Opentrons/opentrons/issues/2451)) ([5a436c3](https://github.com/Opentrons/opentrons/commit/5a436c3)), closes [#2335](https://github.com/Opentrons/opentrons/issues/2335)
* **protocol-designer:** implement liquids page interactivity ([#2478](https://github.com/Opentrons/opentrons/issues/2478)) ([7e85673](https://github.com/Opentrons/opentrons/commit/7e85673)), closes [#2427](https://github.com/Opentrons/opentrons/issues/2427)
* **protocol-designer:** implement rounding properly ([#2458](https://github.com/Opentrons/opentrons/issues/2458)) ([6ef6bf0](https://github.com/Opentrons/opentrons/commit/6ef6bf0)), closes [#2405](https://github.com/Opentrons/opentrons/issues/2405)





<a name="3.5.0-beta.0"></a>
# [3.5.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.4.0...v3.5.0-beta.0) (2018-10-11)


### Bug Fixes

* **api:** Bind jupyter notebook to 0.0.0.0 ([#2398](https://github.com/Opentrons/opentrons/issues/2398)) ([be24335](https://github.com/Opentrons/opentrons/commit/be24335)), closes [#2394](https://github.com/Opentrons/opentrons/issues/2394)
* **api:** Change api update ignore route to be accessible to client ([#2368](https://github.com/Opentrons/opentrons/issues/2368)) ([b581f2a](https://github.com/Opentrons/opentrons/commit/b581f2a)), closes [#2367](https://github.com/Opentrons/opentrons/issues/2367)
* **api:** Remove unnecessary return in hardware controller ([#2450](https://github.com/Opentrons/opentrons/issues/2450)) ([5e28aff](https://github.com/Opentrons/opentrons/commit/5e28aff))
* **app:** Allow portal to re-check for root element ([#2440](https://github.com/Opentrons/opentrons/issues/2440)) ([5930a34](https://github.com/Opentrons/opentrons/commit/5930a34))
* **app:** Use type for labware table, not name ([#2441](https://github.com/Opentrons/opentrons/issues/2441)) ([cf91003](https://github.com/Opentrons/opentrons/commit/cf91003)), closes [#2407](https://github.com/Opentrons/opentrons/issues/2407)
* **discovery-client:** Ensure IPs are actually de-duped ([#2404](https://github.com/Opentrons/opentrons/issues/2404)) ([928dcab](https://github.com/Opentrons/opentrons/commit/928dcab))
* **discovery-client:** Monkeypatch uncatchable throw from mdns-js ([#2433](https://github.com/Opentrons/opentrons/issues/2433)) ([c177f87](https://github.com/Opentrons/opentrons/commit/c177f87))
* **protocol-designer:** fix tiprack diagram only displaying right ([#2340](https://github.com/Opentrons/opentrons/issues/2340)) ([3d4d57b](https://github.com/Opentrons/opentrons/commit/3d4d57b))
* **protocol-designer:** tweak analytics copy for accuracy ([#2366](https://github.com/Opentrons/opentrons/issues/2366)) ([b3f4b45](https://github.com/Opentrons/opentrons/commit/b3f4b45))


### Features

* **api:** Add a displayName field to EAP types in /wifi/eap-options ([#2448](https://github.com/Opentrons/opentrons/issues/2448)) ([1232448](https://github.com/Opentrons/opentrons/commit/1232448)), closes [#2439](https://github.com/Opentrons/opentrons/issues/2439)
* **api:** Add accessor functions in new labware class ([#2418](https://github.com/Opentrons/opentrons/issues/2418)) ([d963cfc](https://github.com/Opentrons/opentrons/commit/d963cfc))
* **api:** Add function for p1000 ul-to-millimeter conversions ([#2425](https://github.com/Opentrons/opentrons/issues/2425)) ([4a26340](https://github.com/Opentrons/opentrons/commit/4a26340))
* **api:** add hardware control move_to(), move_rel() ([#2389](https://github.com/Opentrons/opentrons/issues/2389)) ([c14ca14](https://github.com/Opentrons/opentrons/commit/c14ca14)), closes [#2234](https://github.com/Opentrons/opentrons/issues/2234)
* **api:** Add hardware_control submodule ([#2349](https://github.com/Opentrons/opentrons/issues/2349)) ([ea25b15](https://github.com/Opentrons/opentrons/commit/ea25b15)), closes [#2232](https://github.com/Opentrons/opentrons/issues/2232)
* **api:** add instrument cache to hardware control ([#2402](https://github.com/Opentrons/opentrons/issues/2402)) ([bcc7040](https://github.com/Opentrons/opentrons/commit/bcc7040)), closes [#2236](https://github.com/Opentrons/opentrons/issues/2236)
* **api:** add module firmware update endpoint ([#2173](https://github.com/Opentrons/opentrons/issues/2173)) ([19f9a0d](https://github.com/Opentrons/opentrons/commit/19f9a0d)), closes [#1654](https://github.com/Opentrons/opentrons/issues/1654)
* **api:** Add new protocol API stubs ([#2375](https://github.com/Opentrons/opentrons/issues/2375)) ([82d28c5](https://github.com/Opentrons/opentrons/commit/82d28c5)), closes [#2233](https://github.com/Opentrons/opentrons/issues/2233)
* **api:** Add skeleton of new Labware class ([#2363](https://github.com/Opentrons/opentrons/issues/2363)) ([3488612](https://github.com/Opentrons/opentrons/commit/3488612)), closes [#2261](https://github.com/Opentrons/opentrons/issues/2261)
* **api:** Add top, bottom, and center methods to Well ([#2379](https://github.com/Opentrons/opentrons/issues/2379)) ([9ef7dd1](https://github.com/Opentrons/opentrons/commit/9ef7dd1)), closes [#2369](https://github.com/Opentrons/opentrons/issues/2369)
* **api:** change tempdeck temperature resolution,fix temp in docs ([#2359](https://github.com/Opentrons/opentrons/issues/2359)) ([343e845](https://github.com/Opentrons/opentrons/commit/343e845)), closes [#2358](https://github.com/Opentrons/opentrons/issues/2358)
* **app:** Add release notes to robot update modals ([#2397](https://github.com/Opentrons/opentrons/issues/2397)) ([f5e5fd9](https://github.com/Opentrons/opentrons/commit/f5e5fd9)), closes [#2353](https://github.com/Opentrons/opentrons/issues/2353)
* **app:** Add upgrade and downgrade logic to robot updates ([#2376](https://github.com/Opentrons/opentrons/issues/2376)) ([d44386a](https://github.com/Opentrons/opentrons/commit/d44386a))
* **app:** Display reachable but non-connectable robots ([#2455](https://github.com/Opentrons/opentrons/issues/2455)) ([8785ea8](https://github.com/Opentrons/opentrons/commit/8785ea8)), closes [#2345](https://github.com/Opentrons/opentrons/issues/2345)
* **app:** Display unreachable robots in list ([#2434](https://github.com/Opentrons/opentrons/issues/2434)) ([9b47f2d](https://github.com/Opentrons/opentrons/commit/9b47f2d)), closes [#2344](https://github.com/Opentrons/opentrons/issues/2344)
* **app:** Only display instrument settings for selected robot ([#2406](https://github.com/Opentrons/opentrons/issues/2406)) ([9150e21](https://github.com/Opentrons/opentrons/commit/9150e21)), closes [#2362](https://github.com/Opentrons/opentrons/issues/2362)
* **app:** Prompt user to update app in robot update modal ([#2386](https://github.com/Opentrons/opentrons/issues/2386)) ([c389750](https://github.com/Opentrons/opentrons/commit/c389750)), closes [#2354](https://github.com/Opentrons/opentrons/issues/2354)
* **app:** Remove 'opentrons-' prefix in robot displayNames ([#2459](https://github.com/Opentrons/opentrons/issues/2459)) ([06f158a](https://github.com/Opentrons/opentrons/commit/06f158a)), closes [#2357](https://github.com/Opentrons/opentrons/issues/2357)
* **components:** change default border width to 1px ([#2385](https://github.com/Opentrons/opentrons/issues/2385)) ([1fbb749](https://github.com/Opentrons/opentrons/commit/1fbb749))
* **components:** create new tab-styled vertical nav bar ([#2371](https://github.com/Opentrons/opentrons/issues/2371)) ([0202b53](https://github.com/Opentrons/opentrons/commit/0202b53)), closes [#1923](https://github.com/Opentrons/opentrons/issues/1923)
* **discovery-client:** Add mdns flag and health responses to services ([#2420](https://github.com/Opentrons/opentrons/issues/2420)) ([0c06d32](https://github.com/Opentrons/opentrons/commit/0c06d32))
* **labware-designer:** set up labware-designer skeleton for use in browser console ([#2392](https://github.com/Opentrons/opentrons/issues/2392)) ([85fadd0](https://github.com/Opentrons/opentrons/commit/85fadd0))
* **protocol-designer:** add "app build date" field to PD saved files ([#2350](https://github.com/Opentrons/opentrons/issues/2350)) ([d2bf281](https://github.com/Opentrons/opentrons/commit/d2bf281))
* **protocol-designer:** add liquids tab and sidebar ([#2454](https://github.com/Opentrons/opentrons/issues/2454)) ([0aedda6](https://github.com/Opentrons/opentrons/commit/0aedda6)), closes [#2426](https://github.com/Opentrons/opentrons/issues/2426)
* **protocol-designer:** implement "metadata.created" in JSON file ([#2403](https://github.com/Opentrons/opentrons/issues/2403)) ([a9c3d07](https://github.com/Opentrons/opentrons/commit/a9c3d07)), closes [#2189](https://github.com/Opentrons/opentrons/issues/2189)
* **protocol-designer:** implement selective redux persistence ([#2436](https://github.com/Opentrons/opentrons/issues/2436)) ([6591104](https://github.com/Opentrons/opentrons/commit/6591104))
* **protocol-designer:** modify the "name new labware" overlay for new design ([#2422](https://github.com/Opentrons/opentrons/issues/2422)) ([4934c47](https://github.com/Opentrons/opentrons/commit/4934c47)), closes [#2410](https://github.com/Opentrons/opentrons/issues/2410)
* **protocol-designer:** refactor and performance audit of labware components ([#2442](https://github.com/Opentrons/opentrons/issues/2442)) ([09f4eb3](https://github.com/Opentrons/opentrons/commit/09f4eb3)), closes [#2285](https://github.com/Opentrons/opentrons/issues/2285)
* **protocol-designer:** show hints as modal ([#2447](https://github.com/Opentrons/opentrons/issues/2447)) ([9a3509f](https://github.com/Opentrons/opentrons/commit/9a3509f))
* **shared-data:** Add generator function to create regular labware defs ([#2380](https://github.com/Opentrons/opentrons/issues/2380)) ([bc81574](https://github.com/Opentrons/opentrons/commit/bc81574))


### Performance Improvements

* **app:** Upgrade Electron to v3 and remove Node in renderer ([#2374](https://github.com/Opentrons/opentrons/issues/2374)) ([778b9af](https://github.com/Opentrons/opentrons/commit/778b9af))





<a name="3.4.0"></a>
# [3.4.0](https://github.com/Opentrons/opentrons/compare/v3.4.0-beta.0...v3.4.0) (2018-09-21)


### Bug Fixes

* **api:** Patch resources/scripts to always be executable ([#2314](https://github.com/Opentrons/opentrons/issues/2314)) ([7db14bc](https://github.com/Opentrons/opentrons/commit/7db14bc)), closes [#2313](https://github.com/Opentrons/opentrons/issues/2313)
* **api:** Update definitions for tuberacks ([#2317](https://github.com/Opentrons/opentrons/issues/2317)) ([4ce2595](https://github.com/Opentrons/opentrons/commit/4ce2595)), closes [#2290](https://github.com/Opentrons/opentrons/issues/2290)
* **api:** Update the aluminum block definitions to match drawings ([#2342](https://github.com/Opentrons/opentrons/issues/2342)) ([4c1e4c2](https://github.com/Opentrons/opentrons/commit/4c1e4c2)), closes [#2292](https://github.com/Opentrons/opentrons/issues/2292)
* **api:** When reseting the robot singleton, clear added tips ([#2323](https://github.com/Opentrons/opentrons/issues/2323)) ([710e2d6](https://github.com/Opentrons/opentrons/commit/710e2d6))
* **app:** Fix robot list scroll clipping ([#2288](https://github.com/Opentrons/opentrons/issues/2288)) ([28556ef](https://github.com/Opentrons/opentrons/commit/28556ef)), closes [#2046](https://github.com/Opentrons/opentrons/issues/2046)
* **app:** Open external links in browser instead of app window ([#2327](https://github.com/Opentrons/opentrons/issues/2327)) ([5bf5d5f](https://github.com/Opentrons/opentrons/commit/5bf5d5f))
* **app:** Prevent keypresses from changing jog jump size ([#2315](https://github.com/Opentrons/opentrons/issues/2315)) ([1b32d6d](https://github.com/Opentrons/opentrons/commit/1b32d6d))
* **app:** Wrap runscreen modals in portal ([#2308](https://github.com/Opentrons/opentrons/issues/2308)) ([aefad0a](https://github.com/Opentrons/opentrons/commit/aefad0a))
* **protocol-designer:** close tooltips and step creation button ([#2326](https://github.com/Opentrons/opentrons/issues/2326)) ([f99445b](https://github.com/Opentrons/opentrons/commit/f99445b))
* **protocol-designer:** correct alignment of form fields ([#2281](https://github.com/Opentrons/opentrons/issues/2281)) ([419c55a](https://github.com/Opentrons/opentrons/commit/419c55a)), closes [#2196](https://github.com/Opentrons/opentrons/issues/2196)
* **protocol-designer:** fix bug with well access for rect wells ([#2296](https://github.com/Opentrons/opentrons/issues/2296)) ([309a8bf](https://github.com/Opentrons/opentrons/commit/309a8bf)), closes [#2081](https://github.com/Opentrons/opentrons/issues/2081)
* **protocol-designer:** fix recurring deleted labware bug ([#2299](https://github.com/Opentrons/opentrons/issues/2299)) ([ebb44e1](https://github.com/Opentrons/opentrons/commit/ebb44e1))
* **protocol-designer:** fix whitescreen on deleting blowout labware ([#2341](https://github.com/Opentrons/opentrons/issues/2341)) ([44196c6](https://github.com/Opentrons/opentrons/commit/44196c6))


### Features

* **api:** Add ability to connect to WPA2-Enterprise networks ([#2283](https://github.com/Opentrons/opentrons/issues/2283)) ([972b501](https://github.com/Opentrons/opentrons/commit/972b501)), closes [#2252](https://github.com/Opentrons/opentrons/issues/2252) [#2251](https://github.com/Opentrons/opentrons/issues/2251) [#2284](https://github.com/Opentrons/opentrons/issues/2284)
* **api:** Flash the smoothie on api boot if versions don't match ([#2325](https://github.com/Opentrons/opentrons/issues/2325)) ([b015f58](https://github.com/Opentrons/opentrons/commit/b015f58))
* **api:** Remove deck calibration from reset options ([#2330](https://github.com/Opentrons/opentrons/issues/2330)) ([f7d0c48](https://github.com/Opentrons/opentrons/commit/f7d0c48))
* **api:** support optional pause message ([#2306](https://github.com/Opentrons/opentrons/issues/2306)) ([e8056ae](https://github.com/Opentrons/opentrons/commit/e8056ae)), closes [#1694](https://github.com/Opentrons/opentrons/issues/1694)
* **app:** Add release notes to app update modal ([#2316](https://github.com/Opentrons/opentrons/issues/2316)) ([745a1f8](https://github.com/Opentrons/opentrons/commit/745a1f8))
* **app:** Enable autoupdate on Linux by switching to AppImage builds ([#2329](https://github.com/Opentrons/opentrons/issues/2329)) ([caade74](https://github.com/Opentrons/opentrons/commit/caade74)), closes [#2303](https://github.com/Opentrons/opentrons/issues/2303)
* **components:** make titlebar stick to top on scroll ([#2321](https://github.com/Opentrons/opentrons/issues/2321)) ([e9b58d8](https://github.com/Opentrons/opentrons/commit/e9b58d8)), closes [#2195](https://github.com/Opentrons/opentrons/issues/2195)
* **protocol-designer:** add dynamic tooltip arrow ([#2319](https://github.com/Opentrons/opentrons/issues/2319)) ([44eb1fb](https://github.com/Opentrons/opentrons/commit/44eb1fb)), closes [#2026](https://github.com/Opentrons/opentrons/issues/2026)
* **protocol-designer:** allow user to specify disposal volume dest ([#2295](https://github.com/Opentrons/opentrons/issues/2295)) ([92ba845](https://github.com/Opentrons/opentrons/commit/92ba845)), closes [#1676](https://github.com/Opentrons/opentrons/issues/1676)
* **protocol-designer:** autoselect default pipette for new forms ([#2320](https://github.com/Opentrons/opentrons/issues/2320)) ([c5efd3c](https://github.com/Opentrons/opentrons/commit/c5efd3c)), closes [#1296](https://github.com/Opentrons/opentrons/issues/1296)
* **protocol-designer:** modify well selection instructional text ([#2263](https://github.com/Opentrons/opentrons/issues/2263)) ([9ec91a4](https://github.com/Opentrons/opentrons/commit/9ec91a4)), closes [#2204](https://github.com/Opentrons/opentrons/issues/2204)





<a name="3.4.0-beta.0"></a>
# [3.4.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.1-beta.0...v3.4.0-beta.0) (2018-09-14)


### Bug Fixes

* **api:** Do not bind the api server to localhost if socket specd ([#2258](https://github.com/Opentrons/opentrons/issues/2258)) ([d534c6f](https://github.com/Opentrons/opentrons/commit/d534c6f)), closes [#2256](https://github.com/Opentrons/opentrons/issues/2256)
* **api:** Fix pipette volume params and revert change in param order ([#2255](https://github.com/Opentrons/opentrons/issues/2255)) ([55d2cd5](https://github.com/Opentrons/opentrons/commit/55d2cd5))
* **api:** throw early error on bad json delay cmd ([#2219](https://github.com/Opentrons/opentrons/issues/2219)) ([3d907d1](https://github.com/Opentrons/opentrons/commit/3d907d1))
* **discovery-client:** Fix health state latching regression ([#2280](https://github.com/Opentrons/opentrons/issues/2280)) ([9176758](https://github.com/Opentrons/opentrons/commit/9176758))
* **protocol-designer:** correctly null out blowout if unchecked in form ([#2226](https://github.com/Opentrons/opentrons/issues/2226)) ([6179b18](https://github.com/Opentrons/opentrons/commit/6179b18))


### Features

* **api:** Add new container defs to shared data ([#2225](https://github.com/Opentrons/opentrons/issues/2225)) ([20e2751](https://github.com/Opentrons/opentrons/commit/20e2751))
* **api:** Add wifi key upload endpoints ([#2254](https://github.com/Opentrons/opentrons/issues/2254)) ([250101c](https://github.com/Opentrons/opentrons/commit/250101c)), closes [#2253](https://github.com/Opentrons/opentrons/issues/2253)
* **api:** Added min and max volume keywords to pipette constructors ([#2084](https://github.com/Opentrons/opentrons/issues/2084)) ([f68da5a](https://github.com/Opentrons/opentrons/commit/f68da5a)), closes [#2075](https://github.com/Opentrons/opentrons/issues/2075)
* **app:** Add protocol file info page ([#2221](https://github.com/Opentrons/opentrons/issues/2221)) ([e861365](https://github.com/Opentrons/opentrons/commit/e861365))
* **app:** Parse JSON protocols into state ([#2231](https://github.com/Opentrons/opentrons/issues/2231)) ([b5f3666](https://github.com/Opentrons/opentrons/commit/b5f3666))
* **app:** Populate FileInfo page with JSON protocol metadata ([#2278](https://github.com/Opentrons/opentrons/issues/2278)) ([995038a](https://github.com/Opentrons/opentrons/commit/995038a)), closes [#2129](https://github.com/Opentrons/opentrons/issues/2129)
* **discovery-client:** Add /server/update/health check to poller ([#2206](https://github.com/Opentrons/opentrons/issues/2206)) ([d08a87d](https://github.com/Opentrons/opentrons/commit/d08a87d))
* **protocol-designer:** add ux analytics with opt in settings and modal ([#2177](https://github.com/Opentrons/opentrons/issues/2177)) ([4a8ebbe](https://github.com/Opentrons/opentrons/commit/4a8ebbe)), closes [#2119](https://github.com/Opentrons/opentrons/issues/2119) [#2172](https://github.com/Opentrons/opentrons/issues/2172)
* **protocol-designer:** allow tenths of µl pipette volumes ([#2222](https://github.com/Opentrons/opentrons/issues/2222)) ([827f3ee](https://github.com/Opentrons/opentrons/commit/827f3ee)), closes [#2120](https://github.com/Opentrons/opentrons/issues/2120)
* **protocol-designer:** auto dismiss no liquid hint ([#2220](https://github.com/Opentrons/opentrons/issues/2220)) ([d2982e1](https://github.com/Opentrons/opentrons/commit/d2982e1))
* **protocol-designer:** replace 200µl tiprack with 300µl tiprack ([#2223](https://github.com/Opentrons/opentrons/issues/2223)) ([8a8fc0f](https://github.com/Opentrons/opentrons/commit/8a8fc0f)), closes [#1955](https://github.com/Opentrons/opentrons/issues/1955)
* **protocol-designer:** warn changes will be lost on import/create ([#2168](https://github.com/Opentrons/opentrons/issues/2168)) ([0a5a071](https://github.com/Opentrons/opentrons/commit/0a5a071))
* **protocol-library-kludge:** set up OT2 deckmap mini-app kludge ([#2210](https://github.com/Opentrons/opentrons/issues/2210)) ([e4cf249](https://github.com/Opentrons/opentrons/commit/e4cf249)), closes [#2145](https://github.com/Opentrons/opentrons/issues/2145)
* **protocol-library-kludge:** support modules and nicknames ([#2224](https://github.com/Opentrons/opentrons/issues/2224)) ([15a3790](https://github.com/Opentrons/opentrons/commit/15a3790))





<a name="3.3.1-beta.0"></a>
## [3.3.1-beta.0](https://github.com/Opentrons/opentrons/compare/v3.3.0...v3.3.1-beta.0) (2018-09-10)


### Bug Fixes

* **api:** delete pipette-config.json ([#2166](https://github.com/Opentrons/opentrons/issues/2166)) ([034edc7](https://github.com/Opentrons/opentrons/commit/034edc7))
* **api:** Delete the labware database journal on reset ([#2098](https://github.com/Opentrons/opentrons/issues/2098)) ([0579fb5](https://github.com/Opentrons/opentrons/commit/0579fb5))
* **api:** Fix container definitions of biorad PCR and 10ul tiprack ([#2191](https://github.com/Opentrons/opentrons/issues/2191)) ([b261dfa](https://github.com/Opentrons/opentrons/commit/b261dfa))
* **api:** opentrons.nmcli security types should be nmcli key-mgmt ([#2190](https://github.com/Opentrons/opentrons/issues/2190)) ([4873dc4](https://github.com/Opentrons/opentrons/commit/4873dc4)), closes [#2178](https://github.com/Opentrons/opentrons/issues/2178)
* **app:** Grab intercom handler from window on every call ([#2179](https://github.com/Opentrons/opentrons/issues/2179)) ([a90aaae](https://github.com/Opentrons/opentrons/commit/a90aaae))
* **protocol-designer:** change copy for excessive aspirate warning ([#2214](https://github.com/Opentrons/opentrons/issues/2214)) ([de1b714](https://github.com/Opentrons/opentrons/commit/de1b714)), closes [#2213](https://github.com/Opentrons/opentrons/issues/2213)
* **shared-data:** fix tube-rack-15_50ml labware def ([#2063](https://github.com/Opentrons/opentrons/issues/2063)) ([b32df5e](https://github.com/Opentrons/opentrons/commit/b32df5e))


### Features

* **api:** Add container definitions for opentrons alumnium block set ([#2205](https://github.com/Opentrons/opentrons/issues/2205)) ([107d6b0](https://github.com/Opentrons/opentrons/commit/107d6b0))
* **api:** Add definitions for the modular tuberack ([#2167](https://github.com/Opentrons/opentrons/issues/2167)) ([be902f6](https://github.com/Opentrons/opentrons/commit/be902f6))
* **api:** add engage custom height and offset params ([#2171](https://github.com/Opentrons/opentrons/issues/2171)) ([4b1f8bd](https://github.com/Opentrons/opentrons/commit/4b1f8bd)), closes [#2155](https://github.com/Opentrons/opentrons/issues/2155)
* **api:** Add hidden ssid wifi support ([#2193](https://github.com/Opentrons/opentrons/issues/2193)) ([ffc702f](https://github.com/Opentrons/opentrons/commit/ffc702f))
* **api:** Add net config info to /wifi/status ([#2188](https://github.com/Opentrons/opentrons/issues/2188)) ([cb51b86](https://github.com/Opentrons/opentrons/commit/cb51b86))
* **api:** support flow rate (uL/sec) in JSON protocols ([#2123](https://github.com/Opentrons/opentrons/issues/2123)) ([b0f944e](https://github.com/Opentrons/opentrons/commit/b0f944e))
* **app:** Add attached pipette info to intercom support ([#2140](https://github.com/Opentrons/opentrons/issues/2140)) ([b06e845](https://github.com/Opentrons/opentrons/commit/b06e845)), closes [#2019](https://github.com/Opentrons/opentrons/issues/2019)
* **protocol-designer:** add tooltips for advanced settings ([#2170](https://github.com/Opentrons/opentrons/issues/2170)) ([af09a4b](https://github.com/Opentrons/opentrons/commit/af09a4b)), closes [#1981](https://github.com/Opentrons/opentrons/issues/1981)
* **protocol-designer:** add tooltips for step creation button ([#2163](https://github.com/Opentrons/opentrons/issues/2163)) ([e34e636](https://github.com/Opentrons/opentrons/commit/e34e636)), closes [#1979](https://github.com/Opentrons/opentrons/issues/1979)
* **protocol-designer:** default form fields from old protocols ([#2162](https://github.com/Opentrons/opentrons/issues/2162)) ([54585e6](https://github.com/Opentrons/opentrons/commit/54585e6))
* **protocol-designer:** flow rate field more dependent on pipette ([#2154](https://github.com/Opentrons/opentrons/issues/2154)) ([ac778ea](https://github.com/Opentrons/opentrons/commit/ac778ea))
* **protocol-designer:** implement ui for flow rate ([#2149](https://github.com/Opentrons/opentrons/issues/2149)) ([e0e25c1](https://github.com/Opentrons/opentrons/commit/e0e25c1))
* **protocol-designer:** restyle selected TitledList carat hover ([#2165](https://github.com/Opentrons/opentrons/issues/2165)) ([48c488a](https://github.com/Opentrons/opentrons/commit/48c488a)), closes [#1977](https://github.com/Opentrons/opentrons/issues/1977)
* **protocol-designer:** support mm from bottom offset in JSON protocols ([#2180](https://github.com/Opentrons/opentrons/issues/2180)) ([db22ae8](https://github.com/Opentrons/opentrons/commit/db22ae8)), closes [#2157](https://github.com/Opentrons/opentrons/issues/2157)





<a name="3.3.0"></a>
# [3.3.0](https://github.com/Opentrons/opentrons/compare/v3.3.0-beta.1...v3.3.0) (2018-08-22)


### Bug Fixes

* **api:** change udev rule to include multiple modules ([#1995](https://github.com/Opentrons/opentrons/issues/1995)) ([91ffc7e](https://github.com/Opentrons/opentrons/commit/91ffc7e))
* **api:** Fix /server/restart failing in api-server-lib ([#2104](https://github.com/Opentrons/opentrons/issues/2104)) ([5220b4f](https://github.com/Opentrons/opentrons/commit/5220b4f))
* **app:** Fix copy typos in update error modal ([#2027](https://github.com/Opentrons/opentrons/issues/2027)) ([37795ce](https://github.com/Opentrons/opentrons/commit/37795ce))
* **protocol-designer:** fix serialized name in ingred list ([#2002](https://github.com/Opentrons/opentrons/issues/2002)) ([d19d29b](https://github.com/Opentrons/opentrons/commit/d19d29b)), closes [#1294](https://github.com/Opentrons/opentrons/issues/1294)
* **protocol-designer:** tweak timeline alert copy ([#2086](https://github.com/Opentrons/opentrons/issues/2086)) ([5108f21](https://github.com/Opentrons/opentrons/commit/5108f21))
* **update-server:** Fix issues with 3.2 api on 3.3 system ([#2097](https://github.com/Opentrons/opentrons/issues/2097)) ([bad6e3a](https://github.com/Opentrons/opentrons/commit/bad6e3a))
* **update-server:** Set the cwd to the venv when running an otupdate selftest ([#2070](https://github.com/Opentrons/opentrons/issues/2070)) ([bd9502a](https://github.com/Opentrons/opentrons/commit/bd9502a))


### Features

* **api:** Add /settings/reset endpoints ([#2082](https://github.com/Opentrons/opentrons/issues/2082)) ([f42ae1b](https://github.com/Opentrons/opentrons/commit/f42ae1b)), closes [#1885](https://github.com/Opentrons/opentrons/issues/1885)
* **api:** Consolidate pipette configuration ([#2055](https://github.com/Opentrons/opentrons/issues/2055)) ([ee39ea3](https://github.com/Opentrons/opentrons/commit/ee39ea3))
* **api:** Handle read-only thumb drive mount on OT2 ([#2037](https://github.com/Opentrons/opentrons/issues/2037)) ([9247392](https://github.com/Opentrons/opentrons/commit/9247392)), closes [#1903](https://github.com/Opentrons/opentrons/issues/1903)
* **api:** publish module commands and make module data endpoint ([#2053](https://github.com/Opentrons/opentrons/issues/2053)) ([c25c081](https://github.com/Opentrons/opentrons/commit/c25c081)), closes [#1653](https://github.com/Opentrons/opentrons/issues/1653)
* **api:** Use the resin supervisor restart endpoint to restart ([#2093](https://github.com/Opentrons/opentrons/issues/2093)) ([d47da3c](https://github.com/Opentrons/opentrons/commit/d47da3c)), closes [/docs.resin.io/reference/supervisor/supervisor-api/#post-v1](https://github.com//docs.resin.io/reference/supervisor/supervisor-api//issues/post-v1) [#2092](https://github.com/Opentrons/opentrons/issues/2092)
* **app:** Add persistent unique user ID to intercom data ([#2004](https://github.com/Opentrons/opentrons/issues/2004)) ([0a47d64](https://github.com/Opentrons/opentrons/commit/0a47d64)), closes [#1999](https://github.com/Opentrons/opentrons/issues/1999)
* **app:** Add robot name to intercom on connect ([#2069](https://github.com/Opentrons/opentrons/issues/2069)) ([f5be08d](https://github.com/Opentrons/opentrons/commit/f5be08d))
* **app:** Add update channel selector to advanced settings ([#2010](https://github.com/Opentrons/opentrons/issues/2010)) ([f7fb865](https://github.com/Opentrons/opentrons/commit/f7fb865))
* **app:** Add upload protocol warning modal ([#1988](https://github.com/Opentrons/opentrons/issues/1988)) ([8e010cf](https://github.com/Opentrons/opentrons/commit/8e010cf)), closes [#1032](https://github.com/Opentrons/opentrons/issues/1032)
* **app:** Enable download robot logs in advanced settings ([#2014](https://github.com/Opentrons/opentrons/issues/2014)) ([6e51ba0](https://github.com/Opentrons/opentrons/commit/6e51ba0)), closes [#1727](https://github.com/Opentrons/opentrons/issues/1727)
* **app:** Enable support for IPv4 wired robots by default ([#2090](https://github.com/Opentrons/opentrons/issues/2090)) ([d3a3afa](https://github.com/Opentrons/opentrons/commit/d3a3afa)), closes [#990](https://github.com/Opentrons/opentrons/issues/990) [#1964](https://github.com/Opentrons/opentrons/issues/1964)
* **app:** Persist known robots to file-system when using new discovery ([#2065](https://github.com/Opentrons/opentrons/issues/2065)) ([55b4000](https://github.com/Opentrons/opentrons/commit/55b4000))
* **app,api:** Add opt-in ping/pong monitoring to RPC websocket ([#2083](https://github.com/Opentrons/opentrons/issues/2083)) ([a9b3f0e](https://github.com/Opentrons/opentrons/commit/a9b3f0e)), closes [#2052](https://github.com/Opentrons/opentrons/issues/2052)
* **components:** refactor Plate to Labware ([#2060](https://github.com/Opentrons/opentrons/issues/2060)) ([ca8297a](https://github.com/Opentrons/opentrons/commit/ca8297a))
* **compute:** Add openjdk8 to container ([#2025](https://github.com/Opentrons/opentrons/issues/2025)) ([8463b5c](https://github.com/Opentrons/opentrons/commit/8463b5c))
* **compute,api,update:** Add sys ver to health, allow resin pull ([#2089](https://github.com/Opentrons/opentrons/issues/2089)) ([7fdce05](https://github.com/Opentrons/opentrons/commit/7fdce05)), closes [#2091](https://github.com/Opentrons/opentrons/issues/2091)
* **compute,api,update-server:** Move system configs out of Dockerfile ([#2073](https://github.com/Opentrons/opentrons/issues/2073)) ([354c740](https://github.com/Opentrons/opentrons/commit/354c740)), closes [#1114](https://github.com/Opentrons/opentrons/issues/1114)
* **discovery-client:** Add CLI commands to find and SSH into a robot ([#2072](https://github.com/Opentrons/opentrons/issues/2072)) ([5ae3ef1](https://github.com/Opentrons/opentrons/commit/5ae3ef1))
* **discovery-client:** Add standalone discovery-client to repo ([#1996](https://github.com/Opentrons/opentrons/issues/1996)) ([a2becbe](https://github.com/Opentrons/opentrons/commit/a2becbe)), closes [#1944](https://github.com/Opentrons/opentrons/issues/1944)
* **protocol-designer:** add 'drop tip' to 'dispense' section of form ([#1998](https://github.com/Opentrons/opentrons/issues/1998)) ([fa47f85](https://github.com/Opentrons/opentrons/commit/fa47f85)), closes [#1689](https://github.com/Opentrons/opentrons/issues/1689)
* **protocol-designer:** change tip field and timeline alert copy to i18n ([#2062](https://github.com/Opentrons/opentrons/issues/2062)) ([6fd4807](https://github.com/Opentrons/opentrons/commit/6fd4807)), closes [#1934](https://github.com/Opentrons/opentrons/issues/1934)
* **protocol-designer:** display tip use across step timeline ([#2074](https://github.com/Opentrons/opentrons/issues/2074)) ([51da5ae](https://github.com/Opentrons/opentrons/commit/51da5ae)), closes [#1094](https://github.com/Opentrons/opentrons/issues/1094)
* **protocol-designer:** rename change tip options ([#2003](https://github.com/Opentrons/opentrons/issues/2003)) ([e80fd25](https://github.com/Opentrons/opentrons/commit/e80fd25)), closes [#1933](https://github.com/Opentrons/opentrons/issues/1933)





<a name="3.3.0-beta.1"></a>
# [3.3.0-beta.1](https://github.com/OpenTrons/opentrons/compare/v3.3.0-beta.0...v3.3.0-beta.1) (2018-08-02)


### Bug Fixes

* **api:** check virtual smoothie before copying udev file on server start ([#1960](https://github.com/OpenTrons/opentrons/issues/1960)) ([9a31f3d](https://github.com/OpenTrons/opentrons/commit/9a31f3d))
* **api:** Fix pipette.delay() so it does not sleep during protocol simulation ([#1902](https://github.com/OpenTrons/opentrons/issues/1902)) ([f63bdba](https://github.com/OpenTrons/opentrons/commit/f63bdba))
* **api:** Fix the database migration script geometry logic ([#1959](https://github.com/OpenTrons/opentrons/issues/1959)) ([7ae9756](https://github.com/OpenTrons/opentrons/commit/7ae9756))
* **api:** Home Z axes before run to guarantee that pipettes will be retracted ([#1914](https://github.com/OpenTrons/opentrons/issues/1914)) ([7252a73](https://github.com/OpenTrons/opentrons/commit/7252a73))
* **api:** support touch-tip for JSON protocols ([#2000](https://github.com/OpenTrons/opentrons/issues/2000)) ([43125b7](https://github.com/OpenTrons/opentrons/commit/43125b7)), closes [#1997](https://github.com/OpenTrons/opentrons/issues/1997)
* **app:** Check if modulesRequired when displaying review modals ([#1940](https://github.com/OpenTrons/opentrons/issues/1940)) ([14a54a5](https://github.com/OpenTrons/opentrons/commit/14a54a5))
* **docker:** Switch out dumb-init, add modules tools & udev config ([#1952](https://github.com/OpenTrons/opentrons/issues/1952)) ([caac645](https://github.com/OpenTrons/opentrons/commit/caac645)), closes [#1822](https://github.com/OpenTrons/opentrons/issues/1822)
* **protocol-designer:** fix bug where tips not dropped at end of protocol ([#1911](https://github.com/OpenTrons/opentrons/issues/1911)) ([945ff6a](https://github.com/OpenTrons/opentrons/commit/945ff6a)), closes [#969](https://github.com/OpenTrons/opentrons/issues/969)
* **protocol-designer:** fix destination well pills in substeps ([#1896](https://github.com/OpenTrons/opentrons/issues/1896)) ([60481b5](https://github.com/OpenTrons/opentrons/commit/60481b5)), closes [#1812](https://github.com/OpenTrons/opentrons/issues/1812)
* **protocol-designer:** fix file load bug w mismatched pipette ids ([#1918](https://github.com/OpenTrons/opentrons/issues/1918)) ([9ec52d1](https://github.com/OpenTrons/opentrons/commit/9ec52d1))
* **protocol-designer:** fix styling of pause and mix step items ([#1948](https://github.com/OpenTrons/opentrons/issues/1948)) ([16c2a30](https://github.com/OpenTrons/opentrons/commit/16c2a30)), closes [#1947](https://github.com/OpenTrons/opentrons/issues/1947)
* **protocol-designer:** fix substeps for consolidate using inner mix ([#1921](https://github.com/OpenTrons/opentrons/issues/1921)) ([e59cc7e](https://github.com/OpenTrons/opentrons/commit/e59cc7e)), closes [#1919](https://github.com/OpenTrons/opentrons/issues/1919)
* **protocol-designer:** make well selection modal show pipette display name ([#1907](https://github.com/OpenTrons/opentrons/issues/1907)) ([07ad9ff](https://github.com/OpenTrons/opentrons/commit/07ad9ff)), closes [#1888](https://github.com/OpenTrons/opentrons/issues/1888)
* **protocol-designer:** Only show deck setup prompt text when selected ([#1894](https://github.com/OpenTrons/opentrons/issues/1894)) ([32656ef](https://github.com/OpenTrons/opentrons/commit/32656ef))


### Features

* **api:** Add "modules" field to RPC ([#1890](https://github.com/OpenTrons/opentrons/issues/1890)) ([f80ad18](https://github.com/OpenTrons/opentrons/commit/f80ad18)), closes [#1733](https://github.com/OpenTrons/opentrons/issues/1733)
* **api:** Add clear method to RPC SessionManager ([#1969](https://github.com/OpenTrons/opentrons/issues/1969)) ([8228e6d](https://github.com/OpenTrons/opentrons/commit/8228e6d))
* **api:** Add endpoints to get robot logs ([#1928](https://github.com/OpenTrons/opentrons/issues/1928)) ([9224719](https://github.com/OpenTrons/opentrons/commit/9224719))
* **api:** add magdeck api object ([#1925](https://github.com/OpenTrons/opentrons/issues/1925)) ([b016eec](https://github.com/OpenTrons/opentrons/commit/b016eec)), closes [#1889](https://github.com/OpenTrons/opentrons/issues/1889) [#1887](https://github.com/OpenTrons/opentrons/issues/1887) [#1886](https://github.com/OpenTrons/opentrons/issues/1886) [#1645](https://github.com/OpenTrons/opentrons/issues/1645)
* **api:** Add tempdeck api object ([#1962](https://github.com/OpenTrons/opentrons/issues/1962)) ([cb7f107](https://github.com/OpenTrons/opentrons/commit/cb7f107)), closes [#1965](https://github.com/OpenTrons/opentrons/issues/1965) [#1648](https://github.com/OpenTrons/opentrons/issues/1648) [#1649](https://github.com/OpenTrons/opentrons/issues/1649)
* **api:** Brings back the shake after drop-tip ([#1871](https://github.com/OpenTrons/opentrons/issues/1871)) ([304c71d](https://github.com/OpenTrons/opentrons/commit/304c71d))
* **app:** Add and implement module selectors in calibration ([#1895](https://github.com/OpenTrons/opentrons/issues/1895)) ([2cf1b4d](https://github.com/OpenTrons/opentrons/commit/2cf1b4d))
* **app:** Add continuous polling to modules during run ([#1961](https://github.com/OpenTrons/opentrons/issues/1961)) ([5f7d6f4](https://github.com/OpenTrons/opentrons/commit/5f7d6f4))
* **app:** Add deck map to module review modal ([#1910](https://github.com/OpenTrons/opentrons/issues/1910)) ([f2e63e3](https://github.com/OpenTrons/opentrons/commit/f2e63e3)), closes [#1737](https://github.com/OpenTrons/opentrons/issues/1737)
* **app:** Add realtime status TempDeck card to run panel ([#1932](https://github.com/OpenTrons/opentrons/issues/1932)) ([75c8df4](https://github.com/OpenTrons/opentrons/commit/75c8df4)), closes [#1740](https://github.com/OpenTrons/opentrons/issues/1740)
* **app:** Add support for modules to RPC API client ([#1891](https://github.com/OpenTrons/opentrons/issues/1891)) ([331305f](https://github.com/OpenTrons/opentrons/commit/331305f))
* **app:** Render calibrate to bottom instructions when enabled ([#1865](https://github.com/OpenTrons/opentrons/issues/1865)) ([c427599](https://github.com/OpenTrons/opentrons/commit/c427599))
* **app:** Show connect modules modal when session modules detected ([#1897](https://github.com/OpenTrons/opentrons/issues/1897)) ([8306130](https://github.com/OpenTrons/opentrons/commit/8306130)), closes [#1738](https://github.com/OpenTrons/opentrons/issues/1738)
* **app:** Show module name over labware on deckmaps ([#1913](https://github.com/OpenTrons/opentrons/issues/1913)) ([c40905b](https://github.com/OpenTrons/opentrons/commit/c40905b)), closes [#1739](https://github.com/OpenTrons/opentrons/issues/1739)
* **app:** Show modules on review and calibration deckmaps ([#1898](https://github.com/OpenTrons/opentrons/issues/1898)) ([5917a2b](https://github.com/OpenTrons/opentrons/commit/5917a2b))
* **app:** Wire modules card to API calls (and keep stubbed response) ([#1860](https://github.com/OpenTrons/opentrons/issues/1860)) ([a30912f](https://github.com/OpenTrons/opentrons/commit/a30912f))
* **comp:** Add IntervalWrapper to interaction enhancers ([#1942](https://github.com/OpenTrons/opentrons/issues/1942)) ([21e1869](https://github.com/OpenTrons/opentrons/commit/21e1869))
* **components:** implement hover tooltip and include react popper ([#1855](https://github.com/OpenTrons/opentrons/issues/1855)) ([c44e0eb](https://github.com/OpenTrons/opentrons/commit/c44e0eb)), closes [#921](https://github.com/OpenTrons/opentrons/issues/921)
* **components:** restyle field caption ([#1991](https://github.com/OpenTrons/opentrons/issues/1991)) ([910b510](https://github.com/OpenTrons/opentrons/commit/910b510)), closes [#1936](https://github.com/OpenTrons/opentrons/issues/1936)
* **compute:** Use IPv4 link-local ethernet networking ([#1970](https://github.com/OpenTrons/opentrons/issues/1970)) ([094ca28](https://github.com/OpenTrons/opentrons/commit/094ca28))
* **protocol-designer:** add continue to design button to file data page ([#1876](https://github.com/OpenTrons/opentrons/issues/1876)) ([cd8ea5e](https://github.com/OpenTrons/opentrons/commit/cd8ea5e)), closes [#1782](https://github.com/OpenTrons/opentrons/issues/1782)
* **protocol-designer:** add help link to PD nav ([#1945](https://github.com/OpenTrons/opentrons/issues/1945)) ([1525cf5](https://github.com/OpenTrons/opentrons/commit/1525cf5)), closes [#1941](https://github.com/OpenTrons/opentrons/issues/1941)
* **protocol-designer:** add max volume to ingred selection modal volume field ([#1993](https://github.com/OpenTrons/opentrons/issues/1993)) ([807c289](https://github.com/OpenTrons/opentrons/commit/807c289)), closes [#1835](https://github.com/OpenTrons/opentrons/issues/1835)
* **protocol-designer:** alert user of unsaved changes to protocol ([#1856](https://github.com/OpenTrons/opentrons/issues/1856)) ([e195363](https://github.com/OpenTrons/opentrons/commit/e195363)), closes [#1602](https://github.com/OpenTrons/opentrons/issues/1602)
* **protocol-designer:** auto fill well volume field if inferrable ([#1870](https://github.com/OpenTrons/opentrons/issues/1870)) ([ab5a40e](https://github.com/OpenTrons/opentrons/commit/ab5a40e)), closes [#1668](https://github.com/OpenTrons/opentrons/issues/1668)
* **protocol-designer:** change copy for pipette missing tip error ([#1915](https://github.com/OpenTrons/opentrons/issues/1915)) ([cd8b920](https://github.com/OpenTrons/opentrons/commit/cd8b920)), closes [#1815](https://github.com/OpenTrons/opentrons/issues/1815) [#1880](https://github.com/OpenTrons/opentrons/issues/1880) [#1815](https://github.com/OpenTrons/opentrons/issues/1815)
* **protocol-designer:** change copy ingredients -> liquid ([#1905](https://github.com/OpenTrons/opentrons/issues/1905)) ([9f9b989](https://github.com/OpenTrons/opentrons/commit/9f9b989)), closes [#1864](https://github.com/OpenTrons/opentrons/issues/1864)
* **protocol-designer:** deactivate non-beta step settings, add tooltip ([#1875](https://github.com/OpenTrons/opentrons/issues/1875)) ([267b5b3](https://github.com/OpenTrons/opentrons/commit/267b5b3)), closes [#1873](https://github.com/OpenTrons/opentrons/issues/1873)
* **protocol-designer:** enable user to swap pipette mounts ([#1883](https://github.com/OpenTrons/opentrons/issues/1883)) ([d5e40cd](https://github.com/OpenTrons/opentrons/commit/d5e40cd)), closes [#1536](https://github.com/OpenTrons/opentrons/issues/1536)
* **protocol-designer:** implement move labware in place of copy ([#1938](https://github.com/OpenTrons/opentrons/issues/1938)) ([c51ce66](https://github.com/OpenTrons/opentrons/commit/c51ce66)), closes [#1908](https://github.com/OpenTrons/opentrons/issues/1908)
* **protocol-designer:** make form warnings & errors match TimelineAlerts ([#1924](https://github.com/OpenTrons/opentrons/issues/1924)) ([c355be8](https://github.com/OpenTrons/opentrons/commit/c355be8)), closes [#1882](https://github.com/OpenTrons/opentrons/issues/1882)
* **protocol-designer:** make pipettes eagerly drop tips ([#1946](https://github.com/OpenTrons/opentrons/issues/1946)) ([9fb0725](https://github.com/OpenTrons/opentrons/commit/9fb0725)), closes [#1706](https://github.com/OpenTrons/opentrons/issues/1706)
* **protocol-designer:** make WellSelectionInput label change for multi-channel pipette ([#1927](https://github.com/OpenTrons/opentrons/issues/1927)) ([7df3c29](https://github.com/OpenTrons/opentrons/commit/7df3c29)), closes [#1537](https://github.com/OpenTrons/opentrons/issues/1537)
* **protocol-designer:** re-order and restyle file sidebar buttons ([#1926](https://github.com/OpenTrons/opentrons/issues/1926)) ([4ae1f5b](https://github.com/OpenTrons/opentrons/commit/4ae1f5b)), closes [#1784](https://github.com/OpenTrons/opentrons/issues/1784)
* **protocol-designer:** refactor and restyle LabwareSelectionModal ([#1929](https://github.com/OpenTrons/opentrons/issues/1929)) ([7c9891e](https://github.com/OpenTrons/opentrons/commit/7c9891e))
* **protocol-designer:** refactor and restyle timeline terminal items ([#1967](https://github.com/OpenTrons/opentrons/issues/1967)) ([a2421fd](https://github.com/OpenTrons/opentrons/commit/a2421fd)), closes [#1706](https://github.com/OpenTrons/opentrons/issues/1706) [#1930](https://github.com/OpenTrons/opentrons/issues/1930) [#1974](https://github.com/OpenTrons/opentrons/issues/1974)
* **protocol-designer:** remove disposal volume field from all but distribute ([#1868](https://github.com/OpenTrons/opentrons/issues/1868)) ([7d98355](https://github.com/OpenTrons/opentrons/commit/7d98355)), closes [#1867](https://github.com/OpenTrons/opentrons/issues/1867)
* **protocol-designer:** restyle labware hover buttons ([#1916](https://github.com/OpenTrons/opentrons/issues/1916)) ([799d1b1](https://github.com/OpenTrons/opentrons/commit/799d1b1)), closes [#1519](https://github.com/OpenTrons/opentrons/issues/1519)
* **protocol-designer:** save version in PD file with git-describe ([#1987](https://github.com/OpenTrons/opentrons/issues/1987)) ([7040727](https://github.com/OpenTrons/opentrons/commit/7040727))
* **protocol-designer:** show no pipette on mount in file details ([#1917](https://github.com/OpenTrons/opentrons/issues/1917)) ([74e077c](https://github.com/OpenTrons/opentrons/commit/74e077c)), closes [#1909](https://github.com/OpenTrons/opentrons/issues/1909) [#1783](https://github.com/OpenTrons/opentrons/issues/1783)
* **protocol-designer:** support tiprack-to-pipette assignment ([#1866](https://github.com/OpenTrons/opentrons/issues/1866)) ([6a4f19d](https://github.com/OpenTrons/opentrons/commit/6a4f19d)), closes [#1573](https://github.com/OpenTrons/opentrons/issues/1573)
* **protocol-designer:** swap pen icons to pencil ([#1906](https://github.com/OpenTrons/opentrons/issues/1906)) ([70a9fc0](https://github.com/OpenTrons/opentrons/commit/70a9fc0)), closes [#1861](https://github.com/OpenTrons/opentrons/issues/1861)
* **protocol-designer:** switch well order colors ([#1878](https://github.com/OpenTrons/opentrons/issues/1878)) ([a86aa3e](https://github.com/OpenTrons/opentrons/commit/a86aa3e)), closes [#1862](https://github.com/OpenTrons/opentrons/issues/1862)
* **protocol-designer:** update copy for 'no tip on pipette' error ([#1994](https://github.com/OpenTrons/opentrons/issues/1994)) ([3a64530](https://github.com/OpenTrons/opentrons/commit/3a64530)), closes [#1975](https://github.com/OpenTrons/opentrons/issues/1975)
* **protocol-designer:** update well selection modal's TitleBar ([#1884](https://github.com/OpenTrons/opentrons/issues/1884)) ([8ce9a4c](https://github.com/OpenTrons/opentrons/commit/8ce9a4c)), closes [#1502](https://github.com/OpenTrons/opentrons/issues/1502)


### Performance Improvements

* **api:** Set axis-testing speed to 8mm/sec to avoid resonance ([#1912](https://github.com/OpenTrons/opentrons/issues/1912)) ([d7bb03b](https://github.com/OpenTrons/opentrons/commit/d7bb03b))





<a name="3.3.0-beta.0"></a>
# [3.3.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.3.0-beta.0) (2018-07-12)


### Bug Fixes

* **api:** Allows floating-point temperatures to be set/read to/from temp-deck ([#1798](https://github.com/Opentrons/opentrons/issues/1798)) ([856134a](https://github.com/Opentrons/opentrons/commit/856134a))
* **api:** Fix QC script which uses 85% current to use default speeds for Y axis ([#1802](https://github.com/Opentrons/opentrons/issues/1802)) ([aa8a319](https://github.com/Opentrons/opentrons/commit/aa8a319))
* **api:** Remove incorrect call to `cache_instrument_models` ([#1810](https://github.com/Opentrons/opentrons/issues/1810)) ([2f80ece](https://github.com/Opentrons/opentrons/commit/2f80ece))
* **app:** Call GET /pipettes before starting calibration ([#1830](https://github.com/Opentrons/opentrons/issues/1830)) ([011a3a8](https://github.com/Opentrons/opentrons/commit/011a3a8))
* **app:** Disable calibration page unless protocol is fresh ([#1821](https://github.com/Opentrons/opentrons/issues/1821)) ([c9168c8](https://github.com/Opentrons/opentrons/commit/c9168c8)), closes [#1817](https://github.com/Opentrons/opentrons/issues/1817)
* **app:** Make WiFi card more lenient and understandable ([#1771](https://github.com/Opentrons/opentrons/issues/1771)) ([6f2f37d](https://github.com/Opentrons/opentrons/commit/6f2f37d))
* **app:** Remove holdover /calibrate/instruments missed by [#1765](https://github.com/Opentrons/opentrons/issues/1765) ([#1787](https://github.com/Opentrons/opentrons/issues/1787)) ([03dd305](https://github.com/Opentrons/opentrons/commit/03dd305))
* **app:** Remove tip-probed check in calibrator selector ([#1847](https://github.com/Opentrons/opentrons/issues/1847)) ([bb50677](https://github.com/Opentrons/opentrons/commit/bb50677))
* **app:** Show spinner during home on deck calibration exit ([#1760](https://github.com/Opentrons/opentrons/issues/1760)) ([b6999a8](https://github.com/Opentrons/opentrons/commit/b6999a8)), closes [#1613](https://github.com/Opentrons/opentrons/issues/1613)
* **components:** fix Deck component viewBox ([#1807](https://github.com/Opentrons/opentrons/issues/1807)) ([bff921f](https://github.com/Opentrons/opentrons/commit/bff921f))
* **components:** Make preventDefault call in HandleKeypress opt-in ([#1768](https://github.com/Opentrons/opentrons/issues/1768)) ([9e64fb2](https://github.com/Opentrons/opentrons/commit/9e64fb2)), closes [#1764](https://github.com/Opentrons/opentrons/issues/1764)
* **protocol-designer:** allow scroll when NewFileModal too tall ([#1777](https://github.com/Opentrons/opentrons/issues/1777)) ([e6238ab](https://github.com/Opentrons/opentrons/commit/e6238ab)), closes [#1776](https://github.com/Opentrons/opentrons/issues/1776)
* **protocol-designer:** do not navigate on FilePage form submit ([8f98a08](https://github.com/Opentrons/opentrons/commit/8f98a08))
* **protocol-designer:** fix labware copy mirroring ([#1859](https://github.com/Opentrons/opentrons/issues/1859)) ([3742bb7](https://github.com/Opentrons/opentrons/commit/3742bb7)), closes [#1616](https://github.com/Opentrons/opentrons/issues/1616)


### Features

* **api:** Add advanced settings endpoints to api server ([#1786](https://github.com/Opentrons/opentrons/issues/1786)) ([b89b4ea](https://github.com/Opentrons/opentrons/commit/b89b4ea)), closes [#1656](https://github.com/Opentrons/opentrons/issues/1656)
* **api:** Add GET /modules endpoint with stub for module discovery ([#1858](https://github.com/Opentrons/opentrons/issues/1858)) ([8dedb68](https://github.com/Opentrons/opentrons/commit/8dedb68))
* **api:** Add Magdeck driver ([#1840](https://github.com/Opentrons/opentrons/issues/1840)) ([e731c78](https://github.com/Opentrons/opentrons/commit/e731c78)), closes [#1809](https://github.com/Opentrons/opentrons/issues/1809)
* **app:** Add advanced settings card to robot settings page ([#1762](https://github.com/Opentrons/opentrons/issues/1762)) ([b70f9b8](https://github.com/Opentrons/opentrons/commit/b70f9b8)), closes [#1632](https://github.com/Opentrons/opentrons/issues/1632)
* **app:** Add attached modules card UI to instrument settings page ([#1854](https://github.com/Opentrons/opentrons/issues/1854)) ([3a57807](https://github.com/Opentrons/opentrons/commit/3a57807)), closes [#1735](https://github.com/Opentrons/opentrons/issues/1735)
* **app:** Add GET /modules to API client ([#1837](https://github.com/Opentrons/opentrons/issues/1837)) ([da88936](https://github.com/Opentrons/opentrons/commit/da88936))
* **app:** Add keyboard shortcuts to jog controls ([#1761](https://github.com/Opentrons/opentrons/issues/1761)) ([7c51e98](https://github.com/Opentrons/opentrons/commit/7c51e98)), closes [#1476](https://github.com/Opentrons/opentrons/issues/1476)
* **app:** Add modules and pipettes settings page ([#1785](https://github.com/Opentrons/opentrons/issues/1785)) ([7ce12b3](https://github.com/Opentrons/opentrons/commit/7ce12b3))
* **app:** Add robot settings toggles to Advanced Settings card ([#1795](https://github.com/Opentrons/opentrons/issues/1795)) ([73f7528](https://github.com/Opentrons/opentrons/commit/73f7528)), closes [#1632](https://github.com/Opentrons/opentrons/issues/1632)
* **app:** Log tracebacks from failed RPC calls  ([#1846](https://github.com/Opentrons/opentrons/issues/1846)) ([0c07c52](https://github.com/Opentrons/opentrons/commit/0c07c52)), closes [#1841](https://github.com/Opentrons/opentrons/issues/1841)
* **components:** use labware defs from shared-data for Deck component ([26493f4](https://github.com/Opentrons/opentrons/commit/26493f4))
* **protocol-designer:** add diagrams & copy to new file modal ([#1766](https://github.com/Opentrons/opentrons/issues/1766)) ([6ad44b6](https://github.com/Opentrons/opentrons/commit/6ad44b6)), closes [#1695](https://github.com/Opentrons/opentrons/issues/1695)
* **protocol-designer:** add form level validation errors and warnings ([#1823](https://github.com/Opentrons/opentrons/issues/1823)) ([9cdd66f](https://github.com/Opentrons/opentrons/commit/9cdd66f)), closes [#1090](https://github.com/Opentrons/opentrons/issues/1090) [#1595](https://github.com/Opentrons/opentrons/issues/1595) [#1592](https://github.com/Opentrons/opentrons/issues/1592) [#1594](https://github.com/Opentrons/opentrons/issues/1594)
* **protocol-designer:** allow file upload ([11f582b](https://github.com/Opentrons/opentrons/commit/11f582b))
* **protocol-designer:** change copy for deck setup clarity ([#1839](https://github.com/Opentrons/opentrons/issues/1839)) ([a713ed0](https://github.com/Opentrons/opentrons/commit/a713ed0)), closes [#1811](https://github.com/Opentrons/opentrons/issues/1811)
* **protocol-designer:** change edit labware nickname icon to pen ([#1842](https://github.com/Opentrons/opentrons/issues/1842)) ([512f62c](https://github.com/Opentrons/opentrons/commit/512f62c)), closes [#1660](https://github.com/Opentrons/opentrons/issues/1660)
* **protocol-designer:** clear everything when new protocol is created ([#1852](https://github.com/Opentrons/opentrons/issues/1852)) ([eab21a3](https://github.com/Opentrons/opentrons/commit/eab21a3)), closes [#970](https://github.com/Opentrons/opentrons/issues/970)
* **protocol-designer:** implement full protocol file loading ([#1804](https://github.com/Opentrons/opentrons/issues/1804)) ([bf57e9a](https://github.com/Opentrons/opentrons/commit/bf57e9a)), closes [#1604](https://github.com/Opentrons/opentrons/issues/1604)
* **protocol-designer:** make timeline warnings dismissable ([#1791](https://github.com/Opentrons/opentrons/issues/1791)) ([f9b1dee](https://github.com/Opentrons/opentrons/commit/f9b1dee))
* **protocol-designer:** move Delete button from MoreOptionsModal to StepEditForm ([#1770](https://github.com/Opentrons/opentrons/issues/1770)) ([3df8444](https://github.com/Opentrons/opentrons/commit/3df8444)), closes [#1555](https://github.com/Opentrons/opentrons/issues/1555)
* **protocol-designer:** pipette tiprack assignment ([e0555af](https://github.com/Opentrons/opentrons/commit/e0555af)), closes [#1750](https://github.com/Opentrons/opentrons/issues/1750)
* **protocol-designer:** remove numbers from step names ([#1838](https://github.com/Opentrons/opentrons/issues/1838)) ([2277e15](https://github.com/Opentrons/opentrons/commit/2277e15)), closes [#1820](https://github.com/Opentrons/opentrons/issues/1820)
* **protocol-designer:** save all PD-required protocol data to file ([#1796](https://github.com/Opentrons/opentrons/issues/1796)) ([9403898](https://github.com/Opentrons/opentrons/commit/9403898)), closes [#1789](https://github.com/Opentrons/opentrons/issues/1789)
* **protocol-designer:** show file upload errors in modal ([#1829](https://github.com/Opentrons/opentrons/issues/1829)) ([5ffed81](https://github.com/Opentrons/opentrons/commit/5ffed81)), closes [#1610](https://github.com/Opentrons/opentrons/issues/1610)
* **protocol-designer:** support distribute with volume over pipette max ([#1827](https://github.com/Opentrons/opentrons/issues/1827)) ([9b1a3df](https://github.com/Opentrons/opentrons/commit/9b1a3df)), closes [#1763](https://github.com/Opentrons/opentrons/issues/1763)
* **protocol-designer:** user can collapse selected StepItem ([ed02098](https://github.com/Opentrons/opentrons/commit/ed02098)), closes [#1681](https://github.com/Opentrons/opentrons/issues/1681)
* **shared-data:** annotate labware with format and other metadata ([9d4082d](https://github.com/Opentrons/opentrons/commit/9d4082d))
* **update-server:** Add basic update server ([#1701](https://github.com/Opentrons/opentrons/issues/1701)) ([02d92c7](https://github.com/Opentrons/opentrons/commit/02d92c7))
* **update-server:** Add endpoint to update API Server, ot2serverlib, and Smoothie FW ([#1797](https://github.com/Opentrons/opentrons/issues/1797)) ([464ed7f](https://github.com/Opentrons/opentrons/commit/464ed7f)), closes [#1549](https://github.com/Opentrons/opentrons/issues/1549)
* **update-server:** Add restart endpoint to Update Server and shorten restart sleep to 1s ([#1793](https://github.com/Opentrons/opentrons/issues/1793)) ([1bf8bd7](https://github.com/Opentrons/opentrons/commit/1bf8bd7)), closes [#1794](https://github.com/Opentrons/opentrons/issues/1794)


### Performance Improvements

* **api:** Slightly increase probing speed, avoid resonance and pipette shaking ([#1801](https://github.com/Opentrons/opentrons/issues/1801)) ([8f28ad4](https://github.com/Opentrons/opentrons/commit/8f28ad4))





<a name="3.2.0"></a>
# [3.2.0](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.3...v3.2.0) (2018-07-10)

**Note:** Version bump only for package opentrons





<a name="3.2.0-beta.3"></a>
# [3.2.0-beta.3](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.2...v3.2.0-beta.3) (2018-06-25)


### Bug Fixes

* **api:** Fix row order in labware.create ([#1749](https://github.com/Opentrons/opentrons/issues/1749)) ([40ac527](https://github.com/Opentrons/opentrons/commit/40ac527)), closes [#1748](https://github.com/Opentrons/opentrons/issues/1748)
* **app:** Fix overlay and redirect duplication in robot settings page ([#1759](https://github.com/Opentrons/opentrons/issues/1759)) ([ce94b22](https://github.com/Opentrons/opentrons/commit/ce94b22))
* **components:** Resize main navbar and title bar to match designs ([#1757](https://github.com/Opentrons/opentrons/issues/1757)) ([4d46011](https://github.com/Opentrons/opentrons/commit/4d46011)), closes [#1285](https://github.com/Opentrons/opentrons/issues/1285)


### Features

* **protocol-designer:** allow button to look hovered via .hover class ([#1732](https://github.com/Opentrons/opentrons/issues/1732)) ([04173b7](https://github.com/Opentrons/opentrons/commit/04173b7)), closes [#1690](https://github.com/Opentrons/opentrons/issues/1690)





<a name="3.2.0-beta.2"></a>
# [3.2.0-beta.2](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.1...v3.2.0-beta.2) (2018-06-22)


### Bug Fixes

* **api:** Sanitize wifi inputs to handle special characters ([#1743](https://github.com/Opentrons/opentrons/issues/1743)) ([18f8d0f](https://github.com/Opentrons/opentrons/commit/18f8d0f))
* **protocol-designer:** set max width of form field rows ([#1723](https://github.com/Opentrons/opentrons/issues/1723)) ([c3a0dc6](https://github.com/Opentrons/opentrons/commit/c3a0dc6)), closes [#1488](https://github.com/Opentrons/opentrons/issues/1488)


### Features

* **api:** Log API server and Smoothie FW versions on API server boot ([#1728](https://github.com/Opentrons/opentrons/issues/1728)) ([6c3c3c4](https://github.com/Opentrons/opentrons/commit/6c3c3c4)), closes [#1120](https://github.com/Opentrons/opentrons/issues/1120)
* **app:** Connect home button to API on robot settings ([#1726](https://github.com/Opentrons/opentrons/issues/1726)) ([103d8c0](https://github.com/Opentrons/opentrons/commit/103d8c0)), closes [#856](https://github.com/Opentrons/opentrons/issues/856)
* **protocol-designer:** disallow saving ingred form w/o name & volume ([#1724](https://github.com/Opentrons/opentrons/issues/1724)) ([206d378](https://github.com/Opentrons/opentrons/commit/206d378)), closes [#1609](https://github.com/Opentrons/opentrons/issues/1609) [#1671](https://github.com/Opentrons/opentrons/issues/1671)





<a name="3.2.0-beta.1"></a>
# [3.2.0-beta.1](https://github.com/Opentrons/opentrons/compare/v3.2.0-beta.0...v3.2.0-beta.1) (2018-06-19)


### Bug Fixes

* **api:** Add ignore update endpoint implementation to fallback file ([#1720](https://github.com/Opentrons/opentrons/issues/1720)) ([2a68dc5](https://github.com/Opentrons/opentrons/commit/2a68dc5))
* **api:** Fix RPC reporting wrong models for v1.3 pipettes ([#1691](https://github.com/Opentrons/opentrons/issues/1691)) ([e302382](https://github.com/Opentrons/opentrons/commit/e302382))
* **api:** Fixes bug in replacing substring of old p50 pipettes written with v13 instead of v1.3 ([#1717](https://github.com/Opentrons/opentrons/issues/1717)) ([1322055](https://github.com/Opentrons/opentrons/commit/1322055))
* **app:** Enable robot update even if API reports up-to-date ([#1721](https://github.com/Opentrons/opentrons/issues/1721)) ([16bb8eb](https://github.com/Opentrons/opentrons/commit/16bb8eb))
* **app:** Fix alignment issues in modals, fix titlebar on page ([#1719](https://github.com/Opentrons/opentrons/issues/1719)) ([ccf4881](https://github.com/Opentrons/opentrons/commit/ccf4881))
* **app:** Switch to hash routes to enable goBack in prod ([#1722](https://github.com/Opentrons/opentrons/issues/1722)) ([9bf2398](https://github.com/Opentrons/opentrons/commit/9bf2398))
* **protocol-designer:** fix styles for SelectionRect ([#1714](https://github.com/Opentrons/opentrons/issues/1714)) ([295940e](https://github.com/Opentrons/opentrons/commit/295940e))


### Features

* **api:** Add endpoints to handle API update ignores ([#1693](https://github.com/Opentrons/opentrons/issues/1693)) ([8c5eae9](https://github.com/Opentrons/opentrons/commit/8c5eae9))
* **app:** Add toggle to turn on/off robot rail lights ([#1710](https://github.com/Opentrons/opentrons/issues/1710)) ([d2c182c](https://github.com/Opentrons/opentrons/commit/d2c182c)), closes [#1684](https://github.com/Opentrons/opentrons/issues/1684)
* **app:** Show connect alert banner on successful connection ([#1700](https://github.com/Opentrons/opentrons/issues/1700)) ([70cd8b2](https://github.com/Opentrons/opentrons/commit/70cd8b2)), closes [#1314](https://github.com/Opentrons/opentrons/issues/1314)
* **protocol-designer:** clarify editing file details ([d03d42f](https://github.com/Opentrons/opentrons/commit/d03d42f)), closes [#1504](https://github.com/Opentrons/opentrons/issues/1504) [#1661](https://github.com/Opentrons/opentrons/issues/1661)





<a name="3.2.0-beta.0"></a>
# [3.2.0-beta.0](https://github.com/Opentrons/opentrons/compare/v3.1.2...v3.2.0-beta.0) (2018-06-13)


### Bug Fixes

* **api:** Fallback for update endpoints ([#1669](https://github.com/Opentrons/opentrons/issues/1669)) ([3ce97df](https://github.com/Opentrons/opentrons/commit/3ce97df))
* **app:** Add priority 2 analytics events ([#1627](https://github.com/Opentrons/opentrons/issues/1627)) ([08e622e](https://github.com/Opentrons/opentrons/commit/08e622e)), closes [#1553](https://github.com/Opentrons/opentrons/issues/1553)
* **app:** Hide modal title in pick up tip spinner ([#1635](https://github.com/Opentrons/opentrons/issues/1635)) ([1509f1a](https://github.com/Opentrons/opentrons/commit/1509f1a)), closes [#1630](https://github.com/Opentrons/opentrons/issues/1630)
* **app:** Reset calibration state on reset run ([#1682](https://github.com/Opentrons/opentrons/issues/1682)) ([689e586](https://github.com/Opentrons/opentrons/commit/689e586)), closes [#1597](https://github.com/Opentrons/opentrons/issues/1597)
* **app:** Tip probe clears labware calibration progress ([#1634](https://github.com/Opentrons/opentrons/issues/1634)) ([9d216a4](https://github.com/Opentrons/opentrons/commit/9d216a4)), closes [#1620](https://github.com/Opentrons/opentrons/issues/1620)
* **app:** Update cancel button text ([#1644](https://github.com/Opentrons/opentrons/issues/1644)) ([c0870d8](https://github.com/Opentrons/opentrons/commit/c0870d8)), closes [#1639](https://github.com/Opentrons/opentrons/issues/1639)
* **app:** Update Z calibration slot 5 diagram ([#1638](https://github.com/Opentrons/opentrons/issues/1638)) ([35e50cb](https://github.com/Opentrons/opentrons/commit/35e50cb)), closes [#1608](https://github.com/Opentrons/opentrons/issues/1608)
* **app-shell:** Remove Reload from View menu unless devtools are active ([#1659](https://github.com/Opentrons/opentrons/issues/1659)) ([b7cd58c](https://github.com/Opentrons/opentrons/commit/b7cd58c)), closes [#1618](https://github.com/Opentrons/opentrons/issues/1618)
* **protocol-designer:** fix bug with multi-channel substeps ([#1663](https://github.com/Opentrons/opentrons/issues/1663)) ([1fca294](https://github.com/Opentrons/opentrons/commit/1fca294))


### Features

* **app:** Add firmware version to robot settings page ([#1633](https://github.com/Opentrons/opentrons/issues/1633)) ([9a32383](https://github.com/Opentrons/opentrons/commit/9a32383))
* **app:** Add resources page to more section ([#1631](https://github.com/Opentrons/opentrons/issues/1631)) ([443afc0](https://github.com/Opentrons/opentrons/commit/443afc0)), closes [#1607](https://github.com/Opentrons/opentrons/issues/1607)
* **app:** Capture and display errors during deck calibration ([#1680](https://github.com/Opentrons/opentrons/issues/1680)) ([4f75ed7](https://github.com/Opentrons/opentrons/commit/4f75ed7)), closes [#1641](https://github.com/Opentrons/opentrons/issues/1641)
* **app:** Pass server-lib and firmware to /server/update ([#1679](https://github.com/Opentrons/opentrons/issues/1679)) ([4dc8a76](https://github.com/Opentrons/opentrons/commit/4dc8a76)), closes [#1115](https://github.com/Opentrons/opentrons/issues/1115)
* **app:** Toggle devtools feature flag in app settings ([#1678](https://github.com/Opentrons/opentrons/issues/1678)) ([6676903](https://github.com/Opentrons/opentrons/commit/6676903)), closes [#1632](https://github.com/Opentrons/opentrons/issues/1632)
* **components:** make info title text selected-dark ([5eeec11](https://github.com/Opentrons/opentrons/commit/5eeec11))
* **protocol-designer:** Darken font in labware selection modal ([#1646](https://github.com/Opentrons/opentrons/issues/1646)) ([aacc76c](https://github.com/Opentrons/opentrons/commit/aacc76c)), closes [#1341](https://github.com/Opentrons/opentrons/issues/1341)
* **protocol-designer:** elaborate on deck setup in title bar ([#1637](https://github.com/Opentrons/opentrons/issues/1637)) ([6bda925](https://github.com/Opentrons/opentrons/commit/6bda925)), closes [#1339](https://github.com/Opentrons/opentrons/issues/1339)
* **protocol-designer:** increase selected pipette font-size ([#1629](https://github.com/Opentrons/opentrons/issues/1629)) ([b90e767](https://github.com/Opentrons/opentrons/commit/b90e767)), closes [#1325](https://github.com/Opentrons/opentrons/issues/1325)
* **protocol-designer:** update behavior for well setup ([#1511](https://github.com/Opentrons/opentrons/issues/1511)) ([8c611b5](https://github.com/Opentrons/opentrons/commit/8c611b5))


### Performance Improvements

* **api:** decrease Y and ZA currents ([#1647](https://github.com/Opentrons/opentrons/issues/1647)) ([3fe7358](https://github.com/Opentrons/opentrons/commit/3fe7358))
