/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Actualizar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    private Connection con;
    private Statement set;
    private ResultSet rs;

    //el constructor del servlet
    //nos va a ayudar a inicializar la conexion con la bd
    public void init(ServletConfig cfg) throws ServletException {

        //lo primero que necesitamos es trazar la ruta al servidor DB
        String URL = "jdbc:mysql:3306//localhost/registro4iv8";
        //driver:gestor:puerto//IP/nombreBD

        String userName = "root";
        String password = "OBYMA107";

        try {
            //colocamos el tipo de driver
            Class.forName("com.mysql.jdbc.Driver");

            /*
            en algunas ocaciones enviar error al conectarse con la bd
            y eso se debe a que ya estegrado el puerto en el driver
             */
            URL = "jdbc:mysql://localhost/registro4iv8";
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            System.out.println("Conexion exitosa");

        } catch (Exception e) {

            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());

        }
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Modificar</title>");
            out.println("<link rel='stylesheet' href='./CSS/style.css'>");
            out.println("<script languague='JavaScript' type='text/JavaScript' src='JS/validar.js'></script>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Modificar at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Consultar</title>");
            out.println("</head>");
            out.println("<body>");

            try {
                //codigo java para la consulta
                String nom, appat, apmat, correo, idd;
                String edad;

                //tenemos que crear la querry
                String q = "update mregistro set ";
                //"update mregistro set apmat_usu =" apmat;

                set = con.createStatement();

                idd = request.getParameter("idcambiar");

                if (idd == "") {

                    out.println("No hay id.");

                } else {
                    int id1 = Integer.parseInt(request.getParameter("idcambiar"));

                    nom = request.getParameter("nombre");
                    appat = request.getParameter("appat");
                    apmat = request.getParameter("appmat");
                    correo = request.getParameter("correo");
                    edad = request.getParameter("edad");

                    if (nom != "") {

                        set.executeUpdate(q + "nom_usu ='" + nom + "' where id_usu =" + id1);

                    } else {
                    }
                    if (appat != "") {

                        set.executeUpdate(q + "appat_usu ='" + appat + "' where id_usu =" + id1);

                    } else {
                    }
                    if (apmat != "") {

                        set.executeUpdate(q + "apmat_usu ='" + apmat + "' where id_usu =" + id1);

                    } else {
                    }
                    if (correo != "") {

                        set.executeUpdate(q + "correo_usu ='" + correo + "' where id_usu =" + id1);

                    } else {
                    }
                    if (edad != "") {
                        int edad1 = Integer.parseInt(edad);
                        set.executeUpdate(q + "edad_usu =" + edad1 + " where id_usu =" + id1);

                    } else {
                    }
                }

                //codigo java para la consulta
                String nomm, appatt, apmatt, correoo;
                int edadd, iddd;
                
                //tenemos que crear la querry
                
                String qq = "select * from mregistro";
                
                set = con.createStatement();
                rs = set.executeQuery(qq);
                
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Modificar</title>");  
                out.println("<link rel='stylesheet' href='./CSS/style.css'>");
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Datos actualizados</h1>");
                out.println("<br>");
                out.println("<table border='2' id='tablaowo'>"
                    + "<thead>"
                        + "<tr><th>ID</th>"
                        + "<th>Nombre Completo</th>"
                        + "<th>Edad</th>"
                        + "<th>Email</th></tr>"
                    + "</thead>");
                while(rs.next()){
                //mientras exista un registro hay que obtener los datos de la consulta
                    iddd = rs.getInt("id_usu");
                    nomm = rs.getString("nom_usu");
                    appatt = rs.getString("appat_usu");
                    apmatt = rs.getString("apmat_usu");
                    edadd = rs.getInt("edad_usu");
                    correoo = rs.getString("correo_usu");
                    
                    out.println("<tbody>"
                            + "<tr><td>"+iddd+"</td>"
                            + "<td>"+nomm+" "+appatt+" "+apmatt+" </td>"
                            + "<td>"+edadd+"</td>"
                            + "<td>"+correoo+"</td></tr>"
                            + "</tbody>");
                }
                //rs.close();
                set.close();

                System.out.println("Modificación Exitosa");

            } catch (Exception e) {
                System.out.println("Error al realizar la modificación");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());

            }
            out.println("</table>");

            out.println("<br>"
                    + "<a href='index.html'>Regresar a la pagina principal</a>"
                    + "<br>"
                    + "<a href='Registro'>Insertar nuevo Usuario</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    public void destroy() {
        try {
            con.close();

        } catch (Exception e) {
            super.destroy();

        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
