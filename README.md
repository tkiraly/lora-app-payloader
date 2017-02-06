# lora-app-payloader

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg?style=plastic)](https://travis-ci.org/tkiraly/lora-app-payloader)
[![Coveralls](https://img.shields.io/coveralls/tkiraly/lora-app-payloader.svg)](https://coveralls.io/github/tkiraly/lora-app-payloader)
[![David](https://img.shields.io/david/tkiraly/lora-app-payloader.svg?style=plastic)](https://david-dm.org/tkiraly/lora-app-payloader)
[![David](https://img.shields.io/david/dev/tkiraly/lora-app-payloader.svg?style=plastic)](https://david-dm.org/tkiraly/lora-app-payloader)
[![version](https://img.shields.io/npm/v/lora-app-payloader.svg?style=plastic)](http://npm.im/lora-app-payloader)
[![downloads](https://img.shields.io/npm/dm/lora-app-payloader.svg?style=plastic)](https://npm-stat.com/charts.html?package=lora-app-payloader)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=plastic)](https://github.com/semantic-release/semantic-release)


Community driven [LoRa](http://www.lora-alliance.com) end-device payload decoder.

## Installation

```npm
npm install lora-app-payloader --save
```

## Usage

```javascript
var converter = require('lora-app-payloader')
var decoded = converter.parseDecodedPayload('e4a432704160684e4202b5', 'ascoel', 'CO868LR')
console.log(decoded.BatteryLevel) // 100
```
## Contribution

Any kind of contribution to this project is very well welcomed. It aims to have as much payload decoder as possible!
You can contribute through Issues, Pull Requests, or [mail](mailto:kiraly.tamas@outlook.com?Subject=lora-app-payloader%20contribution)
Payload description or device documentation are also appreciated!



## Implementation of devices

### [Ascoel](http://ascoel.it/)

- [ ] CO868LR
  - [ ] Presentation (port 5)
  - [ ] Serial number (port 6)
  - [X] FW release, library release, HW release (port 7)
  - [ ] Battery level (port 8)
  - [X] Alive (port 9)
  - [ ] ACK (port 10)
  - [ ] Specific Sensor Information message (port 50)
- [ ] TH868LR
  - [ ] Presentation (port 5)
  - [ ] Serial number (port 6)
  - [ ] FW release, library release, HW release (port 7)
  - [ ] Battery level (port 8)
  - [X] Alive (port 9)
  - [ ] ACK (port 10)
  - [ ] Specific Sensor Information message (port 50)
- [ ] IR868LR
  - [ ] Presentation (port 5)
  - [ ] Serial number (port 6)
  - [ ] FW release, library release, HW release (port 7)
  - [ ] Battery level (port 8)
  - [X] Alive (port 9)
  - [ ] ACK (port 10)
  - [X] Specific Sensor Information message (port 20)
- [ ] CM868LR
  - [ ] Presentation (port 5)
  - [ ] Serial number (port 6)
  - [ ] FW release, library release, HW release (port 7)
  - [ ] Battery level (port 8)
  - [X] Alive (port 9)
  - [ ] ACK (port 10)
  - [ ] Specific Sensor Information message (port 30)
- [ ] CM868LRTH
  - [ ] Presentation (port 5)
  - [ ] Serial number (port 6)
  - [ ] FW release, library release, HW release (port 7)
  - [ ] Battery level (port 8)
  - [X] Alive (port 9)
  - [ ] ACK (port 10)
  - [ ] Specific Sensor Information message (port 30)

### [Turboes](http://www.turboes.com)


- [X] TBS200
  - [X] Status (uplink)
  - [X] Parameters (uplink)
  - [X] Command (downlink)

## License

ISC License

Copyright (c) 2017, Tamás Király

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

Device APIs are belong to their respective owners.