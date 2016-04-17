using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Kozmodrom.Startup))]
namespace Kozmodrom
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
