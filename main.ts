
/**
 * Control the TCA9548A i2c multiplexer
 */

//% color=#FF6EC7 weight=100 icon="\uf550" block="TCA9548A" advanced=true
//% category="TCA9548A"
namespace TCA9548A {
    let i2cAddr = 0x70
    /**
    * Select the device to control SD0 to SD7
    **/
    //% block="select channel"
    //% blockId=TCA9548A_iselectChannel
    //% channel.min=0 channel.max=7 
    export function selectChannel(channel: number): void {
        pins.i2cWriteNumber(i2cAddr, 1 << channel, NumberFormat.UInt8BE)
        control.waitMicros(50)
    }

    /**
    * Set the i2c address of the  TCA9548A
    **/
    //% block="initialise"
    //% blockId=TCA9548A_init
    export function initialise(address: number): void {
        i2cAddr = address;
    }
}
