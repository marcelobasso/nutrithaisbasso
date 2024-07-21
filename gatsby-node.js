exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;
  
    createRedirect({
        fromPath: `/atendimentos`,
        toPath: `/404`,
    });
      
    createRedirect({
        fromPath: `/sobre-mim`,
        toPath: `/404`,
    });
}