namespace MarkdownViewerWith.NETFramewrk
{
    partial class Form1
    {
        /// <summary>
        /// 必要なデザイナー変数です。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 使用中のリソースをすべてクリーンアップします。
        /// </summary>
        /// <param name="disposing">マネージド リソースを破棄する場合は true を指定し、その他の場合は false を指定します。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows フォーム デザイナーで生成されたコード

        /// <summary>
        /// デザイナー サポートに必要なメソッドです。このメソッドの内容を
        /// コード エディターで変更しないでください。
        /// </summary>
        private void InitializeComponent()
        {
            this.mdLabel = new System.Windows.Forms.Label();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.cssBox = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // mdLabel
            // 
            this.mdLabel.AllowDrop = true;
            this.mdLabel.BackColor = System.Drawing.Color.LemonChiffon;
            this.mdLabel.Location = new System.Drawing.Point(12, 9);
            this.mdLabel.Name = "mdLabel";
            this.mdLabel.Size = new System.Drawing.Size(159, 169);
            this.mdLabel.TabIndex = 0;
            this.mdLabel.Text = "label1";
            this.mdLabel.DragDrop += new System.Windows.Forms.DragEventHandler(this.mdLabel_DragDrop);
            this.mdLabel.DragEnter += new System.Windows.Forms.DragEventHandler(this.mdLabel_DragEnter);
            // 
            // webBrowser1
            // 
            this.webBrowser1.Location = new System.Drawing.Point(178, 9);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(610, 429);
            this.webBrowser1.TabIndex = 1;
            // 
            // cssBox
            // 
            this.cssBox.Location = new System.Drawing.Point(13, 182);
            this.cssBox.Multiline = true;
            this.cssBox.Name = "cssBox";
            this.cssBox.Size = new System.Drawing.Size(158, 256);
            this.cssBox.TabIndex = 2;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.cssBox);
            this.Controls.Add(this.webBrowser1);
            this.Controls.Add(this.mdLabel);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label mdLabel;
        private System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.TextBox cssBox;
    }
}

