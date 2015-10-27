# davesauce:saucecms

Super simple CMS package using contentEditable See a demo at [http://sauceCMS.meteor.com](http://sauceCMS.meteor.com).

This package was by created by [http://twitter.com/dave_bascom](@dave_bascom), [http://twitter.com/devanbeitel](@devanbeitel), and [http://twitter.com/jesseflorig](@jesseflorig) for the [Meteor Space Camp](http://www.meteorspace.camp) Hackathon.

## Installation
```
meteor add davesauce:sauceCMS
```

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
