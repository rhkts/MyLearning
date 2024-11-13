using Markdig;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MarkdownViewerWith.NETFramewrk
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void mdLabel_DragEnter(object sender, DragEventArgs e)
        {
            e.Effect = DragDropEffects.All;
        }

        private void mdLabel_DragDrop(object sender, DragEventArgs e)
        {
            string[] filePath = (string[])e.Data.GetData(DataFormats.FileDrop, false);
            string directoryName = System.IO.Path.GetDirectoryName(filePath[0]);
            string cssFileName = "style.css";

            if (filePath == null || filePath.Length == 0) { return; }

            mdLabel.Text = filePath[0];

            string markdownContent = File.ReadAllText(filePath[0]);

            var pipline = new MarkdownPipelineBuilder()
                .UsePipeTables()
                .Build();

            string htmlContent = Markdown.ToHtml(markdownContent, pipline);

            if (cssBox.Text != "")
            {
                string startCss = "<style>" + Environment.NewLine;
                string endCss = Environment.NewLine + "</style>" + Environment.NewLine;
                string cssContent = startCss + cssBox.Text + endCss;

                htmlContent = cssContent + htmlContent;

                CreateCssFiles(Path.Combine(directoryName, cssFileName), cssContent);
            }
            else
            {
                if (System.IO.File.Exists(Path.Combine(directoryName, cssFileName)))
                {
                    string cssContent = System.IO.File.ReadAllText(Path.Combine(directoryName, cssFileName));
                    htmlContent = cssContent + htmlContent;
                }
            }
            webBrowser1.DocumentText = htmlContent;
        }

        public void CreateCssFiles(string path,string cssCotent)
        {
            File.WriteAllText(path, cssCotent);
        }
    }
}
