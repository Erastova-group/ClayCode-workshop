       ClayCode workshop

# ClayCode Workshop

## Contents

## Introduction

Creating accurate clay models for classical molecular dynamics (MD) simulations can be a time-consuming and error-prone process. ClayCode is a Python package that can be used to automate this process.

The package is designed with default options to require only minimal user input. At the same time, it is flexible for users to specify their own build directives if they wish to do so.

A summary of all currently available and future unit cell (UC) types in the ClayCode UC database can be found in [table 1](#tab:ucs).

Summary of available and future clay and layered double hydroxide (LDH) UC types in the ClayCode UC database with respective with American Mineralogist Crystal Structure Database (AMCSD) IDs.

| UC type | Description | AMCSD code |
| --- | --- | --- |
| TD21 | trans\-dioctahedral 2:1 UC | 0007180 |
| CD21 | cis\-dioctahedral 2:1 UC | 0002868 |
| TD11 | trans\-dioctahedral 1:1 UC |     |
| CD11 | cis\-dioctahedral 1:1 UC |     |
| T21 | trioctahedral 2:1 UC | 0015819 |
| T11 | trioctahedral 2:1 UC |     |
| LDH21 | 2:1 LDH UC |     |
| LDH31 | 3:1 LDH UC | 0007912 |

A list of all substitutions in the database UCs are given in [table 2](#tab:subs).


Table 2: Summary of tetrahedral (T) and octahedral (O) substitutions in database dioctahedral (dio) and trioctahedral (trio) UCs.

| sheet | UC type | substituted atom |     |     | substituting atom |     | charge (e UC\-1) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| T   | dio, trio | Si4+ | (st) | →   | Al3+ | (at) | \-1.0 |
| T   | dio, trio | Si4+ | (st) | →   | Fe3+ | (fet) | \-1.0 |
| O   | dio | Al3+ | (ao) | →   | Fe2+ | (fe2) | \-1.0 |
| O   | dio | Al3+ | (ao) | →   | Fe3+ | (feo) | 0.0 |
| O   | dio | Al3+ | (ao) | →   | Mg2+ | (mgo) | \-1.0 |
| O   | dio | Fe3+ | (feo) | →   | Al2+ | (ao) | 0.0 |
| O   | dio | Fe3+ | (feo) | →   | Fe2+ | (fe2) | \-1.0 |
| O   | dio | Fe3+ | (feo) | →   | Mg2+ | (mgo) | \-1.0 |
| O   | trio | Mg2+ | (mgo) | →   | Li1+ | (lio) | \-1.0 |

## Getting Started

### Requirements

### Installation

#### Installing ClayCode

*   Download ClayCode from the GitHub repository
*   Either clone the entire repository by opening a terminal and run the following command:
    
    git clone https://github.com/Erastova-group/ClayCode.git
    
    Alternatively, you can download ClayCode as a zip file. To do this, click on the "<> Code" button and select "Download ZIP". Once downloaded, extract the contents of the zip file to a location of your choice.
    
    > Use `Ctrl + Alt + T` to open a terminal window.
    
*   Inside the ClayCode folder, there is the `install.sh` installation file. Use it to install the `ClayCode` package:
    
    bash install.sh
    
    > Use `cd ...` to navigate directories in the terminal.
    
    > When doing this on your own computer, you might need to first install the right version of Python (3.9).
    
*   Once the installation was successful, you can use the package with the command `ClayCode`
    
    > For example, to build a model, the command would be:
    > 
    > ClayCode builder <options>
    

## Building accurate clay models

To build a clay model, the following build instructions need to be provided as files:

1.  Specifications on system size, solvation, number of stacked clay sheets, etc. (in YAML format).
2.  Information about the model chemical composition (either as target stoichiometry (in CSV (comma-separated values) format or as individual UC indices and their ratios in the specifications YAML file)

### Download the workshop repository

*   Download the workshop repository from the GitHub repository: [github.com/hp115/Rip-WS](https://github.com/hp115/Rip-WS)

The following sections contain instructions for using ClayCode to build a clay model by specifying a target stoichiometry and by giving UC indices and their ratios.

### Preparing a clay model with a target composition

The first option is to provide a target composition file in CSV format. This file should contain the target composition of the clay model. For this workshop we suggest setting one of the following Clay Minerals Society source clay compositions ([clays.org/sourceclays\_data/](https://www.clays.org/sourceclays_data/)) as the target:

*   SWy-1/SWy-2/SWy-3
*   SAz1/SAz-2
*   STx-1
*   NG-1
*   NAu-1
*   NAu-2

### Prepare the target composition file

Inside the `builder` folder, you can find a template for the target composition file `target_composition.csv`.

*   Add a new entry for your selected clay.
*   ![target_composition.png](html/images/target_composition.png)
    
    The column header identifies the clay type, the entries below describe the average tetrahedral and octahedral UC occupancies, charges and interlayer ion types and ratios.
    

### Requirements

*   Python3.9
*   Pipx
