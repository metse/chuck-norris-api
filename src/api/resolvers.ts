import Actions from "../transactional/actions";

const actions = new Actions();

const resolvers = {
  Query: {
    categories: async () => {
      const categories = await actions.getCategories();
      return categories.data;
    },
    random: async (category: string) => {
      const joke = await actions.getRandomJoke(category);
      return joke.data;
    }
  }
};

export default resolvers;