# micro:bit TCA9548A i2c multiplexer extension

The TCA9548A is a handy little chip that allows your BBC Microbit to interact with multiple I2C devices. By itself, the Microbit can only handle one I2C device at a time. This can be limiting if you want to connect various sensors, displays, or other I2C modules to your project. That's where the TCA9548A comes in!

This chip acts as an I2C multiplexer, essentially working like a multi-lane highway for I2C communication. It allows you to connect up to eight I2C devices to a single I2C port on your Microbit. You can then use software to control which device you want to talk to, selecting them one at a time.

## How does it work?

Benefits of using the TCA9548A with your Microbit:
Connect More Devices: Break the limitation of one I2C device and expand your project's capabilities.
Improved Organization: Keeps your wiring cleaner by using a single I2C connection for multiple devices.
Flexibility: Easily switch between different I2C devices in your code.
Getting Started with the TCA9548A:
To use the TCA9548A, you'll need a breakout board or a custom design that incorporates the chip. These  boards typically provide easy connection points for your I2C devices and the Microbit.

Here's a general overview of using the TCA9548A with your Microbit:

Connect the breakout board: Following the board's instructions, connect the TCA9548A to your Microbit's I2C pins (SDA and SCL).
Write code: You'll need to include libraries that support the TCA9548A to control it from your Microbit. These libraries will typically handle selecting the desired I2C device and then communicating with it through standard I2C functions.
Explore the possibilities! With more I2C devices at your disposal, you can create more complex and interactive projects with your Microbit.
The TCA9548A opens up a world of possibilities for your BBC Microbit projects by allowing you to connect and control multiple I2C devices. With a little bit of research and coding, you can unlock the full potential of this versatile chip and expand the capabilities of your Microbit creations.

## Supported targets

* for PXT/microbit
