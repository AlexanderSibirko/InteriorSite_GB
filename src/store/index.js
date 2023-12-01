import { createStore } from 'vuex'
import BlogsJson from '../assets/data/Blogs.json'
import ProjectsJson from '../assets/data/Projects.json'
import AchievementsJson from '../assets/data/achievementsData.json'
import ContactsInfoJson from '../assets/data/footerData.json'


export default createStore({
  state: {
    blogs: [],
    projects: [],
    contactsInfo: {},
    achievements: []
  },
  getters: {
    getAllAchievements : (state) => state.achievements,
    getAllBlogs: (state) => state.blogs,
    getAllProjects: (state) => state.projects,
  },
  mutations: {
    SET_BLOGS_DATA (state, blogsData) {
      state.blogs = blogsData.blogs;
    },
    SET_PROJECTS_DATA (state, projectsData) {
      state.projects = projectsData.projects;
    },

    SET_ACHIEVEMENTS_DATA (state, achievementsData) {
      state.achievements = achievementsData.achievements;
    },
    LOAD_CONTACTS_DATA (state, contactsData) {
      state.contactsInfo = contactsData.footerData;
    }
  },
  actions: {
    loadBlogs ({ commit }) {
      setTimeout(() => {commit('SET_BLOGS_DATA', BlogsJson)}, 1000);
    },
    loadProjects ({ commit }) {
      setTimeout(() => {commit('SET_PROJECTS_DATA', ProjectsJson)}, 1500);
    },
    loadAchievements ({ commit }) {
      setTimeout(() => {commit('SET_ACHIEVEMENTS_DATA', AchievementsJson)}, 800);
    },
    loadContactInfo ({ commit }) {
      setTimeout(() => {commit('LOAD_CONTACTS_DATA', ContactsInfoJson)}, 3000);
    },
  },
  modules: {
    //multiple states
  }
})
