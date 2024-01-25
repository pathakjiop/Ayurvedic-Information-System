import tkinter as tk
from tkinter import ttk

# Define a dictionary of Ayurvedic herbs and their properties

ayurvedic_herbs = {
    "Amla": {
        "Taste": "Sour",
        "Properties": ["Cooling", "Rejuvenating"],
        "Benefits": ["Boosts immunity", "Improves digestion"],
    },
    "Brahmi": {
        "Taste": "Bitter",
        "Properties": ["Cooling", "Nervine"],
        "Benefits": ["Cognitive function", "Memory enhancement"],
    },
    "Peppermint": {
        "Taste": "Cooling",
        "Properties": ["Carminative", "Antispasmodic"],
        "Benefits": ["Digestive aid", "Headache relief"],
    },
    "Lavender": {
        "Taste": "Bitter",
        "Properties": ["Relaxant", "Antiseptic"],
        "Benefits": ["Calming", "Promotes sleep"],
    },
    "Ginger": {
        "Taste": "Pungent",
        "Properties": ["Warming", "Digestive"],
        "Benefits": ["Anti-inflammatory", "Nausea relief"],
    },
        "Turmeric": {
        "Taste": "Bitter",
        "Properties": ["Warming", "Anti-inflammatory"],
        "Benefits": ["Joint health", "Antioxidant"],
    },
    "Chamomile": {
        "Taste": "Bitter",
        "Properties": ["Cooling", "Nervine"],
        "Benefits": ["Calming", "Digestive aid"],
    },
    "Echinacea": {
        "Taste": "Bitter",
        "Properties": ["Cooling", "Immunostimulant"],
        "Benefits": ["Immune system support", "Cold prevention"],
    },
   # Add more herbs and their properties here
}

# Define a dictionary of Ayurvedic remedies for common ailments

ayurvedic_remedies = {
    "Anemia": {
        "Herbs": ["Amla", "Guduchi", "Manjishtha"],
        "Description": "A combination of these herbs can help improve hemoglobin levels.",
    },
    "Headache": {
        "Herbs": ["Peppermint", "Lavender", "Ginger"],
        "Description": "These herbs can help alleviate headaches and migraines.",
    },
    "Common Cold": {
        "Herbs": ["Echinacea", "Ginger", "Honey"],
        "Description": "These remedies can provide relief from common cold symptoms.",
    },
    "Insomnia": {
        "Herbs": ["Valerian Root", "Chamomile", "Lemon Balm"],
        "Description": "These herbs are known for their calming effects and can aid in sleep.",
    },
    "Indigestion": {
        "Herbs": ["Peppermint", "Ginger", "Fennel"],
        "Description": "These herbs can help soothe digestive discomfort and improve digestion.",
    },
     # Add more remedies and their ingredients here
}

# Function to display information about an Ayurvedic herb

def display_herb_info():
    herb_name = herb_name_entry.get()
    if herb_name in ayurvedic_herbs:
        herb_info = ayurvedic_herbs[herb_name]
        result_label.config(
            text=f"Herb: {herb_name}\nTaste: {herb_info['Taste']}\nProperties: {', '.join(herb_info['Properties'])}\nBenefits: {', '.join(herb_info['Benefits'])}"
        )
    else:
        result_label.config(text=f"{herb_name} is not found in the database.")

# Function to display Ayurvedic remedies for an ailment

def display_remedies_for_ailment():
    ailment = ailment_name_entry.get()
    if ailment in ayurvedic_remedies:
        remedy_info = ayurvedic_remedies[ailment]
        result_label.config(
            text=f"Ayurvedic Remedy for {ailment}:\n{remedy_info['Description']}\nIngredients: {', '.join(remedy_info['Herbs'])}"
        )
    else:
        result_label.config(text=f"No remedy found for {ailment} in the database.")

# Create the main window

root = tk.Tk()
root.title("Ayurvedic Information System") 

# Maximize the window

root.state('zoomed')

# Configure styles

style = ttk.Style()
style.configure('Heading.TLabel', font=('Helvetica', 16, 'bold'))
style.configure('TButton', font=('Helvetica', 12))
style.configure('TLabel', font=('Helvetica', 12))
style.configure('TEntry', font=('Helvetica', 12))

# Create a heading label and center it at the top

heading_label = ttk.Label(root ,text="Ayurvedic Information System", style='Heading.TLabel')

heading_label.grid(column=0, row=0, columnspan=3, sticky=tk.EW)

# Create and configure frames
frame2 = ttk.Frame(root, padding=10)
frame2.grid(column=0, row=2, sticky=(tk.W, tk.E))

frame1 = ttk.Frame(root, padding=10)
frame1.grid(column=0, row=1, sticky=(tk.W, tk.E))

# Create labels, entries, and buttons with increased font size
ailment_name_label = ttk.Label(frame2, text="Enter the name of the common ailment:", style='TLabel')
ailment_name_label.grid(column=0, row=0, sticky=tk.W)
ailment_name_entry = ttk.Entry(frame2, font=('Helvetica', 12))
ailment_name_entry.grid(column=1, row=0)
find_remedy_button = ttk.Button(frame2, text="Find Remedy Info", command=display_remedies_for_ailment, style='TButton')
find_remedy_button.grid(column=2, row=0)

herb_name_label = ttk.Label(frame1, text="Enter the name of the Ayurvedic herb:", style='TLabel')
herb_name_label.grid(column=0, row=0, sticky=tk.W)
herb_name_entry = ttk.Entry(frame1, font=('Helvetica', 12))
herb_name_entry.grid(column=1, row=0)
find_herb_button = ttk.Button(frame1, text="Find Herb Info", command=display_herb_info, style='TButton')
find_herb_button.grid(column=2, row=0)

#Result lable
result_label = ttk.Label(root, text="", wraplength=400, style='TLabel')
result_label.grid(column=0, row=3, sticky=(tk.W, tk.E))

# Start the GUI main loop

root.mainloop()
