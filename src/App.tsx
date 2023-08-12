function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="PreConfiguredJobs" element={<PreConfiguredJobs />} />
          <Route path="DataUtilities" element={<DataUtilities />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
