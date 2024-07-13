import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const Layout = ({children}) => (
  <main>
    <Header />
    <div className="max-w-screen-xl mx-auto my-20">
      {children}
    </div>
    <Footer />
  </main>
);

export default Layout;