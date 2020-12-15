module.exports ={
    "layout": {
      "name": "Flexbox",
      "props": {
        "align": "start",
        "direction": "row",
        "itemStyle":{
          "itemAlign":"v-center"
        }
      },
      "children": [
        {
          "name": "Avatar",
          "gateway": {
            "name": "Gateway",
            "props": {
              "field": "avatar",
              "converter": {
                "avatar": "avatarIcon"
              }
            }
          }
        },
        {
          "name": "Title",
          "gateway": {
            "name": "Gateway",
            "props": {
              "field": "account",
              "converter": {
                "account": "TitleText"
              }
            }
          }
        }
      ]
    }
  }