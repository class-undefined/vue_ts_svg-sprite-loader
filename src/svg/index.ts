const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext)
const req = require.context('./file', false, /\.svg$/)
requireAll(req)
