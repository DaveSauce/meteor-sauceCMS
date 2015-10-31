# davesauce:saucecms

Super simple CMS package using contentEditable See a demo at [http://sauceCMS.meteor.com](http://sauceCMS.meteor.com).

This package was by created by [@dave_bascom](http://twitter.com/dave_bascom), [@devanbeitel](http://twitter.com/devanbeitel), and [@jesseflorig](http://twitter.com/jesseflorig) for the [Meteor Space Camp](http://www.meteorspace.camp) Hackathon.

## Installation
```
meteor add davesauce:sauceCMS
```

## Usage
Then wherever you want easily editable text, install:

```
{{> sauceCMS elementName="uniqueElementName"}}
```
`uniqueElementName` must be unique for each sauceCMS tag you install. Alternatively, you could repeat the same `elementName` across multiple elements if you want all of them to be updated when one is edited. 

## Description

When you install sauceCMS you will need to setup some settings in your `settings.json` file. Below is an example:

```
{
  "public": {
    "sauceCMS": {
      "layoutName": "sampleLayout",
      "superAdmin": "superAdmin@example.com"
    }
  }
}
```

If you are not using a layout named `layout` then you will need to specify your layout name.

Also be sure to add a superAdmin so that individual can access `rootUrl/saucecms-admin` to assign other superAdmins and admins to edit content.
