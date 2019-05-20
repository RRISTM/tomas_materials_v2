# STM32 external memories example - QSPI
Integration of QSPI memory into your embedded system

## CSP - chip support package

In this repository we will use unified memory and MCU family independent API in all examples. Usage of this API allow you to use complete source code file without any modification in any of your project. This interface functions are:

```c
uint8_t CSP_QUADSPI_Init(void);
uint8_t CSP_QSPI_EraseSector(uint32_t EraseStartAddress ,uint32_t EraseEndAddress);
uint8_t CSP_QSPI_WriteMemory(uint8_t* buffer, uint32_t address, uint32_t buffer_size);
uint8_t CSP_QSPI_EnableMemoryMappedMode(void);
uint8_t CSP_QSPI_Erase_Chip (void);
uint8_t CSP_QSPI_GetInfo    (QSPI_Info* pInfo);
```

Function definition for memory chip is in source pair quadspi_xx.c and quadspi_xx.h, where xx stands for memory salestype. This files should be STM32 family independent.

Additionaly is needed to implement functions, which are called by CSP:

```c
 static uint8_t QSPI_WriteEnable(void);
 static uint8_t QSPI_AutoPollingMemReady(void);
 static uint8_t QSPI_Configuration(void);
```

This list of functions is not exhaustive, some ather chip specific functions may be needed. QSPI_Configuration may be very different from one memory to another one, purpose of this function is:

* Set number of needed dummy bytes in memory registers
* Configure memory to use intended number of lines if needed by memory chip

## QSPI flashloader
For non-volatile external memories is important to have some way how to load data into the memory chip. Tools for debugging STM32 MCUs - STM32 ST-Link Utility and STM32CubeProgrammer use program running from STM32 RAM memory  for external memory programming.

Using project with verified CSP interface is very easy to create flashloader functionality - adding platform independent Loader_Src.c and Dev_inf.c (holding info of external memory structure and parameters) with Dev_inf.h. Then it's only necesarry to link all needed functions according to  STM32 ST-Link Utility and STM32CubeProgrammer expectation.

### Linker file for External Memory Loader
The External memory loader for the ST-Link utility or STM32Cube programmer must have specific position of the code. MAinly whole code must be in RAM memory area.
The first word is reserved for usage by ST-Link utility or STM32Cube programmer. Here the programs will place the BKPT instruction. This wil guaranteee that the program will stop when he leave the Loader functions. Reservation can be done by moving the RAM allocation to point where we want to start like this:

```c
. = . + 0x200;
```

This will move the RAM ld pointer by 0x200. In our case the first are would be NVIC vector table. This is reason whe cannot reserve only 0x4. But the NVIC can be reserved only by multiplies of 0x200(device dependent). Result will looks like this:

```c
  .isr_vector :
  {
  	. = . + 0x200;
    . = ALIGN(4);
    KEEP(*(.isr_vector)) /* Startup code */
    . = ALIGN(4);
  } >RAM :Loader
```

In this code we can see that NVIC interrupt vecotr (.isr_vector section in GCC) is mooved by 0x200. It will be at address 0x20000200. Also we can see that code is inside RAM. Done by:

```
  } >RAM :Loader
```

Plae the NVIC table is optional but if you plant to use the HAL libraries it is neccesary. Some parts of the code require the Delay function also you code can use interrupts. If you code is not useng them you can remove using the .isr_vector section.

Next is necessary to put all your variables on .bss or .data sections plus all library functions like:

```c
  .ARM.extab   : { *(.ARM.extab* .gnu.linkonce.armextab.*) } >RAM
  .ARM : {
    __exidx_start = .;
    *(.ARM.exidx*)
    __exidx_end = .;
  } >RAM :Loader

  .preinit_array     :
  {
    PROVIDE_HIDDEN (__preinit_array_start = .);
    KEEP (*(.preinit_array*))
    PROVIDE_HIDDEN (__preinit_array_end = .);
  } >RAM :Loader
  
  .init_array :
  {
    PROVIDE_HIDDEN (__init_array_start = .);
    KEEP (*(SORT(.init_array.*)))
    KEEP (*(.init_array*))
    PROVIDE_HIDDEN (__init_array_end = .);
  } >RAM :Loader
  
  .fini_array :
  {
    PROVIDE_HIDDEN (__fini_array_start = .);
    KEEP (*(SORT(.fini_array.*)))
    KEEP (*(.fini_array*))
    PROVIDE_HIDDEN (__fini_array_end = .);
  } >RAM :Loader

  /* used by the startup to initialize data */
  _sidata = LOADADDR(.data);

  /* Initialized data sections goes into RAM, load LMA copy after code */
  .data : 
  {
    . = ALIGN(4);
    _sdata = .;        /* create a global symbol at data start */
    *(.data)           /* .data sections */
    *(.data*)          /* .data* sections */

    . = ALIGN(4);
    _edata = .;        /* define a global symbol at data end */
  } >RAM :Loader

  
  /* Uninitialized data section */
  . = ALIGN(4);
  .bss :
  {
    /* This is used by the startup in order to initialize the .bss secion */
    _sbss = .;         /* define a global symbol at bss start */
    __bss_start__ = _sbss;
    *(.bss)
    *(.bss*)
    *(COMMON)

    . = ALIGN(4);
    _ebss = .;         /* define a global symbol at bss end */
    __bss_end__ = _ebss;
  } >RAM :Loader
```

The .ARM, .fini_array, .init_array and .preinit_array are library functions, usually they are present in all GCC linkers. .data is section reserved to initialized variables, here is not necessary to initialize the variale to copy from FLASH to RAM because they will be loaded directly to RAM. .bss section is for uninitialized variables. 

Behind the RAM ontent must be the code area named .text. The area for read only ate .rodata and descriptin for the loader in .DevInfo.

The area for stack is not used in flash loader. The loader will not use it at all the stack is reserved behind last area belogned to .text, .rodate or .DevInfo. And is set to 0x400. 

The rest of the RAM memory is used for as buffer for reading or writing functions. 
If the device is using multipe memories the loader is using only one main memory.










