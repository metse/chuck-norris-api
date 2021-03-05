import ChuckNorrisService from "../transactional/chuck-norris-service";

const chuckNorrisService = new ChuckNorrisService();

interface Category {
  category: string
};

const resolvers = {
  Query: {
    categories: async () => {
      const categories = await chuckNorrisService.fetchAll();
      return categories.data;
    },
    random: async (context: any, params: Category) => {
      const fact = await chuckNorrisService.fetchRandom(params.category);
      return fact.data;
    }
  }
};

export default resolvers;