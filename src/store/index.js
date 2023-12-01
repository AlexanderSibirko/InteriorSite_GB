import { createStore } from 'vuex'

export default createStore({
  state: {
    //start
    blogs: [
      {
        id: 0,
        tagText: "Kitchen Design",
        imageSrc: "img/article1.png",
        headerText: "Let's Get Solution For Building Construction Work",
        dateText: "26 December,2022"
      },
      {
        id: 1,
        tagText: "Living Design",
        imageSrc: "img/article2.png",
        headerText: "Low Cost Latest Invented Interior Designing Ideas.",
        dateText: "22 December,2022"
      },
      {
        id: 2,
        tagText: "Interior Design",
        imageSrc: "/img/article3.png",
        headerText: "est For Any Office & Business Interior Solution",
        dateText: "25 December,2022"
      },
      {
        id: 3,
        tagText: "Kitchen Design",
        imageSrc: "/img/article4.png",
        headerText: "Lets Get Solution For Building Construction Work",
        dateText: "26 December,2022"
      },
      {
        id: 4,
        tagText: "Living Design",
        imageSrc: "/img/article5.png",
        headerText: "Low Cost Latest Invented Interior Designing Ideas.",
        dateText: "22 December,2022"
      },
      {
        id: 5,
        tagText: "Interior Design",
        imageSrc: "/img/article6.png",
        headerText: "est For Any Office & Business Interior Solution",
        dateText: "25 December,2022"
      }    ],
    projects: [],
    contactsInfo: {
      about : {
        text: "It is a long established fact that a reader will be distracted lookings.",
        socialLinks: [
            {
                svg: "facebook.svg",
                href: "facebook.notexist.com"
            },
            {
                svg: "twitter.svg",
                href: "twitter.notexist.com"
            },
            {
                svg: "instagram.svg",
                href: "LinkedLn.notexist.com"
            },
            {
                svg: "instagram.svg",
                href: "instagram.notexist.com"
            }
        ]
    },
    contacts: {
        address: "55 East Birchwood Ave. Brooklyn, New York 11201",
        email: "contact@interno.com",
        phone: "(123) 456 - 7890"
    }
    },
    achievements: [{
      value: 12,
      text: "Years Of Experiance"
    },
    {
      value: 85,
      text: "Success Project"
    },
    {
      value: 15,
      text: "Active Project"
    },
    {
      value: 95,
      text: "Happy Customer"
    }]
  },
  getters: {
    getAllAchievements : (state) => state.achievements,
    //read
  },
  mutations: {
    //change
  },
  actions: {
    //async
  },
  modules: {
    //multiple states
  }
})
