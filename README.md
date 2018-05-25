# `Caavo` — A basic user interface between the admin and the user or client.

Develop a full stack web app that lets users store their government documents details online in a secure fashion and let them access it whenever needed.

You are expected to create an End-to-End Web app in any tech stack that you are comfortable with, which primarily presents user with forms for filling details of different documents like driving license(license no, name, vehicle category), aadhar card(aadhar no, name, dob); etc, store them and and display them whenever required.

We expect you to write Backend and Frontend for this web app and use a database to store above mentioned details.
their are mainly four modules are their in this project that is registration module,
login module,client module and fourth is Admin module.
#Technology used
AngularJS,Bootstrap,firebase,NodeJS

## Getting Started

To get you started you can simply clone the `Caavo` repository and install the dependencies:

### Prerequisites

You need git to clone the `Caavo` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `Caavo`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `Caavo`

Clone the `angular-seed` repository using git:

```
https://github.com/ohm1993/Caavo.git
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  admin/
     admin.controller.js   -->this is the controller of the admin part
     admin.html          -->this is the view page of admin page
  client/
     client.controller.js  -->this is the controller of the client or user part
     client.html          -->this is the view page for client page      
  Login/                --> this is for login part
    view1.html            --> the login template
    view1.js              --> this is the login controller
    view1_test.js         --> tests of the controller
  Registration/                --> the register template and logic
    view2.html            --> the registration template
    view2.js              --> the registration controller
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
# Screenshot
#Login Page
![alt text](https://lh3.googleusercontent.com/okRKH_h91ZpmTC7w_YjL880BJjIlOq5679kMZl_KnRzoypPqQhCxADbnVwI_0v5F-oN0mGUjeu2aQh1QcXixPHdmWedMVlatQChV9doOPzb2NqUN2EnZ3SMm_BgOhhtW2XrN0K8F_ywI0c9QOkIA6WpfFJD72kMFk89bTK0g3KMJCkNGxo4SEQUSPGBHwqLIx6YE7ckNb_hCbCDdHTsyRu3D5d8Wv9eXzmEMlvFF-glXg6O_e4_C9xYvMi_4o2TDpkWilff3iw4zzi-bDGPuCv07oU8tRPJFRQOfA0BUgx8LqGsUJvGqb8b0KWhkbtF6z3XmrVpXy3gI7V6xWDe8Nl2YG_aFwv9sDq8OzZ6rFlzPIAKHjlSCRv9FXLU2EMHYuXVYPCMKNLvNZrOBlrNL4Pe17Cj-ihuJnkkloctVMC0rlw3fJu8geHKiVlvmb3QYMLBLBbnz6A9xbLALQzEdqF3rpkfHC6TzSvVP9S9t_MWPFkyMtvBPlEgc5LUjDT-HZTrj727HARQ55YbtcNf-VHf4S0KaNGdmkMt6rr1RORu7eh-KsaVnMb0SyMQH5GZvprRQA4T8WUHZXScaD4YwEPIdIR5hHWm_HE7mfNg=w1162-h653-no)
#Registration Page
![alt text](https://lh3.googleusercontent.com/O7Vwd2_reuSi68EvGA6v4bY5dbeeym06zfE9tPO0TyCl3_m0ZXB47gA7ocgkO5cN8s0Y5U3in3EHV8qZc2QSzfbz4sA85swNrAefxonO4Pi5e0Ymvc8EATtUtfztHbkbTV4GlrAUYybibXJze17TJPshh3fQCkLCNwwfQ39grXkxHvpcXaP6kAMsTuMCU5OMCXj9eAc64-wADYorUwBgPvTpQHvQG0h2h1F4TeXbr7D-2vfAgjeANbs8W5-2fgQgEDHnJoKPLyWCmLt10A7yYdpRe-vNfv60Ftc-zBB5P9Oo-itfVoarwZwVK7mbADdspuzU3FzVBiadw0LMuJxf-Xklw83yDPyIEsW1J7N4fSnoZmpqrfAQoQQ-3INDrMuenrU69hu7hCd9PjI3q4KRolNp-ej59JdnTB1XhL5qo57s__h6sso9pH7VRnn22MLof-TuAslqJbTzsKlao733nQUBfcHiubjwAjmAotPF1BSZPFnfbRwBeqrwyKI8frrJbgaHdxEQgwUNYu30BhfJH2SYTjo3CitQYBn1_E7BCQd2LgSJLToTj-oLgV4eYP9YqdwIZ7BaB7oe6Y5SRlKISiHCGKNkKUsEKgqCMYQ=w1162-h653-no)
#Home Page For User
![alt text](https://lh3.googleusercontent.com/26pfH6BKlURpXAdcsaUsGS5sfAuQFMohOMxtCS6RZdFvV76tc7IdFxZ9IGkO81dUYA6pvOFeqRo3tNH8TokoeWPGPNuXcLNdi6wwyOeqxPMvl4lFskLY64vm1kaW0DxPz4anrqUa36SNatbwOonL-uXRDsIXOrEFg7rKHuhGCpa-Hcuar0GU7wGvpo0Uw3s9Q9QJImsbHQOIZ24v96Qdivrgwuk710df4w5WzQLFP4CNEXWCTJu-JFdIpIODH8ocd8P2UGOvXwDZZqyYJzl3yyTO4_eq9tbtK_kE8Tb6vHS3NTdt3ISeRQldrh8MSA9E-qj1kL6MyPtLj3xcs4IasAVXnk4LcL3W10tarVwIsleniCVGILThZvEOk1SxXfwnbCVfHgzyeEMaT_kWDVwzvT1u5ZBzuFt-OqV0-MTkPHcLu6rC87HvC8a1PKNnA19M8okg4NWoL6eed-IKF2KCdCunIxYUjBbP0V9cAgW_g6VUxcyxcFlahHX6U1PveHSMDzJAHrSD_6EUWg8aPQ0TpoRG3pZ_jqN6BbRZloO1lm5xiWS7-tDLbFt2VH4dlEsewXVpcsNYEeuEkTmt8nv7xIdbxg3KXdTb1xZjTQc=w1162-h653-no)
#Driver Licence forms
![alt text](https://lh3.googleusercontent.com/mkeW8aQ4yjZevsGXXhYsv5U0bqBIAcVvX-Gh6rCzN5i0teFtsBR1_ls4wc8RTVHRVTU21QBFHtJs3gIdQRZwiVGew19JZD_RFYHx-ZzIWu_GlyFAjJl5UXlAsonGoTbc4dcQ55gceCiVsuTs5Sr-pUXP9KZIGSp5CP90swsexhy-vIYZVn1KyLiIzhat6reys7LTwpucqhLuHY6dDJMt_czXKlRrwJzPvwtsn8tdXsVzOy3nlSXCWUht5tBQIrLsKFdAN2ygGbkEMD9oHNifj4pTi_HtbAFlIOP8z-lcvzM4rj9noD2REgs_gLSIDNyV8OzmNRTD15bU3h0lVPPG8zn7YUArUvZNQTSGcTbbxH0cJt7txnGip6h8oUVJ2j5vI8xT_p3lhPH3D8yAubSaMDfGN2JHLqEunTzRHK5_QBK9RzFiUDI483YQCsuKtVYM-4IEAQd8_YHKtS8e70fMYDyQBdXcO72TbVRbIH4Tp8gp7JaBM1rq3R5Q5Trt0Sl28J0Wc0g7gyt54cFdrQZZNA3p_1egH8w2xWyuFKwLsIjxdiY_0dYdnCQqaqunVC_q7NVKnPZ24vpuD2PFuRqypkpka2dHGpiRQAUcnTo=w1162-h653-no)
#Adhar Card forms
![alt text](https://lh3.googleusercontent.com/iUMGAUdxcKsLZd6Iyu65ilYcmGF0zVV8uJDSvme9jcQYoNA9DH5LpggL315RpQ1eQc0z-6xLagbRFouDGb7d_m-bmx3e_86IF0BnA5FhB5X7GV6lwgZpEIkA0_rtUmnI9U869XOUurwVncv2l_ZV-ZbvsC9dExPQjsC-vVLClufolujyXBvzQpd9anNTOF2jBUMSniEsG2gUmM0SXZv3dCAfx4vIelE30WpTAPrqLOqyjW2lkOWc4FsU9ajQLUyzw4n9rYfeXZYscCCk24Kg0mZq8NeHh9FbF9gavi6YZxLg-QXjulVQhRnwiLCreuoT71yNpPpYd6fjsZ4u0p1fdjNQBFhFPgvDnb-56hsWCk-EnthOE-FPY_LXD1yh0nbtaFFvi1eFJjJ7HZOdLb8Z2FgJoqjhe-un9ln3TCIGwYqjFdnGj5oPoawHQP81LfOm672YETN8fvRn10I18W2-GOJCk7sZWdHK9_trFxW7u41gBf65Hpjir5XJGLQk2jSXRbViMDp7cgadaN1VDXVfjrURv9z05xMg3mQknM5VJZsyMbpGsLjWiYv-tdfGWiMbp5E_-jd7oy0e8HN95_W2aNXIwnibqchzGC-pB_I=w1162-h653-no)
#Admin Home Page
![alt text](https://lh3.googleusercontent.com/LO8LbIrsfYm8i03JyfJ7tLiXPIjk9bPOdGPEu2U8RSHprr7y9oS1kWBQ4lJhSQv7P55SRXtdRpZoTO2bpE6m1SpeEuqImQGdxOActTsfVuhOqmDZWmNM8XxEaIapi1VZAzL3Y-preDvPa6zLNJidHQgJiK1djD1FIyGlo786j9y4f5uC33dvinYvK_F31QB-4RfCS84eFMmTLezphFqVckbfbvPcpYxDfAoCsrxC4YQjX7qxek0LFFQzuf7kVzUW8o17ArLVV78xsvMZw20da-LwNWZ_dQdle54zYHEDhc1v-bYQp1D6yTDn-luu6hxtD4l7B4KwXEcqHRZMAajtnD2AnY_V_55hFD-jeP96G0Lg_uSz-SMoA-xp4OMEholacfeTbwXHZkOVJjYONQ_X7SkSjl6WlMKItfzgSRtJsJsowbSziXMKzjyzV42X1ZAlgPx9g8R__gIH0-mQc0GT-GPQJEWMQU1LkOXPBibjRT23VpwNTRm3Ed_Wz8QUrtz1mHPzCWoxTxUrNjPRDEgJZemcREoy9X4EGIUNSFKtxkwMUAqcdiHTwB0nOwblT0owXyjXV4KoeoonFJ0uU1tbNKqC--YkxG42hi1kOw4=w1162-h653-no)
#Admin can add adhar details
![alt text](https://lh3.googleusercontent.com/NdPIFiNccRFm1w92eLTEC7fgG414RL7lp9t9cUaPEmrNk3zIHQBuyJJzH09Iz3Ck-thwVlehxRAek1FNBtPcEEM9aLljemks_zzwb9VheOWTu1vj4cHCW-SBTw3TloCTQxqFEfLkDHPUIz1uPNADIfTzm5-6X_Hc9EXboiqlpGwt46MiswKVNu6K87e0zKGzyvqdo9oDidzJMn9yKVgm6xzh5yDwvOo6o24ueFjF4kQOGxA7P5vXSfLf1KAY2pcpleKi0uXdiZhH0hvmmnlIrPmLVoffFwwLD0K9JAYfkoh5ylSVMVoyzMEliSVQgG6Wvp5nDN6_2B7YztUI7FSRLy-z2lnDoTeaW8vlJOpB_lXzveODvUpkKqurqDzOlQOBpX90LZYdaCPHHCJJxemqx_o_TiCrQvhi0C21igb4mvVY4rjJvxTSJwSOYxCXWXbP2nxAoEnGfKu013wPgIK_ww55SwSh6JOksdmQLrQpImE8zimK-j8aruhcilWTnayfuJSzYLFxSDynpZqzmX3rddAqzWlI4oc9_0uBCvpV5Da_wZOpP2M4pcL8QFxGxQWs61Kcn6kucMFsofEIJSLeU-s57tCt25Kn_Md7vfo=w1162-h653-no)
#Admin can add driver licence details
![alt text](https://lh3.googleusercontent.com/9SH3n2rQVRr6FkJJIpMMXxnaEMeLi0wzdEtEsqPtdBkQAiyTXYpE_oQFQ7-MJFe2mAajjYWr3xqj1CqaGuIiqy0mwgkQM4LTezfDYF42ccN0G5nsT-NjFZpuH28wq4edG1kRVZD1gEjTv09wk-hgXC1hJNUAUgpHvlyjQh9y8tHFpPeHRnmg8cbnClerL5hHcHbEyrk7D1ep03Y6Eko8ayHnsBEAcL960cbZ1gDhU8y9_OvtMWLQgQSGd69Iv-k48d0OZaE2vgcURvdRt7zUaKTrdz3bZsHjZhTOY1GcTetXTWqw4SOcfRcWLkUvPXUyszdpI3w_mQFAoU5tBoLnAuNIjQieYDja07vRr9c3XQCiG0D4PY6oz8VgnYrNFZRC7rGsSaaIkUaEtEhJocZuiX-6iCKLeXnIKI690WtCZ2F-l5OLRZk4H5rxPDxQE92N0kR41mv1wcY5CK7vpUBIpnpER31s7QiG0Ad3gABjjTWBoZmxRApxCZwX4U5t8T6E_ehzprC_oJHzyV1kb8OLJthvVS3VGXf4I9axya4briXIIBq572lJ8moO6L3u7llgv5O1YudfuGdSmUGSFLkICXTmB4TY61QF4QL8Nlw=w1162-h653-no)
#Admin can view aadhar and driver licence details for user.
![alt text](https://lh3.googleusercontent.com/INCqvN-BqyBZrETDNZxzbvO6vjvrQCZ-lUSXL94nI3NnhFd6TEw3sxRNAemD_A8h8CDKUq1M691cLLFA9TyzTS7o_AgrKFAO1mIxtXuixP8oJhrW6ekYfOiMW4lLS5D1WdIFOozHkaEf3ZvgzP-zaIFer7rnCgrPw42ltOTbIneSALFV23CwSkHwJfSAkp0w5ah4MGIgwUIo5VB1KjD01-T3bK5mJo5HbxU_DF57QOVTWFp-ZHX77O5cQReNvyZfp9nMck35uKUCI4YaFIK8_uIXU5bTopPQqHHNNn3-axCh54DSov8dY4I-BjSymQYG7u0cclXSs9OReRgbfLlMFIXIvEKzxpLM-9hZ5pUyCYkHdWgRcWd0-ynIAsU85Fmv0LnoZ6lKWQZOwJ-H0E8bjB-8RlS6WeozH-QoUtiyHUOzZKavwoLa2T8irzHxF0BdAHN8MDuBxJyLlVbnIj30Dl878scaDqlHqwRV72Ts0KNMdTVnJ_OV0sSF1Mx8CALxu3GFX9p509XbIZBHcN1V4hSCgiqSPos6Sp6ACY94GwBq604q_C0hyz2HFeqkTH2cOEb1BYc_gkUPWPnvGRhi_iqmcl8jcT41dfMUlfw=w1162-h653-no)
#Admin can search for the user by typing into the search box.
![alt text](https://lh3.googleusercontent.com/AGGXe3wbSWiCJl5RRVdfl5-Eir1EVG1EJ3X-byA-v5M7c-NFDY9QicvfdWXH75LKS3xbIQ4TXSI4CF3-BIhj88XWRqWk873wj-EoYaFva5mw2xI9EvwOOWmgIQMNwLy4W3Peb2rTW8_zZUj272yPO1VE2RKpGiUVMhPiPVclEcD-g1R394naJIKYOLurdAqMh0HMp76MslKGbcYawfAv_frNS7-hJkkwzABvzPpcAtX3PCjzVLmP64TVK1Ty9ChuRI3cHk5Hh9Al5_BSjda2ZtxJNI5mLu_FyAn_hGPiqq6uGy84G6iczdW0Wf4C74bsS1sAWMIVV_6XFapa9DSur0gMs_tvj8-gZiyqR3TVFsB90TUNxV1z_3rOGX51EIQuErxvVF-EIKqajl5MtKYS5rMkRaB8JHu3zpDp6lD7tVPLPmJ9T0Zi8zTazCm7Vae16fcQRBnH1Osvvf-aLlg9OpgSivuPvCKitUBdBTNLpkvjji2tIQ811kKJ2X6d0maQeVGwggjpHxYTO6m3dsjcZqPk8cbU5c2XvpvbDYKyiVmhdzFNdSyUUd-Nv7Xm9WBC8JPLxw_C-atr_CBlFiJsLaVIZTlYRPlm39UppxM=w1162-h653-no)
