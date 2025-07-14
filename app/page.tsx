import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Bot,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Package,
  Phone,
  Smartphone,
  Users,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BADAI
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Beneficios
            </a>
            <a href="#casos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Casos de Uso
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Comenzar Ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Automatización Empresarial con n8n
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automatiza tu negocio con{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BADAI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transformamos tus procesos manuales en flujos automatizados inteligentes. Desde agendamiento de citas hasta
            gestión de inventario, todo integrado con WhatsApp y más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            >
              Solicitar Demo Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios de Automatización</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Utilizamos n8n para crear automatizaciones personalizadas que se adaptan perfectamente a tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Automatización WhatsApp</CardTitle>
                <CardDescription>
                  Respuestas automáticas, chatbots inteligentes y gestión de conversaciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Respuestas automáticas 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Chatbots personalizados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Integración con CRM
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Agendamiento de Citas</CardTitle>
                <CardDescription>Sistema automatizado de reservas y recordatorios inteligentes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reservas automáticas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Recordatorios por WhatsApp
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sincronización con calendarios
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Gestión de Inventario</CardTitle>
                <CardDescription>Control automático de stock y alertas inteligentes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Alertas de stock bajo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reportes automáticos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Integración con proveedores
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">CRM Automatizado</CardTitle>
                <CardDescription>Gestión automática de clientes y seguimiento de leads</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Captura automática de leads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Seguimiento personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reportes de ventas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Email Marketing</CardTitle>
                <CardDescription>Campañas automatizadas y segmentación inteligente</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Campañas automáticas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Segmentación avanzada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Análisis de resultados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Integraciones Personalizadas</CardTitle>
                <CardDescription>Conectamos todas tus herramientas en un solo flujo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    APIs personalizadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Webhooks automáticos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sincronización en tiempo real
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir BADAI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos expertos en n8n y automatización empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahorra Tiempo</h3>
              <p className="text-gray-600">Hasta 80% menos tiempo en tareas repetitivas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aumenta Eficiencia</h3>
              <p className="text-gray-600">Procesos más rápidos y sin errores humanos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mejora Atención</h3>
              <p className="text-gray-600">Respuestas inmediatas 24/7 a tus clientes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escalabilidad</h3>
              <p className="text-gray-600">Crece sin límites con automatización</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="casos" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Uso Reales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cómo nuestras automatizaciones transforman diferentes industrias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Clínica Médica</h3>
                  <p className="text-gray-600">
                    Automatización completa de citas: los pacientes reservan por WhatsApp, reciben confirmaciones
                    automáticas y recordatorios. Reducción del 90% en llamadas perdidas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tienda de Retail</h3>
                  <p className="text-gray-600">
                    Control automático de inventario con alertas por WhatsApp cuando el stock es bajo. Pedidos
                    automáticos a proveedores y reportes diarios de ventas.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Restaurante</h3>
                  <p className="text-gray-600">
                    Reservas automáticas por WhatsApp, menú digital interactivo, pedidos a domicilio automatizados y
                    sistema de feedback post-servicio.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Inmobiliaria</h3>
                  <p className="text-gray-600">
                    Captura automática de leads desde redes sociales, seguimiento personalizado por WhatsApp,
                    agendamiento de visitas y reportes de conversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">¿Listo para automatizar tu negocio?</h2>
              <p className="text-xl text-blue-100">Contáctanos y descubre cómo podemos transformar tus procesos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">contacto@badai.com</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-lg">WhatsApp: +1 (555) 987-6543</span>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4">¿Qué incluye nuestra consulta gratuita?</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Análisis de tus procesos actuales
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Identificación de oportunidades de automatización
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Propuesta personalizada con ROI estimado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Demo en vivo de n8n aplicado a tu negocio
                    </li>
                  </ul>
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Solicita tu consulta gratuita</CardTitle>
                  <CardDescription className="text-blue-100">
                    Completa el formulario y nos pondremos en contacto contigo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Nombre"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                    <Input
                      placeholder="Apellido"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Input
                    placeholder="Teléfono"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Input
                    placeholder="Empresa"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                  <Textarea
                    placeholder="Cuéntanos sobre tu negocio y qué procesos te gustaría automatizar"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-[100px]"
                  />
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                    Solicitar Consulta Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">BADAI</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 BADAI. Todos los derechos reservados.</p>
              <p className="text-gray-400 text-sm mt-1">Especialistas en automatización empresarial con n8n</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
