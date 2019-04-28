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

### Linker file for QSPI flashloader


