# davesauce:saucecms

Super simple CMS package using contentEditable See a demo at [http://sauceCMS.meteor.com](http://sauceCMS.meteor.com).

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

If you are not using a layout named `layout` then you will need to specify your layout name. Also be sure to add a superAdmin so that invidual can access `/saucecms-admin` to assign other superAdmins and admins to edit content.
